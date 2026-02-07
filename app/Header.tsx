"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [theme, setTheme] = useState<"dark" | "light">("dark");
    const [scrolled, setScrolled] = useState(false);

    // 1) Krymp logga vid scroll (som du vill)
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // 2) Byt theme ENDAST när headern ligger över en sektion som har data-header-theme="light"
    useEffect(() => {
        let raf = 0;

        const computeTheme = () => {
            // punkt ungefär i mitten av headern (bra i praktiken)
            const headerProbeY = Math.min(110, Math.max(70, window.innerHeight * 0.12));
            const headerProbeX = Math.round(window.innerWidth * 0.5);

            const el = document.elementFromPoint(headerProbeX, headerProbeY);
            const themedParent = el?.closest?.("[data-header-theme]") as HTMLElement | null;
            const next = (themedParent?.getAttribute("data-header-theme") as "dark" | "light" | null) ?? "dark";

            setTheme(next === "light" ? "light" : "dark");
        };

        const schedule = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(computeTheme);
        };

        // initial + listeners
        computeTheme();
        window.addEventListener("scroll", schedule, { passive: true });
        window.addEventListener("resize", schedule);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("scroll", schedule);
            window.removeEventListener("resize", schedule);
        };
    }, []);

    const isLight = theme === "light";

    // Logga beroende på theme (vit på mörkt, svart på vitt)
    const logoSrc = isLight ? "/logo-tradecom-black.png" : "/logo-tradecom-white.png";

    // Nav + CTA styles
    const navLinkClass = isLight
        ? "text-black/80 hover:text-black transition"
        : "text-white/80 hover:text-white transition";

    // Du ville: på vit bakgrund -> CTA svart med vit text
    // På mörk bakgrund -> CTA vit med svart text (som innan)
    const ctaClass = isLight
        ? "inline-flex items-center justify-center rounded-full bg-black px-5 py-2 text-xs font-semibold tracking-widest text-white"
        : "inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-xs font-semibold tracking-widest text-black";

    // Grön divider ska ligga under headern och fada ut när man scrollar
    const dividerOpacity = scrolled ? "opacity-0" : "opacity-100";

    return (
        <header
            className={[
                "fixed inset-x-0 top-0 z-50",
                "bg-transparent",
                "transition-all duration-300",
                // lite luft högst upp (du ville ha space)
                "pt-5",
            ].join(" ")}
        >
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <Image
                            src={logoSrc}
                            alt="Tradecom"
                            width={scrolled ? 170 : 220}
                            height={scrolled ? 38 : 48}
                            priority
                            className="transition-all duration-300"
                        />
                    </Link>

                    <nav
                        className={`
    hidden md:flex items-center gap-8 text-sm
    transition-opacity duration-300
    ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}
  `}
                    >

                        <Link href="/about" className={navLinkClass}>
                            Om Tradecom
                        </Link>
                        <Link href="/vitalplus" className={navLinkClass}>
                            Om Vitalplus
                        </Link>
                    </nav>

                    <div
                        className={`
    transition-opacity duration-300
    ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}
  `}
                    >
                        <a
                            href="mailto:info@tradecom.se?subject=..."
                            className={ctaClass}
                        >
                            BOKA ETT MÖTE
                        </a>
                    </div>

                </div>
            </div>

            {/* Divider UNDER headern (inte i taket) */}
            <div className={["mt-4 flex justify-center transition-opacity duration-500", dividerOpacity].join(" ")}>
                <div className="h-px w-[calc(100%-2cm)] bg-[#97C46B]" />
            </div>
        </header>
    );
}
