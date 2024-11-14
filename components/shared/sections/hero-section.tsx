"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SparklesText from "@/components/magicui/sparkles-text";
import { type BaseProps } from "@/lib/types";
import { cn } from "@/lib/utils";

interface HeroSectionProps extends BaseProps {
  title: string;
  sparkleText?: string;
  description: string;
  image?: string;
  cta?: {
    text: string;
    href: string;
  };
  rightContent?: React.ReactNode;
}

export function HeroSection({
  title,
  sparkleText,
  description,
  image,
  cta,
  rightContent,
  className,
  children,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative min-h-[calc(100vh-5rem)] pb-32 flex flex-col overflow-hidden",
        className
      )}
    >
      {/* Background */}
      {image && (
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/90" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-overlay" />
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10 flex-1 flex flex-col">
        <div className="flex-1 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16 pt-32 lg:pt-40">
          {/* Left Column - Content */}
          <div className="flex-1 text-left space-y-8 lg:max-w-[45%]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <h1 className="space-y-4">
                  <motion.span
                    className="block text-4xl xs:text-5xl sm:text-[3.5rem] lg:text-[3.75rem] font-extrabold tracking-tight leading-[1.1] lg:leading-[1.15] text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {title}{" "}
                    {sparkleText && (
                      <span className="inline-flex">
                        <SparklesText
                          text={sparkleText}
                          className="text-primary inline-block"
                          colors={{
                            first: "hsl(267, 83%, 60%)",
                            second: "hsl(339, 83%, 60%)",
                          }}
                          sparklesCount={5}
                        />
                      </span>
                    )}
                  </motion.span>
                </h1>

                <motion.p
                  className="text-lg xs:text-xl lg:text-2xl leading-relaxed font-medium text-white/90"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {description}
                </motion.p>
              </div>

              {children}

              {cta && (
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8 h-14"
                >
                  <Link href={cta.href}>
                    {cta.text}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              )}
            </motion.div>
          </div>

          {/* Right Column */}
          {rightContent && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full lg:w-[600px]"
            >
              {rightContent}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
