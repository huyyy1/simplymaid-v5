"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarRating } from "@/components/sections/recently-cleaned/star-rating";
import { type BaseProps } from "@/lib/types";
import { cn } from "@/lib/utils";

interface Testimonial {
  content: string;
  author: string;
  role?: string;
  image: string;
  rating?: number;
}

interface TestimonialGridProps extends BaseProps {
  testimonials: Testimonial[];
  columns?: 2 | 3 | 4;
  variant?: "default" | "card" | "minimal";
}

export function TestimonialGrid({
  testimonials,
  columns = 3,
  variant = "default",
  className,
}: TestimonialGridProps) {
  return (
    <div
      className={cn(
        "grid gap-8",
        columns === 2 && "md:grid-cols-2",
        columns === 3 && "md:grid-cols-3",
        columns === 4 && "md:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.author}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="p-6 h-full">
            <div className="flex flex-col items-center text-center space-y-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={testimonial.image} alt={testimonial.author} />
                <AvatarFallback>
                  {testimonial.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              {testimonial.rating && (
                <StarRating rating={testimonial.rating} className="justify-center" />
              )}
              <blockquote className="text-muted-foreground">"{testimonial.content}"</blockquote>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                {testimonial.role && (
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                )}
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
