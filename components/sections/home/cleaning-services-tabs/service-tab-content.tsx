"use client";

import { type Service } from "@/lib/types/services";

interface ServiceTabContentProps {
  service: Service;
}

export function ServiceTabContent({ service }: ServiceTabContentProps) {
  return (
    <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl bg-gradient-to-br from-violet-500 to-violet-700">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-white/10">
              <service.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">{service.title}</h3>
          </div>
          <p className="text-base text-white/80">{service.description}</p>
          <div className="text-base text-white/80">{service.details}</div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-white">What's Included:</h4>
            <ul className="space-y-2 text-base">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2 text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative flex-1 h-[400px] rounded-xl overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
