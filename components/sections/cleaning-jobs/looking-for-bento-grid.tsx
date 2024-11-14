"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Star, Clock, Award, ChevronRight, Check, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function LookingForBentoGrid() {
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
            We're looking for passionate individuals who share our values
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {/* Main Requirements Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2"
          >
            <Card className="p-8 h-full hover:shadow-xl transition-shadow">
              <div className="h-full flex flex-col">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Core Requirements</h3>
                    <p className="text-muted-foreground">What we look for in our team members</p>
                  </div>
                  <Badge variant="secondary">Now Hiring</Badge>
                </div>

                <div className="grid gap-4 flex-1">
                  {[
                    "Valid work rights in Australia",
                    "Reliable and punctual",
                    "Attention to detail",
                    "Great communication skills",
                    "Physically fit and active",
                    "Customer service oriented",
                  ].map((req, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-accent rounded-lg">
                      <div className="flex-shrink-0">
                        <Check className="w-5 h-5 text-primary" />
                      </div>
                      <span>{req}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button asChild>
                    <Link href="/apply">
                      Apply Now
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Experience Level Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-6 h-full bg-gradient-to-br from-violet-500 to-purple-500 text-white hover:shadow-xl transition-shadow">
              <div className="flex flex-col h-full">
                <Users className="w-8 h-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Experience Level</h3>
                <div className="space-y-3 mt-4">
                  <div className="flex items-center justify-between">
                    <span>Entry Level</span>
                    <Badge variant="secondary" className="bg-white/20">
                      Welcome
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Experienced</span>
                    <Badge variant="secondary" className="bg-white/20">
                      Preferred
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Professional</span>
                    <Badge variant="secondary" className="bg-white/20">
                      Leadership
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Schedule Flexibility Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6 h-full bg-gradient-to-br from-pink-500 to-rose-500 text-white hover:shadow-xl transition-shadow">
              <div className="flex flex-col h-full">
                <Clock className="w-8 h-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Schedule Flexibility</h3>
                <div className="space-y-3 mt-4">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="font-semibold">Full-Time</div>
                    <div className="text-sm text-white/80">30-40 hours/week</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="font-semibold">Part-Time</div>
                    <div className="text-sm text-white/80">15-25 hours/week</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Growth Path Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-3"
          >
            <Card className="p-6 hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Cleaner",
                    description: "Start your journey",
                    earnings: "$35/hr",
                    level: "Entry",
                  },
                  {
                    title: "Senior Cleaner",
                    description: "Build expertise",
                    earnings: "$45/hr",
                    level: "Advanced",
                  },
                  {
                    title: "Team Leader",
                    description: "Lead & mentor",
                    earnings: "$55/hr",
                    level: "Expert",
                  },
                ].map((role, index) => (
                  <div key={role.title} className="flex flex-col">
                    <div className="font-semibold text-lg mb-1">{role.title}</div>
                    <div className="text-sm text-muted-foreground mb-3">{role.description}</div>
                    <div className="mt-auto flex items-center justify-between">
                      <Badge variant="secondary">{role.level}</Badge>
                      <span className="font-semibold text-primary">{role.earnings}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
