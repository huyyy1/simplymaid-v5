"use client";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 bg-[#7E57C2] dark:bg-[#7E57C2]/90">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Join Our Team?</h2>
          <p className="text-xl text-white/90">
            Take the first step towards a rewarding career with Sydney's most trusted cleaning
            service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#7E57C2] hover:bg-white/90 dark:bg-white dark:text-[#7E57C2] dark:hover:bg-white/90 text-lg px-8"
            >
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
