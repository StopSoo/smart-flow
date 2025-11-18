import Image from "next/image";

export default function EditImage() {
    return (
        <div className="flex items-center justify-center h-[1100px] border-[4px] border-light-gray">
            <Image
                alt="contactpin_ex_image"
                src="/assets/contactpin_ex_image.png"
                width={1400}
                height={900}
                className="p-1"
            />
        </div>
    );
}