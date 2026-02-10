export default function Contact() {
    return (
        <section data-theme="light" id="contact" className="border-t border-white/10">
            <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                        <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
                    </div>

                    <div className="relative">
                        <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">Kontakta oss</h2>
                        <p className="mt-3 max-w-xl text-sm text-white/65 md:text-base">
                            Vill du prata e-handel, integrationer eller nästa steg för ditt bolag?
                            Skicka ett mail så återkommer vi snabbt.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <a
                                href="mailto:info@tradecom.se"
                                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90 transition"
                            >
                                info@tradecom.se
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
