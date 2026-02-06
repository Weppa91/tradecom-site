// app/components/ThreeCtaCards.tsx
import Image from "next/image";
import Link from "next/link";

type Card = {
    title: string;
    href: string;
    imgSrc: string;
    imgAlt: string;
};

const cards: Card[] = [
    {
        title: "TJÄNSTER",
        href: "/tjanster",
        imgSrc: "/images/cards/tjanster.jpg",
        imgAlt: "Tjänster",
    },
    {
        title: "UPPDRAG",
        href: "/uppdrag",
        imgSrc: "/images/cards/uppdrag.jpg",
        imgAlt: "Uppdrag",
    },
    {
        title: "KVALITETSARBETE",
        href: "/kvalitetsarbete",
        imgSrc: "/images/cards/kvalitetsarbete.jpg",
        imgAlt: "Kvalitetsarbete",
    },
];

export default function ThreeCtaCards() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-6xl px-6 py-16">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
                    {cards.map((card) => (
                        <div key={card.title} className="flex flex-col items-center">
                            {/* Image card */}
                            <div className="relative mx-auto aspect-[16/9] w-full max-w-[360px] overflow-hidden rounded-xl bg-neutral-100 shadow-sm">
                                <Image
                                    src={card.imgSrc}
                                    alt={card.imgAlt}
                                    fill
                                    className="object-cover"
                                    sizes="360px"
                                />
                            </div>

                            {/* CTA */}
                            <Link
                                href={card.href}
                                className="mt-8 inline-flex h-12 w-[260px] items-center justify-center rounded-lg bg-[#97C46B] px-6 text-xs font-semibold uppercase tracking-[0.18em] text-black shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#97C46B]/50"
                            >
                                {card.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
