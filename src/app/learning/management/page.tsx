'use client';

import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CardProps {
    status: string;
    title: string;
    head: number;
    neck: number;
    angl: number;
    angr: number;
    onClick: () => void;
}

function CardComponent({ status, title, head, neck, angl, angr, onClick }: CardProps) {
    return (
        <div
            className={`flex flex-col items-center gap-4 border-[4px] border-light-gray p-6 cursor-pointer
                        ${status === "stop" ? "bg-light-gray/30" : "bg-white"} hover:bg-soft-white`}
            onClick={onClick}
        >
            <h3 className="text-2xl text-black font-semibold">{title}</h3>
            <div className="flex flex-row gap-10">
                <Image
                    src="/assets/mock_data_images/Image19700101_1002160146631.bmp"
                    alt="contactpin_image"
                    width={300}
                    height={189}
                    priority
                    fetchPriority="high"
                />
                <div className="flex flex-col items-center justify-center gap-5 mb-4">
                    <div className="flex flex-row gap-5">
                        <h3 className="text-lg text-black font-semibold">
                            {status === "activate" ? "가동 중" : "비가동 중"}
                        </h3>
                        <div className={`w-6 h-6 rounded-full ${status === "activate" ? "bg-point-green" : "bg-point-red"}`} />
                    </div>
                    <div className="flex flex-col gap-3 w-[200px]">
                        <p className="text-lg text-center font-semibold">contactpin_1</p>
                        <div>
                            <div className="flex flex-row justify-between">
                                <p>헤드</p>
                                <p>{head}</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <p>Y부</p>
                                <p>{neck}</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <p>빗각L</p>
                                <p>{angl}</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <p>빗각R</p>
                                <p>{angr}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ManagementPage() {
    const router = useRouter();

    return (
        <Layout headerTitle="생산라인 관리">
            <div className="flex flex-col gap-6 w-full h-full p-6">
                <h2 className="text-3xl text-black font-bold">전체 생산라인</h2>
                <div className="grid grid-cols-2 p-6 gap-6">
                    <CardComponent
                        title="생산라인1"
                        status="activate"
                        head={0.700}
                        neck={0.394}
                        angl={0.300}
                        angr={0.311}
                        onClick={() => router.push(`/learning/management/${1}`)}
                    />
                    <CardComponent
                        title="생산라인2"
                        status="stop"
                        head={0.700}
                        neck={0.394}
                        angl={0.300}
                        angr={0.311}
                        onClick={() => router.push(`/learning/management/${2}`)}
                    />
                </div>
            </div>
        </Layout>
    );
}