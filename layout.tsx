import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Klipr — Paste any social link. Get what you need.",
  description: "Download public social videos, audio, thumbnails, images and create short GIFs from one simple link.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
