import { ThemeOptions } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

function createResponsiveThemes(options: ThemeOptions, locale?: any) {
  const theme = responsiveFontSizes(createTheme(options, locale));
  return {
    light: theme,
    dark: createDarkTheme(options, locale),
  };
}

function createDarkTheme(options: ThemeOptions, locale?: any) {
  return responsiveFontSizes(
    createTheme(
      {
        ...options,
        palette: {
          ...options.palette,
          mode: "dark",
        },
      },
      options.components || {}
    )
  );
}

export { createResponsiveThemes };
