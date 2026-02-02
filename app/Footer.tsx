// app/Footer.tsx
export default function Footer() {
    return (
        <footer className="mt-20 border-t border-white/10">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
                <p>© {new Date().getFullYear()} Tradecom</p>

                <div className="flex items-center gap-6">
                    <a className="transition hover:text-white" href="#services">
                        Tjänster
                    </a>
                    <a className="transition hover:text-white" href="#cases">
                        Case
                    </a>
                    <a className="transition hover:text-white" href="#contact">
                        Kontakt
                    </a>
                </div>
            </div>
        </footer>
    );
}
