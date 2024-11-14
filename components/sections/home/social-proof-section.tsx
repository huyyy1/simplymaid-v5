"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, ThumbsUp, UserCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FeatureItem } from "@/components/shared/ui/feature-item";
import { TrustBadge } from "@/components/shared/ui/trust-badge";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Shield,
    title: "Trusted Neighbourhood Housekeepers",
    description:
      "All our cleaners are carefully vetted by us - cleaners we'd be happy to have clean our own homes.",
  },
  {
    icon: ThumbsUp,
    title: "Customer Recommended",
    description:
      "Simply Maid cleaners are continuously reviewed by our customers. Each and every cleaner is to maintain a high standard to clean with us.",
  },
  {
    icon: UserCheck,
    title: "Background Checked",
    description:
      "Every cleaner undergoes thorough background checks and must maintain high customer satisfaction ratings.",
  },
];

export function SocialProofSection() {
  return (
    <section className="py-24 bg-[#1B1E2E] relative overflow-hidden">
      {/* Animated gradient background */}
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

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:24px_24px] opacity-10"
        aria-hidden="true"
      />

      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                <div className="px-4 py-1.5 rounded-full bg-primary/10">
                  <span className="text-primary font-semibold">Trusted by 15,000+ Customers</span>
                </div>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
              >
                Your Peace of Mind is <span className="text-primary">Our Priority</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-300"
              >
                We know letting someone into your home can be nerve-wracking. That's why all our
                housekeepers pass background and identity checks before they ever start cleaning for
                us.
              </motion.p>
            </div>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <FeatureItem key={feature.title} {...feature} delay={index * 0.1} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Button
                size="lg"
                className="mt-8 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
                asChild
              >
                <Link href="/book">
                  Schedule a Cleaning Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              <Image
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=2787&auto=format&fit=crop"
                alt="Trusted cleaner"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Trust indicator overlays */}
              <TrustBadge
                icon={ThumbsUp}
                title="4.8/5 Rating"
                description="Based on 15,000+ reviews"
                className="absolute top-4 right-4 max-w-[160px]"
              />

              <TrustBadge
                icon={Shield}
                title="100% Verified"
                description="Background checked"
                className="absolute bottom-4 left-4 max-w-[160px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
