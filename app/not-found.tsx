import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <Container className="flex min-h-[calc(100vh-5rem)] items-center justify-center">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="p-3 rounded-full bg-primary/10">
            <FileQuestion className="w-6 h-6 text-primary" />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">404</h1>
          <h2 className="text-2xl font-semibold">Page Not Found</h2>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="space-y-4">
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}