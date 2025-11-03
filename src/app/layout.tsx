import { DM_Sans } from "next/font/google";
import type { Metadata } from "next";

import { RootProvider } from "fumadocs-ui/provider/next";

import "./global.css";

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
    </html>
  );
}
