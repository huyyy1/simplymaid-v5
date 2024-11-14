import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn("max-w-3xl mb-16", align === "center" ? "mx-auto text-center" : "", className)}
    >
      <h2 className="text-[2.25rem] md:text-[3rem] font-bold tracking-tight mb-4">{title}</h2>
      {description && (
        <p className="text-[1.125rem] md:text-[1.25rem] text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
