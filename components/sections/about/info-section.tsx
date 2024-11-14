import { Card } from "@/components/ui/card";
import { Code2, Rocket, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Modern Tech Stack",
    description:
      "Built with Next.js 14, TypeScript, and Tailwind CSS for optimal performance and developer experience.",
  },
  {
    icon: Users,
    title: "User-Centric",
    description: "Focused on creating intuitive and accessible experiences that delight users.",
  },
  {
    icon: Zap,
    title: "Performance First",
    description:
      "Optimized for speed and efficiency, ensuring fast load times and smooth interactions.",
  },
  {
    icon: Rocket,
    title: "Scalable Solutions",
    description: "Designed to grow with your needs, from startup to enterprise-level applications.",
  },
];

export function AboutInfoSection() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Our Approach
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
          We combine technical excellence with creative innovation to deliver exceptional results.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <Card key={feature.title} className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-primary/10 p-2">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
