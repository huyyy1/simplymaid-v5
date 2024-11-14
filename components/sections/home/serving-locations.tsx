import Image from "next/image";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { locations } from "@/lib/data/locations";
import { getOptimizedImageProps } from "@/lib/utils/image-optimization";

export async function ServingLocations() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Serving All Across{" "}
            <span className="text-[#7E57C2]">Sydney</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We're proud to offer our high-quality cleaning services across Sydney, from the bustling
            city center to the suburbs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {locations.map(async (location, index) => {
            // Get optimized image props for each location
            const imageProps = await getOptimizedImageProps({
              src: location.image,
              alt: `${location.name} cleaning services`,
              sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw",
            });

            return (
              <div key={location.name} className="relative group">
                <div className="relative h-[200px] rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                  <Image
                    {...imageProps}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4 z-20 flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-white">
                      <MapPin className="w-4 h-4" />
                      <span className="font-medium">{location.name}</span>
                    </div>
                    <span className="text-sm text-white/80">{location.description}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg">
            Not sure if we serve your area?{" "}
            <Link href="/contact" className="text-[#7E57C2] hover:text-[#7E57C2]/80 font-medium">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}