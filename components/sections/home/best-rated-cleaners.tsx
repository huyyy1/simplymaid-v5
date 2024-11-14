"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StarRating } from "@/components/sections/recently-cleaned/star-rating";
import { Shield, Phone, Award } from "lucide-react";
import Image from "next/image";

const cleaningTypes = [
  { id: "all", label: "All" },
  { id: "domestic", label: "Domestic Cleaning" },
  { id: "floor", label: "Floor Cleaning" },
  { id: "shower", label: "Shower Cleaning" },
  { id: "spring", label: "Spring Cleaning" },
];

const cleaners = [
  {
    id: 1,
    name: "Densmaa K",
    location: "Arncliffe NSW",
    rating: 4.8,
    reviews: 489,
    image: "https://i.pravatar.cc/150?img=1",
    latestReview: "Very efficient and beautiful work",
    badges: ["verified", "mobile"],
    type: "domestic",
  },
  {
    id: 2,
    name: "Emma S",
    location: "Rozelle NSW",
    rating: 5.0,
    reviews: 4,
    image: "https://i.pravatar.cc/150?img=2",
    latestReview: "Very easy to work with! Did a great job",
    badges: ["mobile"],
    type: "floor",
  },
  {
    id: 3,
    name: "Adam V",
    location: "Bankstown NSW",
    rating: 4.8,
    reviews: 180,
    image: "https://i.pravatar.cc/150?img=3",
    latestReview: "Great job and awesome to deal with! Thank you ⭐️ ⭐️",
    badges: ["mobile"],
    type: "shower",
  },
  {
    id: 4,
    name: "Nathan D",
    location: "Oran Park NSW",
    rating: 4.8,
    reviews: 8,
    image: "https://i.pravatar.cc/150?img=4",
    latestReview: "Extremely happy with Nathan's service",
    badges: ["verified", "mobile", "award"],
    type: "spring",
  },
];

export function BestRatedCleaners() {
  const [selectedType, setSelectedType] = useState("all");

  const filteredCleaners =
    selectedType === "all" ? cleaners : cleaners.filter((cleaner) => cleaner.type === selectedType);

  return (
    <section className="py-24 bg-accent">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Best rated cleaners near me</h2>
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {cleaningTypes.map((type) => (
              <Button
                key={type.id}
                variant={selectedType === type.id ? "default" : "outline"}
                onClick={() => setSelectedType(type.id)}
                className="rounded-full"
              >
                {type.label}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCleaners.map((cleaner, index) => (
            <motion.div
              key={cleaner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col">
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image src={cleaner.image} alt={cleaner.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{cleaner.name}</h3>
                    <p className="text-sm text-muted-foreground">{cleaner.location}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <StarRating rating={cleaner.rating} size={12} />
                      <span className="text-sm font-medium">{cleaner.rating}</span>
                      <span className="text-sm text-muted-foreground">({cleaner.reviews})</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {cleaner.badges.includes("verified") && (
                    <Badge variant="secondary" className="gap-1">
                      <Shield className="w-3 h-3" />
                      Verified
                    </Badge>
                  )}
                  {cleaner.badges.includes("mobile") && (
                    <Badge variant="secondary" className="gap-1">
                      <Phone className="w-3 h-3" />
                      Mobile
                    </Badge>
                  )}
                  {cleaner.badges.includes("award") && (
                    <Badge variant="secondary" className="gap-1">
                      <Award className="w-3 h-3" />
                      Top Rated
                    </Badge>
                  )}
                </div>

                <div className="mt-4 flex-1">
                  <p className="text-sm text-muted-foreground italic">"{cleaner.latestReview}"</p>
                </div>

                <Button className="w-full mt-6" variant="outline">
                  Request a Quote
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
