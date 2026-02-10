"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const LOGO_WHITE = "/logo-tradecom-white.png";
const LOGO_BLACK = "/logo-tradecom-black.png";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("dark");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Scroll-logik
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);

            const sections = document.querySelectorAll<HTMLElement>("[data-header-theme]");
            let activeTheme: "light" | "dark" = "dark";

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 80 && rect.bottom >= 80) {
                    const sectionTheme = section.dataset.headerTheme as "light" | "dark";
                    if (sectionTheme) activeTheme = sectionTheme;
                }
            });

            setTheme(activeTheme);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Stäng mobilmeny vid desktop
    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setMobileMenuOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const logoSrc = theme === "light" ? LOGO_BLACK : LOGO_WHITE;
    const textColor = theme === "light" ? "text-black" : "text-white";

    return (
        <header className={`fixed inset-x-0 top-0 z-50 bg-transparent ${textColor}`}>
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex h-20 items-center justify-between">
                    {/* LOGGA */}
                    <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                        <Image src={logoSrc} alt="Tradecom" width={160} height={44} priority />
                    </Link>

                    {/* DESKTOP NAV (försvinner vid scroll) */}
                    <nav
                        className={`hidden md:flex items-center gap-10 transition-all duration-300 ${isScrolled ? "opacity-0 pointer-events-none -translate-y-1" : ""
                            }`}
                    >
                        <Link href="/about" className="text-sm tracking-wide hover:opacity-80">
                            Om Tradecom
                        </Link>
                        <Link href="/vitalplus" className="text-sm tracking-wide hover:opacity-80">
                            Om Vitalplus
                        </Link>
                    </nav>

                    <div className="flex items-center gap-3">
                        {/* MOBIL HAMBURGER */}
                        <button
                            className="md:hidden inline-flex items-center justify-center p-2"
                            onClick={() => setMobileMenuOpen((v) => !v)}
                        >
                            <div className="flex flex-col gap-[6px]">
                                <span className="block h-[2px] w-7 rounded-full bg-current" />
                                <span className="block h-[2px] w-7 rounded-full bg-current" />
                                <span className="block h-[2px] w-7 rounded-full bg-current" />
                            </div>
                        </button>

                        {/* DESKTOP CTA (försvinner vid scroll) */}
                        <div
                            className={`hidden md:block transition-all duration-300 ${isScrolled ? "opacity-0 pointer-events-none -translate-y-1" : ""
                                }`}
                        >
                            <a
                                href="mailto:info@tradecom.se?subject=Bokningsförfrågan Tradecom"
                                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
                            >
                                BOKA ETT MÖTE
                            </a>
                        </div>
                    </div>
                </div>

                {/* GRÖN LINJE (försvinner vid scroll) */}
                {!isScrolled && <div className="h-px w-full bg-[#97B86A]/70" />}
            </div>

            {/* MOBILMENY */}
            {mobileMenuOpen && (
                <div className="md:hidden">
                    <button
                        className="fixed inset-0 bg-black/40"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    <div className="fixed left-0 right-0 top-20 px-6">
                        <div className="rounded-2xl bg-white p-4 text-black shadow-lg">
                            <Link href="/about" className="block py-3" onClick={() => setMobileMenuOpen(false)}>
                                Om Tradecom
                            </Link>
                            <div className="h-px bg-black/10" />
                            <Link href="/vitalplus" className="block py-3" onClick={() => setMobileMenuOpen(false)}>
                                Om Vitalplus
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
