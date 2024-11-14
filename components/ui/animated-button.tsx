"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ANIMATIONS, TRANSITIONS } from "@/lib/constants/ui";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends React.ComponentProps<typeof Button> {
  animate?: boolean;
}

export function AnimatedButton({
  animate = true,
  className,
  children,
  ...props
}: AnimatedButtonProps) {
  return (
    <motion.div
      animate={
        animate
          ? {
              y: [0, -4, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }
          : undefined
      }
    >
      <Button className={cn(TRANSITIONS.DEFAULT, className)} {...props}>
        {children}
      </Button>
    </motion.div>
  );
}
