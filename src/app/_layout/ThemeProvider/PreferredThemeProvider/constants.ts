export const THEME_NAMES = ["athelas"] as const;
export const THEME_MODES = ["light", "dark"] as const;

type ThemeName = (typeof THEME_NAMES)[number];
type ThemeMode = (typeof THEME_MODES)[number];

export interface PreferredTheme {
  name: ThemeName;
  mode: ThemeMode;
}
