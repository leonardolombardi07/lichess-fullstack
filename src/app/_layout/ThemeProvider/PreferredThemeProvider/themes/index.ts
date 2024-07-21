import { PreferredTheme } from "../constants";
import { ATHELAS_THEME, DARK_ATHELAS_THEME } from "./athelas";

export const THEMES: {
  [key in PreferredTheme["name"]]: {
    [key in PreferredTheme["mode"]]: typeof ATHELAS_THEME;
  };
} = {
  athelas: {
    light: ATHELAS_THEME,
    dark: DARK_ATHELAS_THEME,
  },
} as const;

export type { PreferredTheme };
