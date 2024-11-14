import { Metadata } from "next";
import { ResetPasswordForm } from "@/components/auth/reset-password-form";

export const metadata: Metadata = {
  title: "Reset Password - Simply Maid",
  description: "Reset your Simply Maid account password.",
};

export default function ResetPasswordPage() {
  return <ResetPasswordForm />;
}