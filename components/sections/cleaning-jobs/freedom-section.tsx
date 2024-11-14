"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Clock, DollarSign, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Flexible Schedule",
    description:
      "Work when you want, where you want. Simply Maid lets you set your hours around your life, giving you the flexibility you need to balance work and personal commitments.",
  },
  {
    icon: DollarSign,
    title: "Weekly Pay, No Invoicing",
    description:
      "Say goodbye to unpaid invoices and admin work. With Simply Maid, you receive reliable weekly payments, so you can focus on what you do best—cleaning.",
  },
  {
    icon: TrendingUp,
    title: "Growth Champion Program",
    description:
      "Take your career to the next level with our Growth Champion Program. Refer, train, and lead new team members to earn residual income. This is a unique opportunity to grow within our supportive community.",
  },
];

export function FreedomSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Freedom to Clean, Without the Admin Headache
          </h2>
          <p className="text-lg text-muted-foreground">
            Simply Maid connects you with consistent cleaning jobs, freeing you from the burden of
            finding clients, chasing payments, and handling admin. Whether you want to expand your
            income, work flexible hours, or even grow into a leadership role, Simply Maid is here to
            support you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
