import type { Metadata } from "next";
import "./globals.css";
import { AppChrome } from "@/components/layout/app-chrome";

export const metadata: Metadata = {
  title: {
    default: "Sushi Craftsmanship 365 — Master the Craft",
    template: "%s | Sushi Craftsmanship 365",
  },
  description:
    "365 missions to learn Japanese sushi craftsmanship — from fish and knives to Edomae techniques and Omakase. 365 Days. 365 Missions. One Craft.",
  keywords: [
    "sushi",
    "sushi chef training",
    "edomae sushi",
    "omakase",
    "Japanese culinary",
    "sushi craftsmanship",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-washi text-ink">
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}
