"use client";

import { motion } from "framer-motion";

interface ErrorMessageProps {
  message: string | null;
  className?: string;
}

export function ErrorMessage({
  message,
  className = "text-sm text-red-400 mt-2",
}: ErrorMessageProps) {
  if (!message) return null;

  return (
    <motion.p
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={className}
    >
      {message}
    </motion.p>
  );
}
