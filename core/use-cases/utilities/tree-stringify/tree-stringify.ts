
/**
 * Check if a value is a record
 *
 */
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

/**
 * Stringify an object with circular references
 *
 */
export function treeStringify(value: unknown): string {
  const cache = new Set<Record<string, unknown>>();

  return JSON.stringify(value, (_, value) => {
    if (isRecord(value) && cache.has(value)) {
      // Remove circular reference
      return;
    }

    if (isRecord(value)) {
      cache.add(value);
    }

    return value;
  });
}

