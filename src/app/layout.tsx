import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaba Beauty — Tresses & Dreads",
  description: "Spécialiste des tresses africaines, box braids, dreads et coiffures naturelles.",
  keywords: ["tresses africaines", "box braids", "knotless braids", "dreads", "dreadlocks", "cornrows", "coiffure afro"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-background text-cream antialiased">{children}</body>
    </html>
  );
}
