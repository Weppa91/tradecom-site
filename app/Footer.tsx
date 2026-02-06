export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-3">

                    {/* Left: Logo */}
                    <div className="flex justify-center md:justify-start">
                        <img
                            src="/logo-tradecom-white.png"
                            alt="Tradecom"
                            className="h-12 w-auto"
                        />
                    </div>

                    {/* Center: Copyright */}
                    <div className="text-center text-sm text-white/60">
                        © 2026 Tradecom
                    </div>

                    {/* Right: Address */}
                    <div className="text-center md:text-right">
                        <h4 className="mb-3 font-serif text-lg tracking-wide text-[#9BC26B]">
                            ADRESSUPPGIFTER
                        </h4>
                        <p className="text-sm leading-6 text-white/70">
                            TradeCom Scandinavia AB<br />
                            Sockengränd 2<br />
                            120 40 Årsta<br />
                            08 80 80 61<br />
                            <a
                                href="https://www.tradecom.se"
                                className="text-[#9BC26B] hover:underline"
                            >
                                www.tradecom.se
                            </a>
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
}
