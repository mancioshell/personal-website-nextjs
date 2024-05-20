import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alessandro Mancini",
  description: "Personal website of Alessandro Mancini",
};

const className = `flex justify-center bg-gray-50 dark:bg-gray-900 overflow-x-hidden xl:left-7 xl:relative`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${className}`}>{children}</body>
    </html>
  );
}
