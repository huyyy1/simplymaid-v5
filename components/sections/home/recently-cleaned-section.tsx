"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { StarRating } from "@/components/sections/recently-cleaned/star-rating";
import Marquee from "@/components/magicui/marquee";
import SparklesText from "@/components/magicui/sparkles-text";

const reviews = [
  {
    name: "Sarah M.",
    location: "Surry Hills",
    body: "Absolutely fantastic service! The team was professional, thorough, and left my home spotless.",
    img: "https://i.pravatar.cc/150?img=1",
    rating: 5,
  },
  {
    name: "James P.",
    location: "Bondi Beach",
    body: "Regular customer for 6 months now. Consistently excellent service and attention to detail.",
    img: "https://i.pravatar.cc/150?img=2",
    rating: 5,
  },
  {
    name: "Emma L.",
    location: "Newtown",
    body: "Best cleaning service in Sydney! Reliable, trustworthy, and always go the extra mile.",
    img: "https://i.pravatar.cc/150?img=3",
    rating: 5,
  },
  {
    name: "Michael R.",
    location: "Double Bay",
    body: "Incredible attention to detail. My apartment has never looked better!",
    img: "https://i.pravatar.cc/150?img=4",
    rating: 5,
  },
  {
    name: "Lisa K.",
    location: "Paddington",
    body: "Professional, punctual, and perfect results every time. Highly recommend!",
    img: "https://i.pravatar.cc/150?img=5",
    rating: 5,
  },
  {
    name: "David W.",
    location: "Manly",
    body: "Outstanding service! They went above and beyond my expectations.",
    img: "https://i.pravatar.cc/150?img=6",
    rating: 5,
  },
];

function ReviewCard({
  img,
  name,
  location,
  body,
  rating,
}: {
  img: string;
  name: string;
  location: string;
  body: string;
  rating: number;
}) {
  return (
    <Card className="relative w-[350px] cursor-pointer overflow-hidden rounded-xl p-6 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] transition-colors duration-300 dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15] transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      <div className="flex flex-row items-center gap-4">
        <Avatar className="h-12 w-12 border-2">
          <AvatarImage src={img} alt={name} />
          <AvatarFallback>
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <figcaption className="text-base font-semibold dark:text-white">{name}</figcaption>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </div>
      <div className="mt-4">
        <StarRating rating={rating} size={16} />
      </div>
      <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</blockquote>
    </Card>
  );
}

export function RecentlyCleanedSection() {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

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

        <div className="relative flex flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:40s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:40s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background" />
        </div>

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
