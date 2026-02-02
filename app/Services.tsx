const items = [
    {
        title: "E-handel",
        desc: "Skalbara e-handelslösningar byggda för tillväxt.",
    },
    {
        title: "Integrationer",
        desc: "ERP, PIM, betalningar och logistik — allt hänger ihop.",
    },
    {
        title: "Strategi",
        desc: "Rätt teknik, rätt processer, rätt affärsbeslut.",
    },
];

export default function Services() {
    return (
        <section id="services" className="border-t border-white/10">
            <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
                <div className="flex items-end justify-between gap-6">
                    <div>
                        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Våra tjänster</h2>
                        <p className="mt-2 max-w-xl text-sm text-white/65 md:text-base">
                            Vi kombinerar produktfokus med teknik som håller i längden.
                        </p>
                    </div>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {items.map((it, idx) => (
                        <div
                            key={it.title}
                            className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
                        >
                            <p className="text-xs text-white/60">0{idx + 1}</p>
                            <h3 className="mt-3 text-lg font-semibold">{it.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-white/65">{it.desc}</p>

                            <div className="mt-6 h-px w-full bg-gradient-to-r from-white/0 via-white/15 to-white/0" />

                            <ul className="mt-5 space-y-2 text-sm text-white/70">
                                <li>• Design & UX som konverterar</li>
                                <li>• Robust dataflöde och spårbarhet</li>
                                <li>• Prestanda, SEO och stabil drift</li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
