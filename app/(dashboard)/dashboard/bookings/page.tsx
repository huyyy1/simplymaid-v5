import { Suspense } from "react";
import { Metadata } from "next";
import { getBookings } from "@/lib/data/bookings";
import { BookingsList } from "@/components/dashboard/bookings/bookings-list";
import { BookingsListSkeleton } from "@/components/dashboard/bookings/bookings-list-skeleton";

export const metadata: Metadata = {
  title: "My Bookings - Simply Maid",
  description: "View and manage your cleaning service bookings.",
};

export default async function BookingsPage() {
  const bookings = await getBookings();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">My Bookings</h1>
        <p className="text-muted-foreground">View and manage your cleaning service bookings.</p>
      </div>

      <Suspense fallback={<BookingsListSkeleton />}>
        <BookingsList bookings={bookings} />
      </Suspense>
    </div>
  );
}