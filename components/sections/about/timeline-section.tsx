"use client";

import { Timeline } from "@/components/aceternityui/timeline";

const timelineData = [
  {
    title: "2015",
    content: (
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          At just 23, Huy Hoang founded Simply Maid with a vision to meet the growing demand for
          reliable, high-quality cleaning services in Australia.
        </p>
        <div className="space-y-2">
          <div className="flex gap-2 items-center text-sm">
            <span className="text-primary">✨</span>
            <span className="text-gray-800 dark:text-gray-200">Company founded in Sydney</span>
          </div>
          <div className="flex gap-2 items-center text-sm">
            <span className="text-primary">✨</span>
            <span className="text-gray-800 dark:text-gray-200">
              First team of trusted cleaners hired
            </span>
          </div>
          <div className="flex gap-2 items-center text-sm">
            <span className="text-primary">✨</span>
            <span className="text-gray-800 dark:text-gray-200">
              Initial client base established
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2018",
    content: (
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          With a solid foundation of trust and a growing reputation, Simply Maid expanded its reach
          across Australia's major cities.
        </p>
        <div className="space-y-2">
          <div className="flex gap-2 items-center text-sm">
            <span className="text-primary">✨</span>
            <span className="text-gray-800 dark:text-gray-200">
              Expanded to major Australian cities
            </span>
          </div>
          <div className="flex gap-2 items-center text-sm">
            <span className="text-primary">✨</span>
            <span className="text-gray-800 dark:text-gray-200">Team grew to 50+ cleaners</span>
          </div>
          <div className="flex gap-2 items-center text-sm">
            <span className="text-primary">✨</span>
            <span className="text-gray-800 dark:text-gray-200">
              Enhanced training program launched
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2020",
    content: (
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          During the pandemic, we stood by our team. Rather than downsizing, we kept our cleaners
          employed and supported.
        </p>
        <div className="space-y-2">
          <div className="flex gap-2 items-center text-sm">
            <span className="text-primary">✨</span>
            <span className="text-gray-800 dark:text-gray-200">
              Maintained full employment during COVID
            </span>
          </div>
          <div className="flex gap-2 items-center text-sm">
            <span className="text-primary">✨</span>
            <span className="text-gray-800 dark:text-gray-200">
              Implemented enhanced safety protocols
            </span>
          </div>
          <div className="flex gap-2 items-center text-sm">
            <span className="text-primary">✨</span>
            <span className="text-gray-800 dark:text-gray-200">
              Supported team through challenges
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          We launched our Growth Champion Program and reaffirmed our commitment to our Ikigai - our
          reason for being.
        </p>
        <div className="space-y-2">
          <div className="flex gap-2 items-center text-sm">
            <span className="text-primary">✨</span>
            <span className="text-gray-800 dark:text-gray-200">
              Growth Champion Program launched
            </span>
          </div>
          <div className="flex gap-2 items-center text-sm">
            <span className="text-primary">✨</span>
            <span className="text-gray-800 dark:text-gray-200">
              Reached 10,000+ happy customers
            </span>
          </div>
          <div className="flex gap-2 items-center text-sm">
            <span className="text-primary">✨</span>
            <span className="text-gray-800 dark:text-gray-200">Enhanced technology platform</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Looking ahead, we're focused on becoming a household name in Australia, synonymous with
          trust, quality, and people-first values.
        </p>
        <div className="space-y-2">
          <div className="flex gap-2 items-center text-sm">
            <span className="text-primary">✨</span>
            <span className="text-gray-800 dark:text-gray-200">15,000+ happy customers served</span>
          </div>
          <div className="flex gap-2 items-center text-sm">
            <span className="text-primary">✨</span>
            <span className="text-gray-800 dark:text-gray-200">
              Expanded Growth Champion Program
            </span>
          </div>
          <div className="flex gap-2 items-center text-sm">
            <span className="text-primary">✨</span>
            <span className="text-gray-800 dark:text-gray-200">
              Continued innovation and growth
            </span>
          </div>
        </div>
      </div>
    ),
  },
];

export function TimelineSection() {
  return <Timeline data={timelineData} />;
}
