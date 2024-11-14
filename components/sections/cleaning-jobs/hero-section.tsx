"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SparklesText from "@/components/magicui/sparkles-text";
import { QuickApplyForm } from "./hero/quick-apply-form";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] bg-[#7E57C2] dark:bg-[#7E57C2]/90 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />

      <div className="container px-4 mx-auto relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Get More Cleaning Jobs,{" "}
              <SparklesText
                text="Less Hassle"
                className="text-pink-300"
                colors={{ first: "#FFB6C1", second: "#FF69B4" }}
              />
            </h1>
            <div className="space-y-6">
              <p className="text-xl text-white/90 leading-relaxed">
                Start this week – Flexible hours, great pay, and a supportive work environment. Join
                over 500 trusted cleaners making a difference in homes across Australia.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-white text-[#7E57C2] hover:bg-white/90 text-lg px-8 h-14"
                >
                  Weekly Pay
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-lg px-8 h-14"
                >
                  Flexible Hours
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <QuickApplyForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
