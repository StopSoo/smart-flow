import dayjs from "dayjs";
// 날짜 형식 변환 함수
export const formatDate = (date: string) => {
    return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
};
// 두 날짜의 차이를 일로 계산해 반환하는 함수 
export const diffTime = (startDate: string, endDate: string) => {
    const diffTime = new Date(endDate).getTime() - new Date(startDate).getTime();
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays;
}
// 이전 날짜를 조회하는 함수
export const getDateBefore = (date: Date | string, days: number): string => {
    const targetDate = new Date(date);
    targetDate.setDate(targetDate.getDate() - days);

    const year = targetDate.getFullYear();
    const month = String(targetDate.getMonth() + 1).padStart(2, '0');
    const day = String(targetDate.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};
