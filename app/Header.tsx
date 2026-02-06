"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="
  fixed top-0 left-0 z-50 w-full
  bg-transparent
  transition-all duration-300
">
            <div className="absolute top-[88px] left-1/2 -translate-x-1/2 w-[calc(100%-2cm)] h-px bg-[#97C46B]/80" />



            <div className="mx-auto max-w-7xl px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo-tradecom-white.png"
                            alt="Tradecom"
                            width={scrolled ? 170 : 220}
                            height={scrolled ? 38 : 48}
                            priority
                            className="transition-all duration-300"
                        />
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-8 text-sm">
                        <Link href="/about" className="text-white/80 hover:text-white transition">
                            Om Tradecom
                        </Link>
                        <Link href="/vitalplus" className="text-white/80 hover:text-white transition">
                            Om Vitalplus
                        </Link>
                    </nav>

                    {/* CTA */}
                    <div className="flex items-center gap-4">
                        <a
                            href="mailto:info@tradecom.se?subject=Boka%20ett%20m%C3%B6te%20%E2%80%93%20Tradecom"
                            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-xs font-semibold text-black hover:bg-white/90 transition"
                        >
                            BOKA ETT MÖTE
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
