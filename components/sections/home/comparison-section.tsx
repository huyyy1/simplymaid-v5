import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const pricingData = [
  {
    service: "Standard Cleaning",
    simplyMaid: "From $90",
    competitorA: "From $110",
    competitorB: "From $100",
    competitorC: "From $85",
    highlight: true,
  },
  {
    service: "Deep Cleaning",
    simplyMaid: "From $180",
    competitorA: "From $200",
    competitorB: "From $190",
    competitorC: "From $175",
  },
  {
    service: "End of Lease",
    simplyMaid: "From $250",
    competitorA: "From $270",
    competitorB: "From $260",
    competitorC: "From $240",
  },
  {
    service: "Bond Cleaning",
    simplyMaid: "From $250",
    competitorA: "From $280",
    competitorB: "From $265",
    competitorC: "From $250",
  },
  {
    service: "Move In/Out",
    simplyMaid: "From $230",
    competitorA: "From $250",
    competitorB: "From $240",
    competitorC: "From $220",
  },
];

const features = [
  {
    title: "100% Satisfaction Guarantee",
    description: "Not happy? We'll re-clean for free",
  },
  {
    title: "Eco-Friendly Products",
    description: "Safe for your family and pets",
  },
  {
    title: "Vetted Cleaners",
    description: "Background-checked and insured",
  },
  {
    title: "Flexible Scheduling",
    description: "Book 7 days a week",
  },
];

export function ComparisonSection() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="scroll-m-20 text-4xl font-bold tracking-tight mb-4">
            Compare and Choose What's Right for You
          </h2>
          <p className="text-lg text-muted-foreground">
            We believe in transparency and helping you make an informed decision. Here's how we
            stack up against other cleaning services in Sydney.
          </p>
        </div>

        <div className="space-y-16">
          {/* Pricing Table */}
          <div className="max-w-4xl mx-auto">
            <Card className="border border-border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service Type</TableHead>
                    <TableHead className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        Simply Maid
                        <Badge variant="secondary">Best Value</Badge>
                      </div>
                    </TableHead>
                    <TableHead className="text-right">Competitor A</TableHead>
                    <TableHead className="text-right">Competitor B</TableHead>
                    <TableHead className="text-right">Competitor C</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pricingData.map((row) => (
                    <TableRow key={row.service}>
                      <TableCell className="font-medium">{row.service}</TableCell>
                      <TableCell className="text-right font-medium text-primary">
                        {row.simplyMaid}
                      </TableCell>
                      <TableCell className="text-right">{row.competitorA}</TableCell>
                      <TableCell className="text-right">{row.competitorB}</TableCell>
                      <TableCell className="text-right">{row.competitorC}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>

          {/* Value Features */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
                Why Choose Simply Maid?
              </h3>
              <p className="text-muted-foreground">
                While we may not always be the cheapest option, we provide outstanding value through
                our commitment to quality, reliability, and customer satisfaction.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <Card key={feature.title} className="p-6 h-full border border-border">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Check className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              * Prices are approximate and may vary based on specific requirements. We encourage you
              to choose the service that best fits your needs and budget. Our commitment is to
              provide exceptional value, regardless of the service level you select.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}