import { createClient } from "@/lib/supabase/server";

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export async function getFAQs(): Promise<FAQ[]> {
  const supabase = createClient();
  
  const { data, error } = await supabase
    .from("faqs")
    .select("*")
    .eq("is_active", true)
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Error fetching FAQs:", error);
    return [
      {
        question: "Do I need to be home during the clean?",
        answer: "No, you don't! Many of our clients give us access to their homes while they're out, and they return to a beautifully clean space.",
        category: "general",
      },
      {
        question: "What's included in an end-of-lease clean?",
        answer: "Everything from dusting to deep cleaning carpets—we make sure your home is spotless and ready for inspection.",
        category: "services",
      },
      {
        question: "Do you use eco-friendly products?",
        answer: "Yes! All of our cleaning products are safe for your family, pets, and the planet.",
        category: "products",
      },
      {
        question: "How do you select your cleaners?",
        answer: "All our cleaners undergo thorough background checks, training, and must maintain high customer satisfaction ratings.",
        category: "cleaners",
      },
      {
        question: "What if I'm not satisfied with the cleaning?",
        answer: "Your satisfaction is guaranteed! If you're not completely happy, we'll return to re-clean any areas of concern at no additional cost.",
        category: "guarantee",
      },
      {
        question: "How do I pay for the service?",
        answer: "We accept all major credit cards and process payments securely online after your cleaning is completed to your satisfaction.",
        category: "payment",
      },
    ];
  }

  return data;
}