"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Users, Star, Clock, Award } from "lucide-react";

const profiles = [
  {
    icon: Users,
    title: "Experienced Cleaners",
    description:
      "If you're experienced in the cleaning field and want more steady work, Simply Maid is here to help you expand your client base without the hassle of finding work.",
  },
  {
    icon: Star,
    title: "Reliable Professionals",
    description:
      "We value cleaners who are punctual, thorough, and committed to delivering top-quality service with every job.",
  },
  {
    icon: Clock,
    title: "Flexible and Dedicated",
    description:
      "If you're passionate about cleaning and enjoy the freedom of choosing your hours, Simply Maid offers you the flexibility to work on your terms.",
  },
  {
    icon: Award,
    title: "Team-Oriented Leaders",
    description:
      "Ready to step into a leadership role? Through our Growth Champion Program, you can mentor and lead new team members, earning extra income as you do.",
  },
];

export function LookingForSection() {
  return (
    <section className="py-24 bg-accent">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Is This You? Join Us If...</h2>
          <p className="text-lg text-muted-foreground">
            Simply Maid is always on the lookout for skilled, reliable cleaners who are ready to
            bring their talents to a supportive, growth-oriented environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-full bg-primary/10">
                      <profile.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{profile.title}</h3>
                    <p className="text-muted-foreground">{profile.description}</p>
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
