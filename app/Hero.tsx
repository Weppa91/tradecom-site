// app/Hero.tsx
export default function Hero() {
    return (
        <section className="relative pb-16 pt-14">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-24 left-1/2 h-72 w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute top-40 left-24 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
                <div className="absolute top-40 right-24 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
            </div>

            <div className="max-w-3xl">
                <p className="text-sm text-white/60">E-handel • Integrationer • Strategi</p>

                <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
                    Bygg en modern e-handel som känns premium — och skalar.
                </h1>

                <p className="mt-5 text-base text-white/70 md:text-lg">
                    Vi kombinerar produktfokus med robust teknik, tydlig UX och spårbar data.
                    Snabbt att lansera. Lätt att vidareutveckla.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
                    >
                        Boka intro
                    </a>

                    <a
                        href="#services"
                        className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/85 transition hover:border-white/25 hover:text-white"
                    >
                        Se hur vi jobbar
                    </a>
                </div>
            </div>
        </section>
    );
}
