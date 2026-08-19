/**
 * Locale architecture
 * --------------------------------------------------------------------------
 * UI chrome (nav, buttons, labels) is English-only for the MVP.
 * Lesson CONTENT supports Japanese / English / Vietnamese today, and new
 * locales (Chinese, Korean, ...) can be added by extending `Locale` and
 * `SUPPORTED_LOCALES` — every content field is a `LocalizedText` map, so
 * adding a locale never requires a schema migration, only new keys.
 */

export type Locale = "ja" | "en" | "vi";

export const SUPPORTED_LOCALES: readonly Locale[] = ["ja", "en", "vi"];

export const LOCALE_LABEL: Record<Locale, string> = {
  ja: "日本語",
  en: "English",
  vi: "Tiếng Việt",
};

export const DEFAULT_CONTENT_LOCALE: Locale = "en";

/** A piece of lesson content translated into every supported locale. */
export type LocalizedText = Partial<Record<Locale, string>> & {
  en: string;
};

export function localize(text: LocalizedText | undefined, locale: Locale): string {
  if (!text) return "";
  return text[locale] ?? text.en ?? "";
}
