"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleReset = () => {
    this.setState({ error: null, errorInfo: null });
  };

  public render() {
    if (this.state.error) {
      return (
        this.props.fallback || (
          <div className="min-h-[400px] flex items-center justify-center p-6">
            <Card className="max-w-md w-full p-6">
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="p-3 rounded-full bg-red-100 dark:bg-red-900/20">
                    <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Something went wrong</h2>
                  <p className="text-muted-foreground">
                    We apologize for the inconvenience. Please try again.
                  </p>
                </div>
                <div className="space-y-4">
                  <Button onClick={this.handleReset} className="w-full">
                    Try again
                  </Button>
                  <Button variant="outline" onClick={this.handleReload} className="w-full">
                    Reload page
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
