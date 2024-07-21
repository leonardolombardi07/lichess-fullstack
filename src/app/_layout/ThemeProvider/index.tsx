"use client";

import * as React from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import PreferredThemeProvider, {
  usePreferredTheme,
  THEMES,
  PreferredTheme,
} from "./PreferredThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";

function WithPreferredTheme({ children }: { children: React.ReactNode }) {
  const { theme: preferredTheme } = usePreferredTheme();

  const theme = React.useMemo(() => {
    const name = preferredTheme.name;
    const mode = preferredTheme.mode;

    if (mode === "dark") {
      return THEMES[name]["dark"];
    }
    return THEMES[name]["light"];
  }, [preferredTheme.name, preferredTheme.mode]);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PreferredThemeProvider>
      <WithPreferredTheme>{children}</WithPreferredTheme>
    </PreferredThemeProvider>
  );
}

export { usePreferredTheme, THEMES };
export type { PreferredTheme };
