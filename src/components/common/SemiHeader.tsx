'use client';

import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

interface SemiHeaderProps {
    headerTitle: string;
}

export default function SemiHeader({ headerTitle }: SemiHeaderProps) {
    const router = useRouter();
    return (
        <section
            className="bg-light-gray/30 border-b-[4px] border-light-gray w-full h-[100px] p-6 flex flex-row items-center gap-5"
        >
            <button
                className="text-medium-gray hover:text-light-gray cursor-pointer"
                onClick={() => router.back()}
            >
                <IoIosArrowBack size={44} />
            </button>
            <h2 className="text-[32px] text-black font-bold">{headerTitle}</h2>
        </section>
    );
}