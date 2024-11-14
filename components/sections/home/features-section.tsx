import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Next.js 14",
    description: "App Router, Server Components, and streaming with React Suspense",
    icon: ArrowRight,
  },
  {
    title: "Components",
    description: "Beautifully designed components built with Radix UI and Tailwind",
    icon: ArrowRight,
  },
  {
    title: "Authentication",
    description: "Authentication using NextAuth.js and middlewares",
    icon: ArrowRight,
  },
];

export function FeaturesSection() {
  return (
    <section className="container space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Features</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          This template includes everything you need to build a modern web application
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="relative overflow-hidden rounded-lg border bg-background p-2"
          >
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <feature.icon className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
