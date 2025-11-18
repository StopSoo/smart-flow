"use client";

import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { DailyDataChart } from "@/components/processing/main/DailyDataChart";
import { ExceptionDataChart } from "@/components/processing/main/ExceptionDataChart";
import { InspectionChart } from "@/components/processing/main/InspectionChart";
import type {
    DailyDataPoint,
    ExceptionDataPoint,
    InspectionDataPoint,
} from "@/types/processing/types";
import { ProductionLines } from "@/components/processing/main/ProductionLines";

export default function MainPage() {
    const [startDate, setStartDate] = useState("2025-05-01");
    const [endDate, setEndDate] = useState("2025-05-21");
    // 목데이터
    // TODO: API 연동
    const dailyData: DailyDataPoint[] = [
        { productionLine: "생산라인1", normalCount: 1500000, defectCount: 55500 },
        { productionLine: "생산라인2", normalCount: 1400000, defectCount: 11700 },
    ];
    // 목데이터
    // TODO: API 연동
    const exceptionData: ExceptionDataPoint[] = [
        { productionLine: "생산라인1", count: 120 },
        { productionLine: "생산라인2", count: 20 },
    ];
    // 목데이터
    // TODO: API 연동
    const inspectionData: InspectionDataPoint[] = [
        { date: "2025.05.01", inspected: 90, uninspected: 10 },
        { date: "2025.05.02", inspected: 85, uninspected: 15 },
        { date: "2025.05.06", inspected: 75, uninspected: 20 },
        { date: "2025.05.07", inspected: 65, uninspected: 25 },
        { date: "2025.05.08", inspected: 70, uninspected: 30 },
        { date: "2025.05.09", inspected: 60, uninspected: 35 },
        { date: "2025.05.11", inspected: 80, uninspected: 20 },
        { date: "2025.05.13", inspected: 65, uninspected: 30 },
        { date: "2025.05.14", inspected: 60, uninspected: 35 },
        { date: "2025.05.15", inspected: 55, uninspected: 40 },
        { date: "2025.05.16", inspected: 50, uninspected: 45 },
        { date: "2025.05.17", inspected: 70, uninspected: 25 },
        { date: "2025.05.20", inspected: 85, uninspected: 15 },
        { date: "2025.05.21", inspected: 55, uninspected: 40 },
        { date: "2025.05.22", inspected: 70, uninspected: 30 },
    ];

    return (
        <Layout headerTitle="AI 컨택트 핀 가공 플랫폼">
            <div className="flex flex-col flex-1">
                <ProductionLines />

                <div className="grid grid-cols-2 gap-6 p-6">
                    <DailyDataChart data={dailyData} />
                    <ExceptionDataChart data={exceptionData} />
                </div>

                <InspectionChart
                    data={inspectionData}
                    startDate={startDate}
                    endDate={endDate}
                    onStartDateChange={setStartDate}
                    onEndDateChange={setEndDate}
                />
            </div>
        </Layout>
    );
}