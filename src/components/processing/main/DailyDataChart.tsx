import type { DailyDataPoint } from "@/types/processing/types";
import { motion } from "framer-motion";

export function DailyDataChart({ data }: { data: DailyDataPoint[] }) {
  const maxValue = Math.max(
    ...data.map((d) => Math.max(d.normalCount, d.defectCount))
  );
  const chartHeight = 260;

  return (
    <div className="border-[4px] border-light-gray p-4 bg-white">
      <h3 className="text-xl text-black font-bold mb-6">
        생산라인 별 일일 컨택트 핀 정상/불량 데이터 현황
      </h3>
      <div className="relative" style={{ height: chartHeight }}>
        <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-sm text-medium-gray font-bold">
          <span>{(maxValue * 2).toLocaleString()}</span>
          <span>{maxValue.toLocaleString()}</span>
          <span >0</span>
        </div>

        <div className="ml-18 mr-6 h-full flex items-end justify-around border-b border-l border-light-gray">
          {
            data.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 flex-1 mb-2">
                <div className="flex gap-1 items-end h-[250px]">
                  <motion.div
                    className="w-12 bg-point-orange"
                    style={{ height: `${(item.normalCount / (maxValue * 2)) * 100}%` }}
                    initial={{ height: 0 }}
                    animate={{ height: `${(item.normalCount / (maxValue * 2)) * 100}%` }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
                  />
                  <motion.div
                    className="w-12 bg-point-blue"
                    style={{ height: `${(item.defectCount / (maxValue * 2)) * 100}%` }}
                    initial={{ height: 0 }}
                    animate={{ height: `${(item.defectCount / (maxValue * 2)) * 100}%` }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
                  />
                </div>
                <span className="text-sm text-medium-gray font-bold">
                  {item.productionLine}
                </span>
              </div>
            ))
          }
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-2 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-point-orange" />
          <span>정상</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-point-blue" />
          <span>불량</span>
        </div>
      </div>
    </div>
  );
}
