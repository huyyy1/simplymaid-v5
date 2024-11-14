"use client";

import { motion } from "framer-motion";
import { errorMessageStyles } from "../styles";

interface ErrorMessageProps {
  message: string | null;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) return null;

  return (
    <motion.p
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={errorMessageStyles}
    >
      {message}
    </motion.p>
  );
}
