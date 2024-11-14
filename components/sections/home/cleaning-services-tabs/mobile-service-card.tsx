"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Clock } from "lucide-react";
import { type Service } from "@/lib/types/services";
import Link from "next/link";

interface MobileServiceCardProps {
  service: Service;
}

export function MobileServiceCard({ service }: MobileServiceCardProps) {
  return (
    <div className="pt-4 pb-2 px-2 space-y-4">
      <div className="relative h-48 rounded-lg overflow-hidden">
        <Image
          src={service.image}
          alt={`${service.title} service`}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="flex items-center gap-4">
        <Badge variant="secondary">{service.price}</Badge>
        <Badge variant="outline">
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
              <Check className="w-4 h-4 text-violet-600 dark:text-violet-400 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button className="w-full mt-4" asChild>
        <Link href="/book">
          Book Now
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
