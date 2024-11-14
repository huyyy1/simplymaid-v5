"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data/services";
import Link from "next/link";
import { ServiceTabContent } from "./cleaning-services-tabs/service-tab-content";
import { Tabs } from "@/components/aceternityui/tabs";

export function CleaningServicesTabs() {
  const tabs = services.map((service) => ({
    title: service.title,
    value: service.id,
    content: <ServiceTabContent service={service} />,
  }));

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            The cleaning service for <span className="text-primary">every need</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every home is different. Whether you need a deep clean, regular upkeep, or a move-out
            clean to get your bond back, Simply Maid is here to help.
          </p>
        </motion.div>

        <div className="h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
          <Tabs tabs={tabs} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg">
            Not sure what's right for you?{" "}
            <Link href="/contact" className="text-primary hover:text-primary/90 font-medium">
              Let's chat and find the perfect service for your needs.
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
