"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ReviewCarousel } from "./review-carousel";
import SparklesText from "@/components/magicui/sparkles-text";

export function RecentlyCleaned() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <SparklesText
              text="Just cleaned now"
              className="text-violet-600 dark:text-violet-400 inline-block"
              colors={{
                first: "hsl(267, 83%, 60%)",
                second: "hsl(339, 83%, 60%)",
              }}
              sparklesCount={10}
            />
            <span className="text-foreground"> sparking joy one clean at a time</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join over 15,000 happy homes cleaned so far! Want to see your home here?
          </p>
        </motion.div>

        <ReviewCarousel />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-violet-600 hover:bg-violet-700 text-white px-8 h-14 text-lg rounded-full shadow-lg shadow-violet-600/20 hover:shadow-xl hover:shadow-violet-600/30 hover:-translate-y-0.5 transition-all duration-300"
            asChild
          >
            <Link href="/book">
              Book your clean today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
