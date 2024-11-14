export const imageConfig = {
  supabaseUrl: "https://vqxgzfcwifmbxwixhsxv.supabase.co/storage/v1/object/public/web-assets",
  locations: {
    surryHills: "/locations/surry-hills-sydney.jpg",
    bondiBeach: "/locations/bondi-beach-sydney.jpg",
    newtown: "/locations/newtown-sydney.jpg",
    chatswood: "/locations/chatswood-sydney.jpg",
    parramatta: "/locations/parramatta-sydney.jpg",
  },
  services: {
    standard: "/services/standard-cleaning.jpg",
    deep: "/services/deep-cleaning.jpg",
    endOfLease: "/services/end-of-lease-cleaning.jpg",
    bond: "/services/bond-cleaning.jpg",
    moveInOut: "/services/move-in-out-cleaning.jpg",
    spring: "/services/spring-cleaning.jpg",
    housekeeping: "/services/housekeeping.jpg",
  },
};

export const getImageUrl = (path: string) => `${imageConfig.supabaseUrl}${path}`;
