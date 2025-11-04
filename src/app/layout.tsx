import { DM_Sans } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";

import { RootProvider } from "fumadocs-ui/provider/next";

import "./global.css";
import { ENV_CONFIG } from "@/constants/env-config";

const primaryFont = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Go Better Auth",
  description:
    "A comprehensive, framework-agnostic authentication and authorization library for Go.",
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={primaryFont.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          theme={{
            enabled: true,
            enableSystem: false,
            defaultTheme: "dark",
            forcedTheme: "dark",
          }}
        >
          {children}
        </RootProvider>
      </body>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id={ENV_CONFIG.umami.websiteId}
      />
    </html>
  );
}
