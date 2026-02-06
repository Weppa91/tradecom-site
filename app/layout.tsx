// app/layout.tsx
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import type { Metadata } from "next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-recoleta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tradecom",
  description: "E-handel, integrationer och strategi som skalar.",
  icons: {
    icon: "/favicon-tradecom.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" className={playfair.variable}>
      <body className="min-h-full bg-[#050505] text-white antialiased overflow-x-hidden">
        <Header />
        <main className="w-full">{children}</main>

        {/* Global divider – alltid samma */}
        <div className="h-[2px] w-full bg-[#9BC26B]" />

        <Footer />
      </body>

    </html>
  );
}
