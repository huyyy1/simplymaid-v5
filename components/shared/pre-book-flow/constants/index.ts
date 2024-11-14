export * from "./validation";

export const TRUST_SIGNALS = {
  rating: "4.8/5",
  customerCount: "15,000+",
  slotsLeft: 3,
} as const;

export const CLEAN_TYPES = [
  { value: "standard", label: "Standard Clean" },
  { value: "deep", label: "Deep Clean" },
  { value: "end", label: "End of Lease" },
] as const;

export const ROOM_COUNTS = [1, 2, 3, 4, 5, 6] as const;

export const CONTACT_STEPS = [
  {
    field: "email" as const,
    heading: "Where should we send your price?",
    subtext: "We'll make it easy for you to come back.",
    placeholder: "✌️ Your email for price & magic link!",
    helperText: "Enter a valid email address (e.g., name@example.com)",
  },
  {
    field: "name" as const,
    heading: "Who should we make this out to?",
    subtext: "Just a first name is perfect!",
    placeholder: "😊 Enter your name…",
    helperText: "Enter your first name (at least 2 characters)",
  },
  {
    field: "mobile" as const,
    heading: "Last step! Where do we send your little surprise 🎁",
    subtext: "Put in your mobile—Trust me, you're going to want to see it.",
    placeholder: "📱 Enter your mobile… Get your price & something special",
    helperText: "Enter your Australian mobile number (starting with 04)",
  },
] as const;
