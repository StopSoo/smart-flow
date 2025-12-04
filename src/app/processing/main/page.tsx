"use client";

import { useCallback, useEffect, useState } from "react";

import Layout from "@/components/layout/Layout";
import { DailyDataChart } from "@/components/processing/main/DailyDataChart";
import { ExceptionDataChart } from "@/components/processing/main/ExceptionDataChart";
import { InspectionChart } from "@/components/processing/main/InspectionChart";
import type {
    DailyDataPoint,
    DataInspectionData,
    ExceptionDataPoint,
} from "@/types/processing/types";
import { ProductionLines } from "@/components/common/ProductionLines";
import { commonApi } from "@/apis/common";
import { processingApi } from "@/apis/processing";
import { diffTime, getDateBefore } from "@/utils/formatDate";
import { useNoChangeDateStore } from "@/store/store";
import Modal from "@/components/modal/Modal";

export default function MainPage() {
    const todaysDate = new Date().toISOString().split('T')[0];
    const [dailyNormalDefectData, setDailyNormalDefectData] = useState<DailyDataPoint[]>([]);
    const [exceptionData, setExceptionData] = useState<ExceptionDataPoint[]>([]);
    const [inspectionData, setInspectionData] = useState<DataInspectionData[]>([]);
    const [startDate, setStartDate] = useState(getDateBefore(todaysDate, 29));
    const [endDate, setEndDate] = useState(todaysDate);

    const { isModalOpen, setIsModalOpen, setIsModalClose } = useNoChangeDateStore();

    const handleData = async () => {
        try {
            const response = await commonApi.checkDailyNormalDefectRatio(todaysDate);

            if (response && response.status === "SUCCESS") {
                // 정상/불량 데이터
                const normalDefectData =
                    response.data.lines.map((line) => ({
                        productionLine: line.line_name,
                        normalCount: line.normal_count,
                        defectCount: line.defective_count
                    }));
                setDailyNormalDefectData(normalDefectData);
                // 예외 데이터
                const exceptionData = response.data.lines.map((line) => ({
                    productionLine: line.line_name,
                    count: line.exception_count,
                }));
                setExceptionData(exceptionData);
            }
        } catch (error) {
            console.error('handleData error', error);
        }
    };

    const handleInspectionData = async () => {
        try {
            const response = await processingApi.viewDataInspection(startDate, endDate);

            if (response && response.status === "SUCCESS") {
                setInspectionData(response.data);
            }
        } catch (error) {
            console.error('handleInspectionData Error', error);
        }
    };

    const handleDates = () => {
        if (diffTime(startDate, endDate) > 29) {
            setIsModalOpen();
            setStartDate(getDateBefore(endDate, 29));
            return;
        }
        handleInspectionData();
    };

    useEffect(() => {
        handleData();
    }, []);

    useEffect(() => {
        handleDates();
    }, [startDate, endDate]);

    return (
        <Layout headerTitle="AI 컨택트 핀 가공 플랫폼">
            <div className="flex flex-1 fixed top-[140px] left-[242px] w-[calc(100%-242px)] z-50">
                <ProductionLines />
            </div>
            <div className="flex flex-col flex-1 pt-[310px]">
                <div className="grid grid-cols-2 gap-6 p-6">
                    <DailyDataChart data={dailyNormalDefectData} />
                    <ExceptionDataChart data={exceptionData} />
                </div>

                <InspectionChart
                    data={inspectionData}
                    startDate={startDate}
                    endDate={endDate}
                    onStartDateChange={setStartDate}
                    onEndDateChange={setEndDate}
                    onDateChange={handleDates}
                />
            </div>
            {
                isModalOpen
                    ? <Modal
                        text="최대 30일의 데이터 조회가 가능합니다."
                        onClick={() => setIsModalClose()}
                        onClose={setIsModalClose}
                    />
                    : null
            }
        </Layout>
    );
}