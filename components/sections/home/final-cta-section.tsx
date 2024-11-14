import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export function FinalCTASection() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:24px_24px] opacity-10" />

      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-1 text-white/90">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
            <span className="ml-2 text-lg">4.8/5 from 15,000+ happy customers</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white">Ready for a Spotless Home?</h2>

          <p className="text-xl text-white/90">
            Book your clean in 60 seconds and join thousands of satisfied customers
          </p>
        </div>

        <Button
          size="lg"
          className="bg-white text-primary hover:bg-white/90 text-lg px-8 h-14 rounded-full shadow-xl"
          asChild
        >
          <Link href="/book">
            Book Your Clean Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}