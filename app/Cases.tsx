const logos = ["Varumärke A", "Varumärke B", "Varumärke C", "Varumärke D"];

const caseCards = [
    {
        title: "Checkout & konvertering",
        desc: "Snabbare flöde, tydligare steg och bättre spårning.",
        meta: "Betalning • UX • Analytics",
    },
    {
        title: "PIM + produktdata",
        desc: "Strukturerad data som håller i alla kanaler.",
        meta: "PIM • Flöden • Kvalitet",
    },
    {
        title: "ERP & logistik",
        desc: "Automatiserade flöden mellan order, lager och frakt.",
        meta: "ERP • Lager • Frakt",
    },
];

export default function Cases() {
    return (
        <section id="cases" className="border-t border-white/10">
            <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Några vi jobbat med</h2>
                <p className="mt-2 max-w-xl text-sm text-white/65 md:text-base">
                    Exempel på typ av uppdrag och leveranser vi ofta gör.
                </p>

                <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                        {logos.map((l) => (
                            <div
                                key={l}
                                className="flex items-center justify-center rounded-2xl border border-white/10 bg-black/20 px-4 py-8 text-sm text-white/60"
                            >
                                {l}
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        {caseCards.map((c) => (
                            <div
                                key={c.title}
                                className="rounded-2xl border border-white/10 bg-black/20 p-6 hover:border-white/20 transition"
                            >
                                <h3 className="text-base font-semibold">{c.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/65">{c.desc}</p>
                                <p className="mt-4 text-xs text-white/55">{c.meta}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
