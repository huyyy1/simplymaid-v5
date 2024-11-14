type LogLevel = "debug" | "info" | "warn" | "error";

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  metadata?: Record<string, any>;
}

class Logger {
  private static instance: Logger;
  private logBuffer: LogEntry[] = [];
  private readonly bufferSize = 100;

  private constructor() {
    // Initialize logger
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private formatMessage(
    level: LogLevel,
    message: string,
    metadata?: Record<string, any>
  ): LogEntry {
    return {
      timestamp: new Date().toISOString(),
      level,
      message,
      metadata,
    };
  }

  private async persistLogs() {
    if (typeof window === "undefined") {
      // Server-side logging
      console.log(JSON.stringify(this.logBuffer));
    } else {
      // Client-side logging
      try {
        const response = await fetch("/api/logs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.logBuffer),
        });

        if (!response.ok) {
          console.error("Failed to persist logs");
        }
      } catch (error) {
        console.error("Error persisting logs:", error);
      }
    }

    this.logBuffer = [];
  }

  private addToBuffer(entry: LogEntry) {
    this.logBuffer.push(entry);
    if (this.logBuffer.length >= this.bufferSize) {
      this.persistLogs();
    }
  }

  public debug(message: string, metadata?: Record<string, any>) {
    const entry = this.formatMessage("debug", message, metadata);
    this.addToBuffer(entry);
    if (process.env.NODE_ENV === "development") {
      console.debug(message, metadata);
    }
  }

  public info(message: string, metadata?: Record<string, any>) {
    const entry = this.formatMessage("info", message, metadata);
    this.addToBuffer(entry);
    console.info(message, metadata);
  }

  public warn(message: string, metadata?: Record<string, any>) {
    const entry = this.formatMessage("warn", message, metadata);
    this.addToBuffer(entry);
    console.warn(message, metadata);
  }

  public error(message: string, error?: unknown, metadata?: Record<string, any>) {
    const entry = this.formatMessage("error", message, {
      ...metadata,
      error:
        error instanceof Error
          ? {
              name: error.name,
              message: error.message,
              stack: error.stack,
            }
          : error,
    });
    this.addToBuffer(entry);
    console.error(message, error, metadata);

    // Log to Sentry
    if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
      Sentry.captureException(error, {
        extra: {
          message,
          metadata,
        },
      });
    }
  }
}

export const logger = Logger.getInstance();
