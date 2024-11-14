"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Award, Star } from "lucide-react";
import Image from "next/image";

const stories = [
  {
    name: "Maria S.",
    role: "Growth Champion",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    achievement: "Earned $75K+ in 2023",
    quote:
      "Starting as a cleaner, I grew into a team leader. The Growth Champion program changed my career trajectory.",
    badges: ["Team Leader", "3 Years", "Top Earner"],
  },
  {
    name: "David L.",
    role: "Senior Cleaner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    achievement: "Maintains 4.98 Rating",
    quote:
      "The flexibility lets me balance work with my studies. I choose my hours and still earn great money.",
    badges: ["Flexible Hours", "Top Rated", "Student"],
  },
  {
    name: "Sarah K.",
    role: "Part-Time Cleaner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    achievement: "$2K+ Weekly",
    quote:
      "I work 25 hours a week and earn more than my previous full-time job. The support is amazing.",
    badges: ["Part Time", "High Earner", "Mom of 2"],
  },
];

export function SuccessStories() {
  return (
    <section className="py-24 bg-accent">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Success Stories</h2>
          <p className="text-lg text-muted-foreground">
            Real stories from our cleaners who found success with Simply Maid.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative w-24 h-24">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover rounded-full"
                    />
                    <div className="absolute -bottom-2 -right-2 p-2 rounded-full bg-primary text-white">
                      {story.achievement.includes("Rating") ? (
                        <Star className="w-4 h-4" />
                      ) : story.achievement.includes("Weekly") ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <Award className="w-4 h-4" />
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">{story.name}</h3>
                    <p className="text-sm text-muted-foreground">{story.role}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {story.badges.map((badge) => (
                      <Badge key={badge} variant="secondary">
                        {badge}
                      </Badge>
                    ))}
                  </div>

                  <div className="bg-primary/5 rounded-lg p-4">
                    <div className="font-semibold text-primary mb-2">{story.achievement}</div>
                    <p className="text-sm text-muted-foreground italic">"{story.quote}"</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
