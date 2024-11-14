import { Card } from "@/components/ui/card";
import { Stat } from "@/lib/types/dashboard";

const stats: Stat[] = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1% from last month",
  },
  {
    title: "Subscriptions",
    value: "+2350",
    change: "+180.1% from last month",
  },
  {
    title: "Sales",
    value: "+12,234",
    change: "+19% from last month",
  },
  {
    title: "Active Users",
    value: "+573",
    change: "+201 since last hour",
  },
];

export function StatsSection() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="p-6">
          <h3 className="text-sm font-medium">{stat.title}</h3>
          <div className="mt-2 text-2xl font-bold">{stat.value}</div>
          <p className="text-xs text-muted-foreground">{stat.change}</p>
        </Card>
      ))}
    </div>
  );
}
