"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, DollarSign, Clock, TrendingUp } from "lucide-react";
import Image from "next/image";

export function EarningsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">How Much Can You Earn?</h2>
          <p className="text-lg text-muted-foreground">
            Earn more with transparent base pay, bonuses, and tips. Here's how your earnings break
            down.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Base Pay Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-4">Base Pay</h3>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary" className="px-3 py-1">
                    <DollarSign className="w-4 h-4 mr-1" />
                    $35/hour
                  </Badge>
                </div>
                <div className="bg-accent/50 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Standard Clean</span>
                    <span className="font-semibold">$120</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Base pay • 2-3 hours</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Guaranteed base pay for every job, calculated based on time and complexity.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Bonuses Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-6 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-4">Bonuses & Promotions</h3>
                <div className="space-y-4">
                  <div className="bg-primary/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Peak Hours Bonus</span>
                      <Badge variant="secondary">+$20</Badge>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      Until 2:00 PM today
                    </div>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Weekly Challenge</span>
                      <Badge variant="secondary">$150</Badge>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Complete 10 cleans this week
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Tips Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-4">Tips & Ratings</h3>
                <div className="space-y-4">
                  <div className="bg-green-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Last Week's Tips</span>
                      <span className="font-semibold text-green-500">$245</span>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      Average $35/day in tips
                    </div>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Image
                        src="https://i.pravatar.cc/32?img=3"
                        alt="Customer"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">Sarah M.</div>
                        <div className="text-xs text-muted-foreground">2 hours ago</div>
                      </div>
                      <Badge variant="secondary">$15 tip</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground italic">
                      "Amazing job! Left my house spotless ⭐️"
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Notification Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-6 bg-primary text-primary-foreground">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-white/10">
                  <Bell className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Instant Job Notifications</h3>
                  <p className="text-primary-foreground/80">
                    Get notified instantly when new jobs are available in your area. Accept jobs
                    that fit your schedule.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="p-6 bg-[#FF4E8E] text-white">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-white/10">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Weekly Payments</h3>
                  <p className="text-white/80">
                    Get paid weekly directly to your bank account. No invoicing or chasing payments
                    needed.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
