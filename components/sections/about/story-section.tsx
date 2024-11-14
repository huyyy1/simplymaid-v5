"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export function StorySection() {
  return (
    <section className="py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.span
              className="text-primary font-medium tracking-wide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our Story
            </motion.span>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold tracking-tight mt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              A Company with Purpose,
              <br />
              Built Around People
            </motion.h2>
          </div>

          <div className="prose prose-lg mx-auto dark:prose-invert">
            <p className="text-muted-foreground leading-relaxed">
              At Simply Maid, we believe that a clean home is more than just a luxury—it's essential
              for well-being, comfort, and peace of mind. Founded in 2015, Simply Maid set out to be
              more than just a cleaning service. We're here to make a difference in the lives of our
              clients, our cleaners, and our community.
            </p>

            <div className="my-16 relative aspect-[2/1] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f"
                alt="Simply Maid journey"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <Card className="p-8 my-12 bg-violet-50/50 dark:bg-gray-900/20 border-none">
              <p className="text-xl font-medium leading-relaxed !text-foreground">
                "We connect experienced cleaners with clients who appreciate quality and care,
                creating a seamless, trustworthy service that takes the hassle out of keeping a home
                spotless."
              </p>
            </Card>

            <h3 className="text-2xl font-bold tracking-tight mt-16 mb-6">
              Our Story: From Vision to Reality
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Simply Maid began with a simple mission: to create a reliable, quality-driven cleaning
              service that clients could trust. The idea was born when our founder saw the need for
              better cleaning options on platforms like OzBargain, ProductReview, and Whirlpool.
              People were looking for trustworthy, efficient cleaners but found it difficult to find
              a service they could rely on.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Since launching Simply Maid in 2015, we've grown to serve clients across Australia.
              Today, we're not only a top-rated service provider but a company that gives back to
              its community. Our journey has been fueled by challenges, including the impact of
              COVID-19. During that time, we stood by our cleaners, finding ways to keep going
              without layoffs, even when it meant personal sacrifices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
