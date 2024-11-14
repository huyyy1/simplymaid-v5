import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  container?: boolean;
}

export function Section({ children, className, container = true }: SectionProps) {
  return (
    <section className={cn("py-16 lg:py-24", className)}>
      {container ? <div className="container mx-auto px-4">{children}</div> : children}
    </section>
  );
}
