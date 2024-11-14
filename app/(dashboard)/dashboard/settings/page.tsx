import { Suspense } from "react";
import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileForm } from "@/components/dashboard/settings/profile-form";
import { NotificationsForm } from "@/components/dashboard/settings/notifications-form";
import { PaymentMethodsForm } from "@/components/dashboard/settings/payment-methods-form";
import { FormSkeleton } from "@/components/skeletons/form-skeleton";

export const metadata: Metadata = {
  title: "Settings - Simply Maid",
  description: "Manage your account settings and preferences.",
};

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences.</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="payment">Payment Methods</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Suspense fallback={<FormSkeleton />}>
            <ProfileForm />
          </Suspense>
        </TabsContent>

        <TabsContent value="notifications">
          <Suspense fallback={<FormSkeleton />}>
            <NotificationsForm />
          </Suspense>
        </TabsContent>

        <TabsContent value="payment">
          <Suspense fallback={<FormSkeleton />}>
            <PaymentMethodsForm />
          </Suspense>
        </TabsContent>
      </Tabs>
    </div>
  );
}