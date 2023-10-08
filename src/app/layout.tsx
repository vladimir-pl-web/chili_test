import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import TanstackProvider from "src/providers/tanstak";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chili Test",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
