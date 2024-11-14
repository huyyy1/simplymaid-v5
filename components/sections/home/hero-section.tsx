"use client";

import { motion } from "framer-motion";
import { PreBookFlow } from "@/components/shared/pre-book-flow";
import SparklesText from "@/components/magicui/sparkles-text";
import { Star, Bell } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarRating } from "@/components/sections/recently-cleaned/star-rating";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] pb-32 flex flex-col overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://vqxgzfcwifmbxwixhsxv.supabase.co/storage/v1/object/public/web-assets/simply-maid-house-cleaning-hero.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/90" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#7E57C2] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -50, 20, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#FF4E8E] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"
            animate={{
              x: [0, -30, 20, 0],
              y: [0, 50, -20, 0],
              scale: [1, 0.9, 1.1, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
              delay: 1,
            }}
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:24px_24px] opacity-10" />
      </div>

      {/* Content */}
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
                    className="block text-4xl xs:text-5xl sm:text-[3.5rem] lg:text-[3.75rem] font-extrabold tracking-tight leading-[1.1] lg:leading-[1.15] text-white [color:white!important]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    Book a Clean in{" "}
                    <span className="inline-flex">
                      <SparklesText
                        text="60 Seconds"
                        className="text-primary inline-block"
                        colors={{
                          first: "hsl(267, 83%, 60%)",
                          second: "hsl(339, 83%, 60%)",
                        }}
                        sparklesCount={5}
                      />
                    </span>
                  </motion.span>
                  <motion.span
                    className="block text-3xl xs:text-4xl sm:text-[2.75rem] lg:text-[3rem] font-bold tracking-tight leading-[1.2] lg:leading-[1.25] text-white [color:white!important]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    With Sydney's Most Loved
                  </motion.span>
                </h1>

                <motion.p
                  className="text-lg xs:text-xl lg:text-2xl leading-relaxed font-medium text-white [color:white!important]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Sydney's most-loved cleaning service—trusted by 15,000+ happy customers. Get back
                  to what you love with a spotless home, with a smile 😊
                </motion.p>
              </div>

              <div className="hidden lg:grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {[
                  {
                    title: "Trusted & Verified",
                    description: "Background-checked cleaners you can trust",
                  },
                  {
                    title: "Flexible Scheduling",
                    description: "Book online in 60 seconds, 7 days a week",
                  },
                  {
                    title: "100% Satisfaction",
                    description: "Not happy? We will re-clean for free",
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-2.5 group hover:transform hover:translate-x-1 transition-transform duration-300"
                  >
                    <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                      <Star className="w-4 sm:w-5 h-4 sm:h-5 text-white [color:white!important]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xs sm:text-sm font-semibold text-white [color:white!important] mb-0.5 truncate">
                        {benefit.title}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-white [color:white!important] leading-relaxed truncate">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - PreBookFlow */}
          <div className="w-full lg:w-[600px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="lg:scale-105"
            >
              <PreBookFlow />
            </motion.div>
          </div>
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <div className="max-w-[800px] mx-auto px-4">
            <Card className="p-3 sm:p-4 bg-[#1A1F36]/60 backdrop-blur-sm border-white/5 shadow-sm">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
              >
                <div className="flex-shrink-0 w-full sm:w-auto space-y-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start">
                    <StarRating rating={4.8} size={12} />
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 13.44 10.3"
                      className="w-4 h-4"
                    >
                      <g>
                        <path
                          fill="#fff"
                          stroke="#bbbdbf"
                          strokeMiterlimit="10"
                          strokeWidth="0.3px"
                          d="M11.18,1.54V3.22l2,3.1h-2V8.76a1.39,1.39,0,0,1-1.39,1.39H1.54A1.39,1.39,0,0,1,.15,8.76V1.54A1.39,1.39,0,0,1,1.54.15H9.79A1.39,1.39,0,0,1,11.18,1.54Z"
                        />
                        <path
                          fill="#557ebf"
                          d="M9,5.23a3.71,3.71,0,0,0-.06-.67H5.79V5.83H7.57a1.57,1.57,0,0,1-.66,1v.82H8A3.22,3.22,0,0,0,9,5.23Z"
                        />
                        <path
                          fill="#36a852"
                          d="M5.79,8.45A3.14,3.14,0,0,0,8,7.65L6.91,6.83a2,2,0,0,1-1.12.31A2,2,0,0,1,3.94,5.78H2.84v.85A3.29,3.29,0,0,0,5.79,8.45Z"
                        />
                        <path
                          fill="#f9bc15"
                          d="M3.93,5.78a2.08,2.08,0,0,1,0-1.26V3.67H2.84a3.28,3.28,0,0,0,0,3Z"
                        />
                        <path
                          fill="#ea4535"
                          d="M5.79,3.16a1.78,1.78,0,0,1,1.26.49L8,2.71a3.15,3.15,0,0,0-2.2-.85A3.3,3.3,0,0,0,2.84,3.67l1.09.85A2,2,0,0,1,5.79,3.16Z"
                        />
                      </g>
                    </svg>
                    <span className="text-xs font-medium text-white/80">Rated 4.8/5</span>
                  </div>
                  <div className="text-[10px] text-white/60">Loved by 1,456 Customers</div>
                </div>

                <div className="hidden sm:block w-px h-12 bg-white/5" />

                <div className="flex-1 flex items-center gap-3">
                  <Avatar className="h-10 w-10 border border-white/10 flex-shrink-0">
                    <AvatarImage src="https://i.pravatar.cc/100?img=5" />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <motion.p
                      className="text-xs text-white/70 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      "Absolutely beyond my expectations! The best house cleaning service I've ever
                      hired. Thank you!!!"
                    </motion.p>
                    <motion.p
                      className="text-xs mt-0.5 text-white/50"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      — April B., Sydney
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
