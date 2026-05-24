export class ValidationError extends Error {
  constructor(
    public message: string,
    public errors?: Record<string, string[]>,
  ) {
    super(message);
    this.name = "ValidationError";
    Error.captureStackTrace(this, this.constructor);
  }
}
