import { cn } from "@/lib/utils";

interface LoadingDotsProps {
  className?: string;
  color?: string;
}

export function LoadingDots({ className, color = "currentColor" }: LoadingDotsProps) {
  return (
    <span className={cn("inline-flex items-center gap-1", className)}>
      {[...Array(3)].map((_, i) => (
        <span
          key={i}
          style={{ backgroundColor: color }}
          className={cn(
            "h-2 w-2 rounded-full",
            "animate-[loading-dot_1s_ease-in-out_infinite]",
            "opacity-75"
          )}
          style={{
            animationDelay: `${i * 0.16}s`,
            backgroundColor: color,
          }}
        />
      ))}
    </span>
  );
}
