import { createClient, type SanityClient, type QueryParams } from "next-sanity";
import { apiVersion, dataset, projectId, sanityConfigured } from "./env";

/**
 * Server-side Sanity client.
 *
 * Returns `null` if Sanity is not configured (no project ID set). Every
 * data fetcher checks this and falls back to local content/*.ts files.
 */
export const sanity: SanityClient | null = sanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === "production",
      perspective: "published",
    })
  : null;

/**
 * Runs a GROQ query, returns `null` if Sanity is not configured or the
 * query fails. Callers should fall back to TS content in that case.
 */
export async function safeFetch<T>(
  query: string,
  params?: QueryParams
): Promise<T | null> {
  if (!sanity) return null;
  try {
    return await sanity.fetch<T>(query, params ?? {});
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[sanity.safeFetch] query failed, falling back:", err);
    }
    return null;
  }
}
