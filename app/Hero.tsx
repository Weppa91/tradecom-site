export default function Hero() {
    const bgImage =
        "https://images.squarespace-cdn.com/content/v1/646dc21ed4e3d64741f92bcb/c14750df-5fb2-4c1e-990d-58bddb63d85c/carlos-muza-hpjSkU2UYSU-unsplash.jpg";

    return (
        // FULL-BLEED WRAPPER: bryter ut ur ev. max-w container i layout/page

        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-x-clip">
            <section data-header-theme="dark" className="relative min-h-[90vh] pt-[clamp(72px,8vh,96px)]">
                {/* Background image – fill viewport */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${bgImage})` }}
                    aria-hidden="true"
                />

                {/* Make image darker (even overlay) */}
                <div className="absolute inset-0 bg-black/75" aria-hidden="true" />

                {/* Optional: a tiny extra contrast without side darkening */}
                <div
                    className="absolute inset-0"
                    aria-hidden="true"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.55) 100%)",
                    }}
                />

                {/* Content */}
                <div className="relative flex h-full w-full justify-center">
                    <div className="w-full max-w-6xl px-6 pt-24 sm:pt-28 lg:pt-50 text-center">
                        {/* Headline */}
                        <h1 className="font-serif uppercase tracking-[0.12em] text-white [text-wrap:balance]">
                            <span className="block text-2xl sm:text-3xl lg:text-[60px] xl:text-[76px] leading-[0.9]">
                                FIELD{" "}
                                <span className="text-[#97C46B] drop-shadow-[0_2px_0_rgba(0,0,0,0.35)]">
                                    MARKETING
                                </span>
                            </span>

                            <span className="mt-2 block text-5xl sm:text-6xl lg:text-[60px] xl:text-[76px] leading-[0.79">
                                SEDAN{" "}
                                <span className="text-[#97C46B] drop-shadow-[0_2px_0_rgba(0,0,0,0.35)]">
                                    2004
                                </span>
                            </span>
                        </h1>

                        {/* Divider */}
                        <div className="mx-auto mt-10 h-px w-full max-w-xl bg-white/35" />

                        {/* Body */}
                        <p className="mx-auto mt-8 max-w-3xl text-base sm:text-lg leading-relaxed text-white/85">
                            TradeCom arbetar med en försäljningsform som kallas för direktförsäljning,
                            även kallad fieldmarketing eller eventförsäljning. Vi söker helt enkelt upp
                            kunderna där de finns – på offentliga platser eller i hemmet. Sedan 2004 har
                            vi arbetat med att vässa våra kunskaper och färdigheter inom detta område –
                            något som gjort oss till ett av de främsta fieldmarketing-företagen i Sverige.
                        </p>

                        {/* CTA */}
                        <div className="mt-12 flex justify-center">
                            <a
                                href="#boka-mote"
                                className="inline-flex items-center justify-center rounded-xl bg-[#97C46B]
                           px-8 py-4
                           text-sm font-semibold uppercase tracking-[0.14em]
                           text-black
                           shadow-lg shadow-black/25
                           transition hover:brightness-95
                           focus:outline-none focus:ring-2 focus:ring-[#97C46B]/60"
                            >
                                Boka ett möte
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
