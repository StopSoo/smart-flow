'use client';

import { commonApi } from "@/apis/common";
import { ViewDailyNormalDefectRatioLines } from "@/types/common/types";
import { motion } from "framer-motion";
import { Suspense, useEffect, useState } from "react";

export function DailyRollRateChart() {
    const chartHeight = 260;
    const todaysDate = new Date().toISOString().split('T')[0];

    const [data, setData] = useState<ViewDailyNormalDefectRatioLines[]>([]);

    const handleData = async () => {
        try {
            const response = await commonApi.checkDailyNormalDefectRatio(todaysDate);

            if (response && response.status === "SUCCESS") {
                setData(response.data.lines);
            }
        } catch (error) {
            console.error('handleData error', error);
        }
    };

    useEffect(() => {
        handleData();
    }, []);

    return (
        <Suspense fallback={"로딩 중 ..."}>
            <div className="border-[4px] border-light-gray p-6 bg-white">
                <div className="flex items-start justify-between mb-6">
                    <h3 className="text-xl text-black font-bold">생산라인 별 일일 ROLL 양불 비율</h3>
                </div>

                <div className="w-full relative mb-3" style={{ height: chartHeight }}>
                    <div className="absolute h-full left-0 top-0 flex flex-col justify-around text-sm text-medium-gray w-20">
                        {data.map((d, idx) => (
                            <span key={idx} className="h-8 flex items-center">{d.line_name}</span>
                        ))}
                    </div>

                    <div className="w-full pl-22 h-full flex flex-col justify-around">
                        {
                            data.map((item, idx) => {
                                const normalRate = item.total_count > 0
                                    ? (item.normal_count / item.total_count) * 100
                                    : 0;
                                const defectRate = item.total_count > 0
                                    ? (item.defective_count / item.total_count) * 100
                                    : 0;

                                return (
                                    <div key={idx} className="w-full flex flex-row items-center h-8 relative">
                                        <div className="absolute left-0 top-0 w-full h-full border-l border-light-gray" />
                                        <motion.div
                                            className="h-full bg-point-blue/80 flex items-center justify-center text-xs text-white font-semibold relative z-10"
                                            initial={{ width: "0%" }}
                                            animate={{ width: `${normalRate}%` }}
                                            transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.05 }}
                                        >
                                            {normalRate > 5 && `${normalRate.toFixed(1)}%`}
                                        </motion.div>
                                        <motion.div
                                            className="h-full bg-point-orange/70 flex items-center justify-center text-xs text-white font-semibold relative z-10"
                                            initial={{ width: "0%" }}
                                            animate={{ width: `${defectRate}%` }}
                                            transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.05 }}
                                        >
                                            {defectRate > 5 && `${defectRate.toFixed(1)}%`}
                                        </motion.div>
                                    </div>
                                );
                            })
                        }
                    </div>

                    <div className="absolute left-22 top-0 right-0 h-full flex flex-row justify-between pointer-events-none">
                        <div className="w-[1px] bg-light-gray/50 h-full" />
                        <div className="w-[1px] bg-light-gray/50 h-full" />
                        <div className="w-[1px] bg-light-gray/50 h-full" />
                        <div className="w-[1px] bg-light-gray/50 h-full" />
                        <div className="w-[1px] bg-transparent h-full" />
                    </div>
                </div>

                <div className="pl-20 flex flex-row justify-between text-sm text-medium-gray">
                    <span>0%</span>
                    <span>25%</span>
                    <span>50%</span>
                    <span>75%</span>
                    <span>100%</span>
                </div>

                <div className="flex justify-center gap-4 mt-4 text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-point-blue/80" />
                        <span>양품</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-point-orange/70" />
                        <span>불량</span>
                    </div>
                </div>
            </div>
        </Suspense>
    );
}