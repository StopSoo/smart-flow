import type { ProductionLineStatus } from "@/types/processing/types";
// 목데이터
const productionLines: ProductionLineStatus[] = [
  {
    id: "1",
    name: "생산라인1",
    isRunning: true,
    productName: "contactpin_1",
    rollsProduced: 32,
    normalCount: 31,
    defectCount: 1,
  },
  {
    id: "2",
    name: "생산라인2",
    isRunning: false,
    productName: "contactpin_2",
    rollsProduced: 0,
    normalCount: 0,
    defectCount: 0,
  },
];
// 하나의 생산라인 정보
function ProductionLineCard({ line }: { line: ProductionLineStatus }) {
  // TODO: API 연동하면서 생산라인 개수 많아지면 좌우 버튼 추가
  return (
    <div className="border-[4px] border-light-gray p-6 bg-white">
      <div className="flex flex-row items-center justify-center gap-3 mb-4">
        <h3 className="text-xl text-black font-semibold">{line.name}</h3>
        <div
          className={`w-4 h-4 rounded-full ${line.isRunning ? "bg-point-green" : "bg-point-red"}`}
        />
      </div>
      <div className="flex flex-col items-center gap-2 text-medium-gray">
        <p className="text-lg font-bold">{line.productName}</p>
        <p>ROLL {line.rollsProduced}개 생산</p>
        <p>
          양품 {line.normalCount}개 | 불량 {line.defectCount}개
        </p>
      </div>
    </div>
  );
}
// 생산라인 가동 현황 컴포넌트
export function ProductionLines() {
  return (
    <section className="bg-light-gray/30 border-b-[4px] border-light-gray w-full p-6">
      <h2 className="text-3xl text-black font-bold mb-6">생산라인 가동 현황</h2>
      <div className="grid grid-cols-2 gap-6">
        {
          productionLines.map((line) => (
            <ProductionLineCard key={line.id} line={line} />
          ))
        }
      </div>
    </section>
  );
}