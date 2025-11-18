// 생산라인 카드
export interface ProductionLineStatus {
  id: string;
  name: string; // 생산라인 이름
  isRunning: boolean; // 가동 여부
  productName: string; // 생산 품목
  rollsProduced: number; // 생산 개수
  normalCount: number; // 정상 개수
  defectCount: number; // 불량 개수
}
// 생산라인 별 일일 컨택트 핀 정상/불량 데이터 현황 그래프
export interface DailyDataPoint {
  productionLine: string;
  normalCount: number;
  defectCount: number;
}
// 생산라인 별 일일 컨택트 핀 예외 데이터 현황 그래프
export interface ExceptionDataPoint {
  productionLine: string;
  count: number;
}
// 생산일자 별 데이터 검수 현황 그래프
export interface InspectionDataPoint {
  date: string;
  inspected: number; // 검수 완료
  uninspected: number; // 검수 미완료
}
