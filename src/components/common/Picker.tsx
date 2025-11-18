import { ChangeEvent, lazy, Suspense, useRef } from "react"

interface PickerProps {
    value: string;
    title: string;
    type: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const BiDown = lazy(() => import('react-icons/bi').then(module => ({
    default: module.BiChevronDown
})));

export function Picker({ value, title, type, onChange }: PickerProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (type === "date" && inputRef.current?.showPicker) {
            inputRef.current.showPicker();
        } else {
            // TODO: 다른 type에 맞춰 수정 필요
            inputRef.current?.focus();
        }
    };

    return (
        <div
            className="relative border border-light-gray rounded px-4 py-2 bg-white h-14 flex flex-col justify-center items-start cursor-pointer"
            onClick={handleClick}
        >
            <label className="text-sm text-point-blue font-bold mb-1">
                {title}
            </label>

            <div className="relative">
                <input
                    ref={inputRef}
                    type={type}
                    aria-label="date picker"
                    value={value}
                    className={`text-sm w-full bg-transparent pr-8 outline-none ${type === "date" ? "[&::-webkit-calendar-picker-indicator]:hidden" : ""}`}
                    onChange={onChange}
                />

                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none cursor-pointer">
                    <Suspense>
                        <BiDown size={22} />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}