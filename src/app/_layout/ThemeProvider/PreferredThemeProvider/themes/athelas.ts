"use client";

import { Lato, Open_Sans, Manrope, Roboto, Nunito } from "next/font/google";
import { enUS } from "@mui/material/locale";
import { createTheme, responsiveFontSizes, ThemeOptions } from "@mui/material";

const latoFont = Lato({
  weight: ["400"],
  subsets: ["latin"],
  style: "normal",
});

const openSansFont = Open_Sans({
  weight: ["400"],
  subsets: ["latin"],
  style: "normal",
});

const nunitoFont = Nunito({
  weight: ["400"],
  subsets: ["latin"],
  style: "normal",
});

const manropeFont = Manrope({
  weight: ["400"],
  subsets: ["latin"],
  style: "normal",
});

const robotoFont = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  style: "normal",
});

const SHARED_THEME_OPTIONS: ThemeOptions = {
  typography: {
    fontFamily: [
      latoFont.style.fontFamily,
      openSansFont.style.fontFamily,
      nunitoFont.style.fontFamily,
      manropeFont.style.fontFamily,
      robotoFont.style.fontFamily,
    ].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
};

const ATHELAS_THEME = responsiveFontSizes(
  createTheme(
    {
      ...SHARED_THEME_OPTIONS,
      palette: {
        mode: "light",
        primary: {
          main: "#FC5378",
        },
        secondary: {
          main: "#4d65ff",
        },
        background: {
          default: "#ffffff",
          paper: "#f5f5f5",
        },
        text: {
          primary: "#161616",
          secondary: "#757575",
        },
      },
    },

    enUS
  )
);

const DARK_ATHELAS_THEME = responsiveFontSizes(
  createTheme(
    {
      ...SHARED_THEME_OPTIONS,
      palette: {
        mode: "dark",
        primary: {
          main: "#FC5378",
        },
        secondary: {
          main: "#4d65ff",
        },

        // background: {
        //   default: "#161616",
        //   paper: "#1f1f1f",
        // },

        // text: {
        //   primary: "#ffffff",
        //   secondary: "#757575",
        // },
      },
    },

    enUS
  )
);

export { ATHELAS_THEME, DARK_ATHELAS_THEME };
