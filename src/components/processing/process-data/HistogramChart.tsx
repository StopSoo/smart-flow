import NextImage from "next/image";

export default function HistogramChart() {
    return (
        <div
            className="w-full h-[250px] border-[4px] border-light-gray flex items-center justify-center"
        >
            {/* 목데이터 */}
            <NextImage
                src={`/assets/Histogram_Image.png`}
                alt="contact pin image"
                width={1090}
                height={207}
                priority
                fetchPriority="high"
            />
            {/* TODO: API 작업 시 구현 진행 */}
        </div>
    );
}