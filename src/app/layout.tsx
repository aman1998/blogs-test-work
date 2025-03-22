import "@/src/shared/styles/globals.css";
import { Metadata, Viewport } from "next";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import Navbar from "../widgets/layouts/Navbar";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";
import Footer from "@/src/widgets/layouts/Footer";

export const metadata: Metadata = {
  title: "Amangeldi",
  description: "Beautiful Amangeldi posts.",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={fontSans.variable}>
        <NuqsAdapter>
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <div className="relative flex flex-col h-screen">
              <Navbar />
              <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </Providers>
        </NuqsAdapter>
      </body>
    </html>
  );
}
