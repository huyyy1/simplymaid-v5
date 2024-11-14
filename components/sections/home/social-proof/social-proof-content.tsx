"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SparklesText from "@/components/magicui/sparkles-text";
import { FeatureList } from "./feature-list";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/styles/typography";
import { fadeIn, slideUp } from "@/lib/styles/tokens/animations";

export function SocialProofContent() {
  return (
    <motion.div {...slideUp} className="text-white space-y-8">
      <h2 className={cn(typography.hero.h2, "text-white")}>
        Cleaning services that{" "}
        <SparklesText
          text="fit your life"
          className="text-white"
          colors={{ first: "#fff", second: "#FFB6C1" }}
          sparklesCount={10}
        />
        .
      </h2>

      <p className={cn(typography.hero.lead, "text-white/90")}>
        What you see is what you get — our pricing is upfront and straightforward.
      </p>

      <FeatureList />

      <Button
        asChild
        size="lg"
        className={cn(
          "bg-white text-primary hover:bg-white/90",
          "text-lg px-8 h-14 rounded-full",
          "shadow-xl transition-all duration-300 hover:-translate-y-0.5"
        )}
      >
        <Link href="/book">
          Book your clean today
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </Button>
    </motion.div>
  );
}
