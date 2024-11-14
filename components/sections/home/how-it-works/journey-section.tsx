"use client";

import { motion } from "framer-motion";
import { JourneyCard } from "./journey-card";
import { Clock, UserCheck, Sparkles } from "lucide-react";

const steps = [
  {
    title: "View and book online in 60s",
    description: "Select a date and time that is best suited for you",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop",
    overlayContent: (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          {/* Pink circle background */}
          <div className="absolute -right-12 -top-12 w-24 h-24 rounded-full bg-[#FF4E8E]/20" />
          {/* Blue circle background */}
          <div className="absolute -left-8 -bottom-8 w-16 h-16 rounded-full bg-[#7C3AED]/20" />
          {/* Content card */}
          <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-white/20">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 rounded-full p-2">
                <Clock className="w-4 h-4 text-primary" />
              </div>
              <div className="flex gap-2 text-sm">
                <span className="font-medium">Fri Jan 03</span>
                <span className="text-muted-foreground">11:00 AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Recommended Cleaner",
    description: "A background-checked, trusted cleaner comes over and cleans your home",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2940&auto=format&fit=crop",
    overlayContent: (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          {/* Pink circle background */}
          <div className="absolute -left-16 -top-16 w-32 h-32 rounded-full bg-[#FF4E8E]/20" />
          {/* Content card */}
          <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-white/20">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=2787&auto=format&fit=crop"
                  alt="Sarry Rhodes"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <div className="font-medium">Sarry Rhodes</div>
                <div className="text-sm text-muted-foreground">Vetted Cleaner</div>
              </div>
            </div>
          </div>
          {/* Verification badge */}
          <div className="absolute -right-4 -bottom-4 bg-white dark:bg-gray-900 rounded-full p-2 shadow-lg">
            <UserCheck className="w-4 h-4 text-primary" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Come back to a clean home",
    description: "Enjoy cleanings that keep your home consistently looking it's best",
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=2940&auto=format&fit=crop",
    overlayContent: (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          {/* Blue circle background */}
          <div className="absolute -right-12 -top-12 w-24 h-24 rounded-full bg-[#7C3AED]/20" />
          {/* Content card */}
          <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-white/20">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 rounded-full p-2">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <div className="font-medium">Spotless & Fresh</div>
            </div>
          </div>
          {/* Diamond icon */}
          <div className="absolute -left-4 -bottom-4 bg-white dark:bg-gray-900 rounded-full p-2 shadow-lg">
            <svg
              className="w-4 h-4 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </div>
        </div>
      </div>
    ),
  },
];

export function HowItWorksJourney() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_1px,_transparent_1px)] bg-[size:24px_24px] opacity-[0.015] dark:opacity-[0.03]"
        aria-hidden="true"
      />

      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-1.5 rounded-full bg-primary/[0.08] dark:bg-primary/[0.15]">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
                WHY CHOOSE US?
              </span>
            </div>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Housing cleaning made easy</h2>
          <p className="text-lg text-muted-foreground">
            Book your clean in 60 seconds and let us handle the rest. It's that simple!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting lines */}
          <div className="absolute top-[30%] left-0 w-full h-px hidden md:block">
            <svg className="absolute inset-0 w-full h-full">
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="text-primary/40"
              />
            </svg>

            {/* Animated dots */}
            <motion.div
              animate={{
                x: ["0%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50"
            />
          </div>

          {steps.map((step, index) => (
            <JourneyCard key={step.title} {...step} index={index} total={steps.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
