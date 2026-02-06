type PageSplitHeroProps = {
    title: string;
    // Ex: "KVALITETS" + "ARBETE" (där sista ordet blir grönt)
    titleAccent?: { prefix: string; accent: string };
    subtitle?: string;
    paragraphs: string[];
    bullets?: string[];
    imageSrc: string;
    imageAlt: string;
};

export default function PageSplitHero({
    title,
    titleAccent,
    subtitle,
    paragraphs,
    bullets,
    imageSrc,
    imageAlt,
}: PageSplitHeroProps) {
    return (
        <section className="min-h-[70vh] bg-[#2b3336] text-white pt-28 md:pt-36">
            <div className="mx-auto max-w-6xl px-6 py-20">
                <div className="grid items-center gap-14 md:grid-cols-2">
                    {/* Image */}
                    <div className="flex justify-center md:justify-start">
                        <div className="overflow-hidden rounded-2xl bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                className="w-full h-auto max-h-[360px] object-contain p-6"
                            />
                        </div>

                    </div>

                    {/* Text */}
                    <div className="max-w-xl">
                        <h1 className="font-serif text-5xl tracking-wide md:text-6xl">
                            <span className="text-white">OM </span>
                            <span className="text-[#9BCB68]">
                                {title.replace(/^OM\s+/i, "")}
                            </span>
                        </h1>


                        {subtitle ? (
                            <p className="mt-6 text-sm font-semibold tracking-widest text-white/80">
                                {subtitle}
                            </p>
                        ) : null}

                        {bullets?.length ? (
                            <div className="mt-8 text-sm text-white/85">
                                <p className="mb-3">TradeCom verkar inom följande försäljningskanaler:</p>
                                <ul className="list-disc space-y-2 pl-5">
                                    {bullets.map((b) => (
                                        <li key={b}>{b}</li>
                                    ))}
                                </ul>
                            </div>
                        ) : null}

                        <div className="mt-8 space-y-5 text-sm leading-6 text-white/75">
                            {paragraphs.map((p) => (
                                <p key={p}>{p}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
