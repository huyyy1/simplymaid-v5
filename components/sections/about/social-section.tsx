import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
    description: "Check out our open source projects and contributions.",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: Twitter,
    description: "Follow us for the latest updates and tech insights.",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
    description: "Connect with our team and join our growing network.",
  },
  {
    name: "Email",
    href: "mailto:contact@example.com",
    icon: Mail,
    description: "Reach out to us for collaborations and opportunities.",
  },
];

export function AboutSocialSection() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter">Connect With Us</h2>
        <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground">
          Join our community and stay updated with the latest developments.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {socialLinks.map((link) => (
          <Link key={link.name} href={link.href}>
            <Card className="h-full p-6 transition-colors hover:bg-muted/50">
              <div className="space-y-2">
                <link.icon className="h-6 w-6" />
                <h3 className="font-semibold">{link.name}</h3>
                <p className="text-sm text-muted-foreground">{link.description}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
