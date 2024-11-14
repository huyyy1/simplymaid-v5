"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, Shield, Clock } from "lucide-react";
import SparklesText from "@/components/magicui/sparkles-text";
import Link from "next/link";

export function CleaningServices() {
  return (
    <section className="py-24 bg-primary dark:bg-primary/90 relative overflow-hidden">
      {/* Background dots pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:24px_24px] opacity-10"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full min-h-[400px] lg:min-h-[500px]"
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
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

              {/* Payment complete badge */}
              <div className="absolute top-4 left-4 bg-white/95 dark:bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">Payment Complete</span>
                  <span className="text-xs text-muted-foreground">• 3min ago</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Cleaning services that{" "}
              <SparklesText
                text="fit your life"
                className="text-white"
                colors={{ first: "#fff", second: "#FFB6C1" }}
                sparklesCount={10}
              />
              .
            </h2>

            <p className="text-xl text-white/90 leading-relaxed">
              What you see is what you get — our pricing is upfront and straightforward.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Shield,
                  title: "Secure payments",
                  description:
                    "Only release payment when the task is completed to your satisfaction",
                },
                {
                  icon: Clock,
                  title: "Flexible options",
                  description:
                    "Whether you need a one-time clean or regular housekeeping, we offer a range of services to fit your needs and budget.",
                },
                {
                  icon: DollarSign,
                  title: "Honest value",
                  description:
                    "We never compromise on quality, even when we are offering competitive prices.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="text-white/80">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 h-14 rounded-full shadow-xl"
            >
              <Link href="/book">
                Book your clean today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
