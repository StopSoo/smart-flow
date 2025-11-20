import { PeriodData, PeriodType } from "@/types/analysis/types";

export const PERIOD_MOCK_DATA: Record<PeriodType, PeriodData> = {
    Daily: {
        dateRange: {
            startDate: "2025.11.20",
            endDate: "2025.11.20",
        },
        rollCounts: [
            {
                id: "1",
                productName: "contactpin_1",
                rollsProduced: 32,
                normalCount: 31,
                defectCount: 1,
            },
            {
                id: "2",
                productName: "contactpin_2",
                rollsProduced: 0,
                normalCount: 0,
                defectCount: 0,
            },
        ],
        productionTrend: [
            {
                productName: "contactpin_1",
                data: [
                    { date: "0", value: 0 },
                    { date: "1", value: 2 },
                    { date: "2", value: 2 },
                    { date: "3", value: 3 },
                    { date: "4", value: 4 },
                    { date: "5", value: 4 },
                    { date: "6", value: 6 },
                    { date: "7", value: 7 },
                    { date: "8", value: 8 },
                    { date: "9", value: 9 },
                    { date: "10", value: 10 },
                    { date: "11", value: 11 },
                    { date: "12", value: 15 },
                    { date: "13", value: 17 },
                    { date: "14", value: 19 },
                    { date: "15", value: 20 },
                    { date: "16", value: 25 },
                ],
            },
            {
                productName: "contactpin_2",
                data: [
                    { date: "0", value: 0 },
                    { date: "1", value: 1 },
                    { date: "2", value: 2 },
                    { date: "3", value: 4 },
                    { date: "4", value: 4 },
                    { date: "5", value: 5 },
                    { date: "6", value: 6 },
                    { date: "7", value: 7 },
                    { date: "8", value: 8 },
                    { date: "9", value: 9 },
                    { date: "10", value: 11 },
                    { date: "11", value: 11 },
                    { date: "12", value: 12 },
                    { date: "13", value: 13 },
                    { date: "14", value: 14 },
                    { date: "15", value: 15 },
                    { date: "16", value: 16 },
                ],
            },
        ],
        defectTrend: [
            {
                productName: "contactpin_1",
                data: [
                    { date: "0", value: 0 },
                    { date: "1", value: 0 },
                    { date: "2", value: 0 },
                    { date: "3", value: 1 },
                    { date: "4", value: 0 },
                    { date: "5", value: 0 },
                    { date: "6", value: 0 },
                    { date: "7", value: 0 },
                    { date: "8", value: 0 },
                    { date: "9", value: 0 },
                    { date: "10", value: 1 },
                    { date: "11", value: 0 },
                    { date: "12", value: 0 },
                    { date: "13", value: 0 },
                    { date: "14", value: 0 },
                    { date: "15", value: 0 },
                    { date: "16", value: 0 },
                ],
            },
            {
                productName: "contactpin_2",
                data: [
                    { date: "0", value: 0 },
                    { date: "1", value: 0 },
                    { date: "2", value: 0 },
                    { date: "3", value: 0 },
                    { date: "4", value: 0 },
                    { date: "5", value: 1 },
                    { date: "6", value: 0 },
                    { date: "7", value: 0 },
                    { date: "8", value: 0 },
                    { date: "9", value: 0 },
                    { date: "10", value: 0 },
                    { date: "11", value: 1 },
                    { date: "12", value: 0 },
                    { date: "13", value: 0 },
                    { date: "14", value: 0 },
                    { date: "15", value: 0 },
                    { date: "16", value: 0 },
                ],
            },
        ],
    },
    Weekly: {
        dateRange: {
            startDate: "2025.11.17",
            endDate: "2025.11.20",
        },
        rollCounts: [
            {
                id: "1",
                productName: "contactpin_1",
                rollsProduced: 152,
                normalCount: 150,
                defectCount: 2,
            },
            {
                id: "2",
                productName: "contactpin_2",
                rollsProduced: 100,
                normalCount: 99,
                defectCount: 1,
            },
        ],
        productionTrend: [
            {
                productName: "contactpin_1",
                data: [
                    { date: "2025.05.19", value: 60 },
                    { date: "2025.05.20", value: 55 },
                    { date: "2025.05.21", value: 37 },
                ],
            },
            {
                productName: "contactpin_2",
                data: [
                    { date: "2025.05.19", value: 40 },
                    { date: "2025.05.20", value: 60 },
                    { date: "2025.05.21", value: 33 },
                ],
            },
        ],
        defectTrend: [
            {
                productName: "contactpin_1",
                data: [
                    { date: "2025.05.19", value: 1 },
                    { date: "2025.05.20", value: 0 },
                    { date: "2025.05.21", value: 1 },
                ],
            },
            {
                productName: "contactpin_2",
                data: [
                    { date: "2025.05.19", value: 0 },
                    { date: "2025.05.20", value: 1 },
                    { date: "2025.05.21", value: 0 },
                ],
            },
        ],
    },
    Monthly: {
        dateRange: {
            startDate: "2025.11.01",
            endDate: "2025.11.20",
        },
        rollCounts: [
            {
                id: "1",
                productName: "contactpin_1",
                rollsProduced: 924,
                normalCount: 920,
                defectCount: 4,
            },
            {
                id: "2",
                productName: "contactpin_2",
                rollsProduced: 1011,
                normalCount: 1000,
                defectCount: 11,
            },
        ],
        productionTrend: [
            {
                productName: "contactpin_1",
                data: [
                    { date: "2025.05.01", value: 95 },
                    { date: "2025.05.06", value: 80 },
                    { date: "2025.05.11", value: 75 },
                    { date: "2025.05.16", value: 85 },
                    { date: "2025.05.21", value: 50 },
                ],
            },
            {
                productName: "contactpin_2",
                data: [
                    { date: "2025.05.01", value: 95 },
                    { date: "2025.05.06", value: 10 },
                    { date: "2025.05.11", value: 75 },
                    { date: "2025.05.16", value: 85 },
                    { date: "2025.05.21", value: 30 },
                ],
            },
        ],
        defectTrend: [
            {
                productName: "contactpin_1",
                data: [
                    { date: "2025.05.01", value: 0 },
                    { date: "2025.05.06", value: 1 },
                    { date: "2025.05.11", value: 2 },
                    { date: "2025.05.16", value: 5 },
                    { date: "2025.05.21", value: 1 },
                ],
            },
            {
                productName: "contactpin_2",
                data: [
                    { date: "2025.05.01", value: 0 },
                    { date: "2025.05.06", value: 2 },
                    { date: "2025.05.11", value: 4 },
                    { date: "2025.05.16", value: 6 },
                    { date: "2025.05.21", value: 2 },
                ],
            },
        ],
    },
    Annual: {
        dateRange: {
            startDate: "2025.01.01",
            endDate: "2025.11.20",
        },
        rollCounts: [
            {
                id: "1",
                productName: "contactpin_1",
                rollsProduced: 4928,
                normalCount: 4921,
                defectCount: 7,
            },
            {
                id: "2",
                productName: "contactpin_2",
                rollsProduced: 5726,
                normalCount: 5260,
                defectCount: 16,
            },
        ],
        productionTrend: [
            {
                productName: "contactpin_1",
                data: [
                    { date: "2025.05.01", value: 95 },
                    { date: "2025.05.06", value: 80 },
                    { date: "2025.05.11", value: 75 },
                    { date: "2025.05.16", value: 85 },
                    { date: "2025.05.21", value: 50 },
                ],
            },
            {
                productName: "contactpin_2",
                data: [
                    { date: "2025.05.01", value: 95 },
                    { date: "2025.05.06", value: 10 },
                    { date: "2025.05.11", value: 75 },
                    { date: "2025.05.16", value: 85 },
                    { date: "2025.05.21", value: 30 },
                ],
            },
        ],
        defectTrend: [
            {
                productName: "contactpin_1",
                data: [
                    { date: "2025.05.01", value: 0 },
                    { date: "2025.05.06", value: 1 },
                    { date: "2025.05.11", value: 2 },
                    { date: "2025.05.16", value: 5 },
                    { date: "2025.05.21", value: 1 },
                ],
            },
            {
                productName: "contactpin_2",
                data: [
                    { date: "2025.05.01", value: 0 },
                    { date: "2025.05.06", value: 2 },
                    { date: "2025.05.11", value: 4 },
                    { date: "2025.05.16", value: 6 },
                    { date: "2025.05.21", value: 2 },
                ],
            },
        ],
    },
};
