import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="absolute top-0 left-0 z-50 w-full bg-transparent pt-10 pb-6">
            <div className="mx-auto max-w-7xl px-2">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo-tradecom-white.png"
                            alt="Tradecom"
                            width={220}
                            height={48}
                            priority
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

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        {/* <Link
                            href="#case"
                            className="hidden sm:inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2 text-xs uppercase tracking-wider text-white/80 hover:border-white hover:text-white transition"
                        >
                            Se case
                        </Link> */}
                        <a
                            href="mailto:info@tradecom.se?subject=Boka%20ett%20möte%20-%20Tradecom"
                            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-wider text-black hover:bg-white/90 transition" // behåll dina klasser
                        >
                            BOKA ETT MÖTE
                        </a>

                    </div>
                </div>
            </div>
            {/* Divider under header */}
            <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none">
                <div className="h-px w-full max-w-[calc(100%-2cm)] bg-[#97C46B] opacity-80" />

            </div>

        </header>
    );
}
