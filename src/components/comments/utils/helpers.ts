import { formatDistanceToNow } from "date-fns";

/**
 * Converts a timestamp to a "time ago" format (e.g., "2 days ago").
 * @param date - The date or timestamp to convert.
 * @returns A human-readable string like "5 minutes ago".
 */
export function timeAgo(date: Date | string | number): string {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function parseError(e: Error) {
  try {
    const parsed = JSON.parse(e?.message);
    console.log(parsed);
    if (!parsed?.message) throw new Error();
    return { success: false, message: parsed.message };
  } catch {
    return { success: false, message: "Something went wrong" };
  }
}
