import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Verify Your Email - Simply Maid",
  description: "Please verify your email address to continue.",
};

export default function VerifyPage() {
  return (
    <Card className="p-8 w-full">
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Mail className="w-6 h-6 text-primary" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Check your email</h1>
          <p className="text-muted-foreground">
            We've sent you a verification link. Please check your email to continue.
          </p>
        </div>

        <div className="space-y-4 w-full">
          <Button className="w-full" asChild>
            <Link href="/login">Back to Login</Link>
          </Button>
          <p className="text-sm text-muted-foreground">
            Didn't receive an email?{" "}
            <Button variant="link" className="p-0 h-auto">
              Click here to resend
            </Button>
          </p>
        </div>
      </div>
    </Card>
  );
}