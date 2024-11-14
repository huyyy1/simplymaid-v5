"use client";

import { type LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CardWithIconProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
}

export function CardWithIcon({
  icon: Icon,
  title,
  description,
  className,
  iconClassName,
}: CardWithIconProps) {
  return (
    <Card className={cn("p-6 h-full", className)}>
      <div className="flex flex-col items-center text-center space-y-4">
        <div className={cn("p-3 rounded-full bg-primary/10", iconClassName)}>
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
}
