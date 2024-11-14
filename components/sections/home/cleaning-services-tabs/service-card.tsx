"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Clock } from "lucide-react";
import { type Service } from "@/lib/types/services";
import Link from "next/link";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="p-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Content */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-violet-100 dark:bg-violet-900/20 flex items-center justify-center">
              <service.icon className="w-8 h-8 text-violet-600 dark:text-violet-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="text-lg text-muted-foreground">{service.description}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="px-4 py-1">
                {service.price}
              </Badge>
              <Badge variant="outline" className="px-4 py-1">
                <Clock className="w-4 h-4 mr-1" />
                {service.duration}
              </Badge>
            </div>

            <p className="text-muted-foreground">{service.details}</p>

            <div className="space-y-2">
              <h4 className="font-semibold">What's Included:</h4>
              <ul className="space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-violet-600 dark:text-violet-400 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button size="lg" className="mt-6" asChild>
              <Link href="/book">
                Book Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
          <Image
            src={service.image}
            alt={`${service.title} service`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </Card>
  );
}
