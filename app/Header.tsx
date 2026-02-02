// app/Header.tsx
export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <a href="#" className="text-sm font-semibold tracking-wide">
                    Tradecom
                </a>

                <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
                    <a className="transition hover:text-white" href="#services">
                        Tjänster
                    </a>
                    <a className="transition hover:text-white" href="#cases">
                        Case
                    </a>
                    <a className="transition hover:text-white" href="#contact">
                        Kontakt
                    </a>
                </nav>

                <div className="flex items-center gap-3">
                    <a
                        href="#cases"
                        className="hidden rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-white/25 hover:text-white md:inline-flex"
                    >
                        Se case
                    </a>

                    <a
                        href="#contact"
                        className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
                    >
                        Boka intro
                    </a>
                </div>
            </div>
        </header>
    );
}
