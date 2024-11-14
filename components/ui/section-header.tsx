import { cn } from "@/lib/styles/theme";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  badge?: string;
}

export function SectionHeader({
  title,
  description,
  className,
  align = "center",
  badge,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "max-w-3xl mx-auto mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div className="inline-block mb-4">
          <div className="px-4 py-1.5 rounded-full bg-primary/[0.08] dark:bg-primary/[0.15]">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
              {badge}
            </span>
          </div>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">{title}</h2>
      {description && <p className="text-lg text-muted-foreground">{description}</p>}
    </motion.div>
  );
}
