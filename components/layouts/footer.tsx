import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { NAVIGATION, SOCIAL_LINKS } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-violet-900 dark:bg-violet-900/5 dark:backdrop-blur-xl relative">
      {/* Dark mode gradient overlay */}
      <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-background dark:via-violet-400/5 dark:to-transparent opacity-90" />

      <Container>
        <div className="relative z-10 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3 xl:gap-8">
            {/* Logo and Description */}
            <div className="space-y-8">
              <Link href="/" className="inline-block">
                <Logo isTransparent={true} />
              </Link>
              <p className="max-w-xs text-sm text-violet-200 dark:text-white/90">
                Professional cleaning services that bring a sense of wonder to every home.
                Experience the difference with Simply Maid.
              </p>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-violet-200 dark:text-white/80 transition-colors hover:text-white"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-2">
              <div className="space-y-8 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-white">Navigation</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {NAVIGATION.main.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={cn(
                            "text-sm transition-colors",
                            "text-violet-200 hover:text-white",
                            "dark:text-white/80 dark:hover:text-white"
                          )}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Legal</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {NAVIGATION.legal.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={cn(
                            "text-sm transition-colors",
                            "text-violet-200 hover:text-white",
                            "dark:text-white/80 dark:hover:text-white"
                          )}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 border-t border-violet-800 dark:border-white/20 pt-8">
            <p className="text-xs text-violet-200 dark:text-white/80">
              © {new Date().getFullYear()} Simply Maid. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
