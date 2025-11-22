import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SidePanel from "@/components/Layout/SidePanel";
import Header from "@/components/Layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bank Dash",
  description: "",
  icons: {
    icon: [
      { url: "/logo.png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen">
          <SidePanel />
          <div className="flex flex-1 flex-col overflow-hidden">
            <Header />
            <main className="flex-1 p-6  overflow-y-auto bg-light-gray">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
