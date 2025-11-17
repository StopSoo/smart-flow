import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isCorrect: boolean;
}

export default function Input({ label, isCorrect, className = "", ...props }: InputProps) {
  return (
    <div className="flex items-center gap-4 w-full">
      <div className="w-[130px]">
        {
          label && (
            <label className="text-black text-2xl font-normal whitespace-nowrap min-w-20">
              {label}
            </label>
          )
        }
      </div>
      <input
        className={`flex-1 w-[440px] h-[70px] rounded-[30px] border-4 bg-white px-6 text-medium-gray text-xl outline-none focus:border-medium-gray transition-colors ${isCorrect ? 'border-light-gray' : 'border-point-red'} ${className}`}
        {...props}
      />
    </div>
  );
}
