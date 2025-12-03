import DailyErrorTable from "@/components/analysis/DailyErrorTable";
import { DailyRollRateChart } from "@/components/analysis/DailyRollRateChart";
import ProductionHistory from "@/components/analysis/ProductionHistory";
import Layout from "@/components/layout/Layout";
import { ProductionLines } from "@/components/common/ProductionLines";

export default function MainPage() {
    return (
        <Layout headerTitle="AI 컨택트 핀 분석 플랫폼">
            <div className="flex flex-1 fixed top-[140px] left-[242px] w-[calc(100%-242px)] z-40">
                <ProductionLines />
            </div>
            <div className="flex flex-col flex-1 pt-[310px]">
                <div className="grid grid-cols-2 p-6 gap-6">
                    <DailyRollRateChart />
                    <DailyErrorTable />
                </div>

                <div className="border-t-[4px] border-light-gray">
                    <ProductionHistory />
                </div>
            </div>
        </Layout>
    );
}