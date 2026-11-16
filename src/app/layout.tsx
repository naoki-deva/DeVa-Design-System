import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DeVa Design System",
  description: "Technical Specification and Documentation for DeVa Design System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
