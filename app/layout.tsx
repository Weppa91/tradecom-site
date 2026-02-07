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
  metadataBase: new URL("http://localhost:3000"),
  title: "Tradecom",
  description: "Field marketing sedan 2004",
  openGraph: {
    title: "Tradecom",
    description: "Field marketing sedan 2004",
    url: "https://tradecom.se",
    siteName: "Tradecom",
    images: [
      {
        url: "/og/og-tradecom.jpg",
        width: 1200,
        height: 630,
        alt: "Tradecom – Field marketing sedan 2004",
      },
    ],
    locale: "sv_SE",
    type: "website",
  },
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

        <Footer />
      </body>

    </html>
  );
}
