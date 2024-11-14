import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Do I need to be home during the clean?",
    answer:
      "No, you don't! Many of our clients give us access to their homes while they're out, and they return to a beautifully clean space.",
  },
  {
    question: "What's included in an end-of-lease clean?",
    answer:
      "Everything from dusting to deep cleaning carpets—we make sure your home is spotless and ready for inspection.",
  },
  {
    question: "Do you use eco-friendly products?",
    answer: "Yes! All of our cleaning products are safe for your family, pets, and the planet.",
  },
  {
    question: "How do you select your cleaners?",
    answer:
      "All our cleaners undergo thorough background checks, training, and must maintain high customer satisfaction ratings.",
  },
  {
    question: "What if I'm not satisfied with the cleaning?",
    answer:
      "Your satisfaction is guaranteed! If you're not completely happy, we'll return to re-clean any areas of concern at no additional cost.",
  },
  {
    question: "How do I pay for the service?",
    answer:
      "We accept all major credit cards and process payments securely online after your cleaning is completed to your satisfaction.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="scroll-m-20 text-4xl font-bold tracking-tight mb-4">
            Questions? We've Got Answers.
          </h2>
          <p className="text-lg text-muted-foreground">
            We know choosing a cleaning service is a big decision. Here are some of the most common
            questions we get—and our answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center">
          <p className="text-lg mb-6 text-muted-foreground">
            Still have questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/book">
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}