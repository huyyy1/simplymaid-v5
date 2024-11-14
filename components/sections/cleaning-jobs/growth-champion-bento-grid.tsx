"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  Star,
  Clock,
  Award,
  ChevronRight,
  Check,
  ArrowUpRight,
  TrendingUp,
  Target,
  Gift,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function GrowthChampionBentoGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Growth Champion Program</h2>
          <p className="text-lg text-muted-foreground">
            Take your career to the next level. Lead, mentor, and earn more.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {/* Main Benefits Card */}
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
                    <h3 className="text-2xl font-bold mb-2">Champion Benefits</h3>
                    <p className="text-muted-foreground">Exclusive perks for our leaders</p>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Elite Program
                  </Badge>
                </div>

                <div className="grid gap-4 flex-1">
                  {[
                    {
                      icon: TrendingUp,
                      title: "Higher Base Pay",
                      description: "Earn up to 30% more than standard rates",
                    },
                    {
                      icon: Target,
                      title: "Performance Bonuses",
                      description: "Monthly bonuses based on team performance",
                    },
                    {
                      icon: Users,
                      title: "Team Leadership",
                      description: "Lead and mentor new team members",
                    },
                    {
                      icon: Gift,
                      title: "Referral Rewards",
                      description: "Earn for every successful referral",
                    },
                  ].map((benefit) => (
                    <div
                      key={benefit.title}
                      className="flex items-start gap-4 p-4 bg-accent rounded-lg"
                    >
                      <div className="flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button asChild>
                    <Link href="/apply-champion">
                      Join the Program
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Requirements Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-6 h-full bg-gradient-to-br from-violet-500 to-purple-500 text-white hover:shadow-xl transition-shadow">
              <div className="flex flex-col h-full">
                <Award className="w-8 h-8 mb-4" />
                <h3 className="text-lg font-semibold mb-4">Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>6+ months experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>4.8+ rating average</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>Leadership qualities</span>
                  </li>
                </ul>
              </div>
            </Card>
          </motion.div>

          {/* Earnings Potential Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6 h-full bg-gradient-to-br from-pink-500 to-rose-500 text-white hover:shadow-xl transition-shadow">
              <div className="flex flex-col h-full">
                <TrendingUp className="w-8 h-8 mb-4" />
                <h3 className="text-lg font-semibold mb-4">Earning Potential</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="font-semibold">Base Pay</div>
                    <div className="text-2xl font-bold">$45-55/hr</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="font-semibold">With Bonuses</div>
                    <div className="text-2xl font-bold">$60-70/hr</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
