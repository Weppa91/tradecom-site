"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isLight, setIsLight] = useState(false);

    // 1) Scroll: bara för “shrink + linje fade”
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // 2) “Light mode” triggas ENDAST när headern överlappar en sektion som är markerad som light
    useEffect(() => {
        const targets = Array.from(
            document.querySelectorAll<HTMLElement>('[data-header-theme="light"]')
        );

        if (!targets.length) return;

        const obs = new IntersectionObserver(
            (entries) => {
                // om någon light-sektion ligger under headerns yta -> light
                const anyLight = entries.some((e) => e.isIntersecting);
                setIsLight(anyLight);
            },
            {
                // Roten är viewporten. RootMargin gör att vi “känner av” precis under headern.
                root: null,
                rootMargin: "-90px 0px -85% 0px",
                threshold: 0.01,
            }
        );

        targets.forEach((t) => obs.observe(t));
        return () => obs.disconnect();
    }, []);

    const logoSrc = isLight ? "/logo-tradecom-black.png" : "/logo-tradecom-white.png";

    const navLinkClass = isLight
        ? "text-black/70 hover:text-black transition"
        : "text-white/80 hover:text-white transition";

    // CTA: på mörk bakgrund = vit knapp med svart text. På vit bakgrund = svart knapp med vit text.
    const ctaClass = isLight
        ? "inline-flex items-center justify-center rounded-full bg-black px-5 py-2 text-xs font-semibold tracking-widest text-white"
        : "inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-xs font-semibold tracking-widest text-black";

    return (
        <header
            className={[
                "fixed top-0 left-0 z-50 w-full",
                "transition-all duration-300",
                // INGEN vit bakgrund vid scroll – bara när isLight är true
                isLight ? "bg-white/95 shadow-sm" : "bg-transparent",
            ].join(" ")}
        >
            {/* Luft högst upp (du ville ha “space” i taket) */}
            <div className="pt-4">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
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

                        {/* Nav */}
                        <nav className="hidden md:flex items-center gap-8 text-sm">
                            <Link href="/about" className={navLinkClass}>
                                Om Tradecom
                            </Link>
                            <Link href="/vitalplus" className={navLinkClass}>
                                Om Vitalplus
                            </Link>
                        </nav>

                        {/* CTA */}
                        <a
                            href="mailto:info@tradecom.se?subject=Boka%20ett%20m%C3%B6te%20%E2%80%93%20Tradecom"
                            className={ctaClass}
                        >
                            BOKA ETT MÖTE
                        </a>
                    </div>

                    {/* Grön divider under headern (tunn, inte hela vägen ut, fade vid scroll) */}
                    <div
                        className={[
                            "mx-auto mt-4 h-px w-full max-w-[calc(100%-2cm)] bg-[#97C46B]",
                            "transition-opacity duration-300",
                            scrolled ? "opacity-0" : "opacity-100",
                        ].join(" ")}
                    />
                </div>
            </div>
        </header>
    );
}
