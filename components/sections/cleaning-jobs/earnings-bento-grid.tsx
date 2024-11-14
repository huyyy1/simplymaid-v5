"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, DollarSign, Clock, TrendingUp, Star, ChevronRight } from "lucide-react";
import Image from "next/image";

export function EarningsBentoGrid() {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {/* Featured Card - Base Pay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2"
          >
            <Card className="p-8 h-full bg-[#7E57C2] text-white hover:shadow-xl transition-shadow">
              <div className="h-full flex flex-col">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Base Pay</h3>
                    <p className="text-white/80">Starting at</p>
                  </div>
                  <div className="text-4xl font-bold">$35/hr</div>
                </div>

                <div className="grid gap-4 flex-1">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span>Standard Clean</span>
                      <span className="font-bold">$120</span>
                    </div>
                    <div className="text-sm text-white/70">2-3 hours • Base rate</div>
                  </div>

                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span>Deep Clean</span>
                      <span className="font-bold">$250</span>
                    </div>
                    <div className="text-sm text-white/70">4-6 hours • Premium rate</div>
                  </div>
                </div>

                <div className="mt-8 flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Paid weekly, every Friday</span>
                </div>
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
            <Card className="p-6 h-full bg-gradient-to-br from-pink-500 to-rose-500 text-white hover:shadow-xl transition-shadow">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Peak Hours Bonus</h3>
                  <Badge variant="secondary" className="bg-white/20">
                    Active
                  </Badge>
                </div>
                <div className="text-3xl font-bold mb-2">+$20</div>
                <p className="text-white/80 text-sm mb-4">Per cleaning during peak hours</p>
                <div className="mt-auto flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Until 2:00 PM today</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Weekly Challenge Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6 h-full bg-gradient-to-br from-violet-500 to-purple-500 text-white hover:shadow-xl transition-shadow">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Weekly Challenge</h3>
                  <Badge variant="secondary" className="bg-white/20">
                    6/10
                  </Badge>
                </div>
                <div className="text-3xl font-bold mb-2">$150</div>
                <p className="text-white/80 text-sm">Complete 10 cleans this week</p>
                <div className="mt-4 w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white rounded-full h-2 w-3/5" />
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Latest Tips Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2"
          >
            <Card className="p-6 h-full hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-4">Latest Tips</h3>
                  <div className="space-y-4">
                    {[
                      { name: "Sarah M.", time: "2h ago", amount: "$15", image: "1" },
                      { name: "James P.", time: "4h ago", amount: "$20", image: "2" },
                    ].map((tip, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Image
                          src={`https://i.pravatar.cc/40?img=${tip.image}`}
                          alt={tip.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div className="flex-1">
                          <div className="font-medium">{tip.name}</div>
                          <div className="text-sm text-muted-foreground">{tip.time}</div>
                        </div>
                        <Badge variant="secondary">{tip.amount}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground mb-1">This Week</div>
                  <div className="text-2xl font-bold text-green-500">$245</div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Instant Pay Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="p-6 h-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white hover:shadow-xl transition-shadow">
              <div className="flex flex-col h-full">
                <Bell className="w-8 h-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Instant Pay</h3>
                <p className="text-sm text-white/80 mb-4">
                  Cash out your earnings instantly, any time you want
                </p>
                <div className="mt-auto flex items-center text-sm">
                  <span>Learn more</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
