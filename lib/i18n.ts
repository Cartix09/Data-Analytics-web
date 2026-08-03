import { cookies } from "next/headers";
import { en, type Dictionary } from "@/content/i18n/en";
import { az } from "@/content/i18n/az";

export type Locale = "en" | "az";

export const LOCALES: Locale[] = ["en", "az"];
export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE = "anlytics_locale";

const dictionaries: Record<Locale, Dictionary> = { en, az };

export function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "az";
}

/**
 * Reads the visitor's preferred locale from the `anlytics_locale` cookie.
 * Use in server components. Falls back to `en`.
 */
export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const value = store.get(LOCALE_COOKIE)?.value;
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

/**
 * Returns the strongly-typed dictionary for a given locale.
 * Safe to use in both server and client components - the value is a plain
 * object that can be passed across the boundary.
 */
export function getDict(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}
