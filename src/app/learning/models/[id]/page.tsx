import SemiHeader from "@/components/common/SemiHeader";
import Layout from "@/components/layout/Layout";

export default function ModelDataDetailPage() {
    return (
        <Layout headerTitle="인공지능 모델">
            <div className="w-full flex flex-col">
                <SemiHeader headerTitle="인공지능 학습 결과" />
                {/* 여기서부터 수정 */}
                <div className="flex flex-col p-6 pb-0">
                    <div className="flex flex-row items-center bg-white border-t-2 border-light-gray">
                        <div className="flex items-center justify-center bg-soft-white min-w-[140px] h-[70px] font-bold">
                            <h2 className="text-lg text-black">생산 품목</h2>
                        </div>
                        <div className="flex flex-row text-medium-gray items-center justify-center w-full gap-3 px-4 py-4 font-bold">
                            <p></p>
                        </div>
                        <div className="flex items-center justify-center bg-soft-white min-w-[140px] h-[70px] font-bold">
                            <h2 className="text-lg text-black">ROLL 번호</h2>
                        </div>
                        <div className="flex flex-row text-medium-gray items-center justify-center w-full gap-3 px-4 py-4 font-bold">
                            <p></p>
                        </div>
                    </div>

                    <div className="flex flex-row items-center bg-white border-t-2 border-light-gray">
                        <div className="flex items-center justify-center bg-soft-white min-w-[140px] h-[70px] font-bold">
                            <h2 className="text-lg text-black">생산 품목</h2>
                        </div>
                        <div className="flex flex-row text-medium-gray items-center justify-center w-full gap-3 px-4 py-4 font-bold">
                            <p></p>
                        </div>
                        <div className="flex items-center justify-center bg-soft-white min-w-[140px] h-[70px] font-bold">
                            <h2 className="text-lg text-black">ROLL 번호</h2>
                        </div>
                        <div className="flex flex-row text-medium-gray items-center justify-center w-full gap-3 px-4 py-4 font-bold">
                            <p></p>
                        </div>
                    </div>

                    <div className="flex flex-row items-center bg-white border-t-2 border-light-gray">
                        <div className="flex items-center justify-center bg-soft-white min-w-[140px] h-[70px] font-bold">
                            <h2 className="text-lg text-black">생산 품목</h2>
                        </div>
                        <div className="flex flex-row text-medium-gray items-center justify-center w-full gap-3 px-4 py-4 font-bold">
                            <p></p>
                        </div>
                        <div className="flex items-center justify-center bg-soft-white min-w-[140px] h-[70px] font-bold">
                            <h2 className="text-lg text-black">ROLL 번호</h2>
                        </div>
                        <div className="flex flex-row text-medium-gray items-center justify-center w-full gap-3 px-4 py-4 font-bold">
                            <p></p>
                        </div>
                    </div>

                    <div className="flex flex-row items-center bg-white border-t-2 border-light-gray">
                        <div className="flex items-center justify-center bg-soft-white min-w-[140px] h-[70px] font-bold">
                            <h2 className="text-lg text-black">생산 품목</h2>
                        </div>
                        <div className="flex flex-row text-medium-gray items-center justify-center w-full gap-3 px-4 py-4 font-bold">
                            <p></p>
                        </div>
                        <div className="flex items-center justify-center bg-soft-white min-w-[140px] h-[70px] font-bold">
                            <h2 className="text-lg text-black">ROLL 번호</h2>
                        </div>
                        <div className="flex flex-row text-medium-gray items-center justify-center w-full gap-3 px-4 py-4 font-bold">
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    );
}