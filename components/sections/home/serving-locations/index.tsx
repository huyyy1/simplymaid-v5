import { locations } from "@/lib/data/locations";
import { SectionHeader } from "./section-header";
import { LocationCard } from "./location-card";
import { ContactCTA } from "./contact-cta";

export function ServingLocations() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <SectionHeader />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {locations.map((location, index) => (
            <LocationCard key={location.name} location={location} index={index} />
          ))}
        </div>

        <ContactCTA />
      </div>
    </section>
  );
}