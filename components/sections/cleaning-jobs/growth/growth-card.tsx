"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { GROWTH_BENEFITS } from "@/lib/constants/static-data";

export function GrowthCard() {
  return (
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
          {GROWTH_BENEFITS.map((benefit) => (
            <div key={benefit.title} className="flex items-start gap-4 p-4 bg-accent rounded-lg">
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
  );
}
