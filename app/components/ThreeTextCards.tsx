import Image from "next/image";

type Card = {
    title: string;
    text: string;
    imgSrc: string;
    imgAlt: string;
};

const cards: Card[] = [
    {
        title: "AFFÄRSIDÉ",
        text:
            "Att verka inom direktförsäljning med marknadens mest kompetenta personal för att uppnå bästa resultat och kvalitet.",
        imgSrc: "/images/cards/affarside.jpg",
        imgAlt: "Affärsidé",
    },
    {
        title: "SÄLJRESULTAT",
        text:
            "Vid ett normalstort uppdrag förmedlar vi drygt 2 000 nya kunder i månaden till våra uppdragsgivare.",
        imgSrc: "/images/cards/saljresultat.jpg",
        imgAlt: "Säljresultat",
    },
    {
        title: "JOBBA HOS OSS",
        text:
            "Vi är ständigt på jakt efter nya utmaningar och medarbetare. Kontakta oss för ett möte.",
        imgSrc: "/images/cards/jobba-hos-oss.jpg",
        imgAlt: "Jobba hos oss",
    },
];

export default function ThreeTextCards() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-6xl px-6 py-20">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-12">
                    {cards.map((card) => (
                        <div key={card.title} className="text-center">
                            {/* Image */}
                            <div className="relative mx-auto mb-10 aspect-[16/9] w-full max-w-[360px] overflow-hidden rounded-xl bg-neutral-100 shadow-sm">
                                <Image
                                    src={card.imgSrc}
                                    alt={card.imgAlt}
                                    fill
                                    className="object-cover"
                                    sizes="360px"
                                />
                            </div>


                            {/* Text */}
                            <h3 className="mb-4 font-serif text-2xl uppercase tracking-wide text-neutral-900">
                                {card.title}
                            </h3>

                            <p className="mx-auto max-w-[32ch] text-sm leading-relaxed text-neutral-700">
                                {card.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
