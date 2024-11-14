import { cva } from "class-variance-authority";

export const stepCardStyles = "p-8 bg-[#1B1E2E]/95 backdrop-blur-sm rounded-xl border-white/10";

export const backButtonStyles = "h-9 w-9 text-white/80 hover:text-white hover:bg-white/10";

export const stepHeadingStyles = "text-2xl font-bold text-white";

export const stepSubtextStyles = "text-sm text-white/80 mt-1";

export const helperTextStyles = "text-sm text-white/60 px-4";

export const errorMessageStyles = "text-sm text-red-400";

export const roomButtonVariants = cva(
  "relative flex items-center justify-center rounded-lg border h-12 text-base font-medium transition-all duration-200",
  {
    variants: {
      selected: {
        true: "bg-[#7E57C2] text-white border-[#7E57C2] shadow-lg shadow-[#7E57C2]/20",
        false: "bg-white/5 text-white hover:bg-white/10 border-white/10 hover:border-white/20",
      },
    },
    defaultVariants: {
      selected: false,
    },
  }
);

export const submitButtonVariants = cva(
  "w-full h-14 text-lg font-semibold transition-all duration-300 group",
  {
    variants: {
      hasError: {
        true: "bg-[#FF4E8E]/40 text-white/90 hover:bg-[#FF4E8E]/50",
        false:
          "bg-[#FF4E8E] hover:bg-[#FF4E8E]/90 text-white shadow-xl shadow-[#FF4E8E]/20 hover:shadow-2xl hover:shadow-[#FF4E8E]/30 hover:-translate-y-0.5",
      },
    },
    defaultVariants: {
      hasError: false,
    },
  }
);
