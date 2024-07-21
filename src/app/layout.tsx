import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { APP_NAME } from "./constants";
import ThemeProvider from "./_layout/ThemeProvider";
import MainUILayout from "./_layout/MainUILayout";

export const metadata: Metadata = {
  title: `${APP_NAME}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider>
            <MainUILayout>{children}</MainUILayout>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
