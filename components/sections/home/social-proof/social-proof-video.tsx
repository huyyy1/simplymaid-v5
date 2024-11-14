"use client";

import { motion } from "framer-motion";
import { PaymentNotificationBadge } from "./payment-notification-badge";
import { cn } from "@/lib/utils";
import { slideUp } from "@/lib/styles/tokens/animations";

export function SocialProofVideo() {
  return (
    <motion.div
      {...slideUp}
      className={cn("relative w-full h-full", "min-h-[400px] lg:min-h-[500px]")}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-2xl overflow-hidden",
          "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm",
          "shadow-xl shadow-primary/20 dark:shadow-primary/10"
        )}
      >
        <div className="relative w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            poster="https://vqxgzfcwifmbxwixhsxv.supabase.co/storage/v1/object/public/web-assets/sydney-cleaning-team-simply-maid-poster.jpg"
          >
            <source
              src="https://vqxgzfcwifmbxwixhsxv.supabase.co/storage/v1/object/public/web-assets/sydney-cleaning-team-simply-maid.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <PaymentNotificationBadge />
      </div>
    </motion.div>
  );
}