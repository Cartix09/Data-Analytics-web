/**
 * Sanity environment configuration.
 *
 * Read from `process.env.NEXT_PUBLIC_SANITY_PROJECT_ID` and
 * `NEXT_PUBLIC_SANITY_DATASET`. See README → "Sanity CMS setup" for how
 * to create a Sanity project and fill these in.
 *
 * When unset, the Studio still mounts (showing an empty project) and
 * every page falls back cleanly to the TypeScript content in
 * `content/*.ts`.
 */
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-12-01";

/** True only when a Sanity project ID is configured. */
export const sanityConfigured: boolean = projectId.length > 0;

export const studioBasePath = "/studio";
