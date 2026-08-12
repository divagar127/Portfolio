export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  console.error("Runtime error caught:", error, context);
}
