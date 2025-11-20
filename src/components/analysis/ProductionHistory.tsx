'use client';

import { useState } from "react";
import Button from "./Button";
import { RollCountCardStatus, PeriodType } from "@/types/analysis/types";
import { PERIOD_MOCK_DATA } from "./mockData";
import ProductionLineChart from "./ProductionLineChart";

function RollCountCard({ line }: { line: RollCountCardStatus }) {
    return (
        <div className="w-[600px] border-[4px] border-light-gray p-6 bg-white">
            <div className="flex flex-row items-center justify-center gap-3 mb-4">
                <h3 className="text-xl text-black font-bold">{line.productName}</h3>
            </div>
            <div className="flex flex-col items-center gap-2 text-medium-gray">
                <p>ROLL {line.rollsProduced}개 생산</p>
                <p>
                    양품 {line.normalCount}개 | 불량 {line.defectCount}개
                </p>
            </div>
        </div>
    );
}

export default function ProductionHistory() {
    const [period, setPeriod] = useState<PeriodType>('Daily');
    const [currentPage, setCurrentPage] = useState(1);

    const currentData = PERIOD_MOCK_DATA[period];

    const handlePeriodChange = (newPeriod: PeriodType) => {
        setPeriod(newPeriod);
        setCurrentPage(1);
    };

    return (
        <div className="flex flex-col p-6 gap-6">
            <div className="flex flex-row items-center justify-between">
                <h2 className="text-3xl text-black font-bold">생산 현황 히스토리</h2>
                <div className="flex flex-row gap-4 items-center">
                    <div className="px-6 py-3 bg-white border-2 border-light-gray rounded-full text-black font-semibold">
                        {currentData.dateRange.startDate}
                    </div>
                    <span className="text-2xl text-medium-gray">—</span>
                    <div className="px-6 py-3 bg-white border-2 border-light-gray rounded-full text-black font-semibold">
                        {currentData.dateRange.endDate}
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-between">
                <Button title="Daily" isActive={period === "Daily"} onClick={() => handlePeriodChange("Daily")} />
                <Button title="Weekly" isActive={period === "Weekly"} onClick={() => handlePeriodChange("Weekly")} />
                <Button title="Monthly" isActive={period === "Monthly"} onClick={() => handlePeriodChange("Monthly")} />
                <Button title="Annual" isActive={period === "Annual"} onClick={() => handlePeriodChange("Annual")} />
            </div>

            <div className="flex flex-col p-6 border-[4px] border-light-gray">
                <div className="flex items-start justify-between mb-6">
                    <h3 className="text-xl text-black font-bold">생산 품목 별 ROLL 양불 수량</h3>
                </div>
                <div className="flex flex-row gap-6 items-center justify-between">
                    {
                        currentData.rollCounts.slice((currentPage - 1) * 2, currentPage * 2).map((line) => (
                            <RollCountCard key={line.id} line={line} />
                        ))
                    }
                </div>
            </div>

            <div className="border-[2px] border-light-gray">
                <div className="grid grid-cols-2">
                    <ProductionLineChart
                        title="생산 품목 별 ROLL 총 생산 현황"
                        data={currentData.productionTrend}
                        maxValue={period === 'Daily' ? 26 : 100}
                    />
                    <ProductionLineChart
                        title="생산라인 별 ROLL 총 생산 현황"
                        data={currentData.productionTrend}
                        maxValue={period === 'Daily' ? 26 : 100}
                    />
                    <ProductionLineChart
                        title="생산 품목 별 ROLL 불량품 생산 현황"
                        data={currentData.defectTrend}
                        maxValue={period === 'Daily' ? 2 : 10}
                    />
                    <ProductionLineChart
                        title="생산라인 별 ROLL 불량품 생산 현황"
                        data={currentData.defectTrend}
                        maxValue={period === 'Daily' ? 2 : 10}
                    />
                </div>
            </div>
        </div>
    );
}