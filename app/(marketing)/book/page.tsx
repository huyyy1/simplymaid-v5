import { Metadata } from "next";
import { PreBookFlow } from "@/components/shared/pre-book-flow";

export const metadata: Metadata = {
  title: "Book a Clean - Simply Maid",
  description: "Book your home cleaning service in 60 seconds. Choose your preferred date, time, and service type.",
};

export default function BookPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-600 to-violet-800">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-white">Book Your Clean</h1>
            <p className="text-lg text-white/80">Get your personalized quote in 60 seconds</p>
          </div>

          <PreBookFlow />
        </div>
      </div>
    </div>
  );
}