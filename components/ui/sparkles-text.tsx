"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SparklesTextProps {
  text: string;
  className?: string;
  colors?: {
    first: string;
    second: string;
  };
}

export function SparklesText({
  text,
  className = "",
  colors = { first: "#FFB6C1", second: "#FF69B4" },
}: SparklesTextProps) {
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles((current) => {
        const newSparkle = {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100,
        };
        return [...current.slice(-2), newSparkle];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`relative inline-block ${className}`}>
      {sparkles.map((sparkle) => (
        <motion.span
          key={sparkle.id}
          className="absolute pointer-events-none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 0.8 }}
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            background: `linear-gradient(45deg, ${colors.first}, ${colors.second})`,
            width: "4px",
            height: "4px",
            borderRadius: "50%",
          }}
        />
      ))}
      <span className="relative z-10">{text}</span>
    </span>
  );
}
