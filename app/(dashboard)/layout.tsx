import { redirect } from "next/navigation";
import { getSession } from "@/lib/features/auth/session";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar will be added here */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}