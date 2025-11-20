export type PeriodType = 'Daily' | 'Weekly' | 'Monthly' | 'Annual';

export interface DailyRollCostPoint {
    productionLine: string;
    normalCount: number;
    defectCount: number;
}

export interface RollCountCardStatus {
    id: string;
    productName: string; // 생산품목 이름
    rollsProduced: number; // 생산 개수
    normalCount: number; // 정상 개수
    defectCount: number; // 불량 개수
}

export interface DateRange {
    startDate: string;
    endDate: string;
}

export interface ProductionTrendDataPoint {
    date: string;
    value: number;
}

export interface ProductionLineChartData {
    productName: string;
    data: ProductionTrendDataPoint[];
}

export interface PeriodData {
    dateRange: DateRange;
    rollCounts: RollCountCardStatus[];
    productionTrend: ProductionLineChartData[];
    defectTrend: ProductionLineChartData[];
}