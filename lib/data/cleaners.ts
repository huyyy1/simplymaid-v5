import { createClient } from "@/lib/supabase/server";

export interface Cleaner {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  image: string;
  latestReview: string;
  badges: string[];
  type: string;
}

export async function getTopCleaners(): Promise<Cleaner[]> {
  const supabase = createClient();
  
  const { data, error } = await supabase
    .from("cleaners")
    .select("*")
    .eq("is_active", true)
    .order("rating", { ascending: false })
    .limit(4);

  if (error) {
    console.error("Error fetching cleaners:", error);
    return [];
  }

  return data.map((cleaner) => ({
    id: cleaner.id,
    name: cleaner.name,
    location: cleaner.location,
    rating: cleaner.rating,
    reviews: cleaner.total_reviews,
    image: cleaner.image_url,
    latestReview: cleaner.latest_review,
    badges: cleaner.badges,
    type: cleaner.type,
  }));
}