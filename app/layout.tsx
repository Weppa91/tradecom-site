// app/layout.tsx
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

export const metadata = {
  title: "Tradecom",
  description: "E-handel, integrationer och strategi som skalar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" className="h-full">
      <body className="min-h-full bg-[#050505] text-white antialiased">
        <Header />

        <main className="mx-auto max-w-6xl px-6 pt-24">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
