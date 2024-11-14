"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, DollarSign, Clock, Calendar } from "lucide-react";

const jobs = [
  {
    title: "Residential Cleaner",
    location: "New York, NY",
    rate: "$25-30/hr",
    schedule: "Flexible hours",
    type: "Full-time",
  },
  {
    title: "Commercial Cleaner",
    location: "Los Angeles, CA",
    rate: "$22-28/hr",
    schedule: "Evening shifts",
    type: "Part-time",
  },
  {
    title: "Deep Cleaning Specialist",
    location: "Chicago, IL",
    rate: "$28-35/hr",
    schedule: "Weekends available",
    type: "Contract",
  },
];

export function JobListings() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Available Positions</h2>
          <p className="text-lg text-muted-foreground">
            Find the perfect cleaning job that matches your schedule and preferences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">{job.title}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <DollarSign className="w-4 h-4 mr-2" />
                    {job.rate}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    {job.schedule}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {job.type}
                  </div>
                </div>
                <Button className="w-full">Apply Now</Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
