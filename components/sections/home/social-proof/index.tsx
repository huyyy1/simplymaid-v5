"use client";

import { SocialProofVideo } from "./social-proof-video";
import { SocialProofContent } from "./social-proof-content";
import { BackgroundDots } from "@/components/shared/ui/background-dots";

export function SocialProofSection() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <BackgroundDots />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <SocialProofVideo />
          <SocialProofContent />
        </div>
      </div>
    </section>
  );
}
