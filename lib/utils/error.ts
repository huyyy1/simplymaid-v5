export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number = 500,
    public metadata?: Record<string, any>
  ) {
    super(message);
    this.name = "AppError";
  }

  static isAppError(error: unknown): error is AppError {
    return error instanceof AppError;
  }
}

export class ValidationError extends AppError {
  constructor(message: string, metadata?: Record<string, any>) {
    super(message, "VALIDATION_ERROR", 400, metadata);
    this.name = "ValidationError";
  }
}

export class AuthenticationError extends AppError {
  constructor(message: string, metadata?: Record<string, any>) {
    super(message, "AUTHENTICATION_ERROR", 401, metadata);
    this.name = "AuthenticationError";
  }
}

export class AuthorizationError extends AppError {
  constructor(message: string, metadata?: Record<string, any>) {
    super(message, "AUTHORIZATION_ERROR", 403, metadata);
    this.name = "AuthorizationError";
  }
}

export class NotFoundError extends AppError {
  constructor(message: string, metadata?: Record<string, any>) {
    super(message, "NOT_FOUND_ERROR", 404, metadata);
    this.name = "NotFoundError";
  }
}

export function handleError(error: unknown): AppError {
  if (AppError.isAppError(error)) {
    return error;
  }

  if (error instanceof Error) {
    return new AppError(error.message, "INTERNAL_SERVER_ERROR");
  }

  return new AppError("An unexpected error occurred", "INTERNAL_SERVER_ERROR");
}
