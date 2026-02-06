import PageSplitHero from "../components/PageSplitHero";

export default function Page() {
    return (
        <PageSplitHero
            title="TJÄNSTER"
            paragraphs={[
                "Vid ett normalstort uppdrag förmedlar vi drygt 2 000 nya kunder i månaden till våra uppdragsgivare.",
            ]}
            bullets={["Eventförsäljning", "Dörrförsäljning", "Telemarketing"]}
            imageSrc="/images/cards/tjanster.jpg"
            imageAlt="Tjänster"
        />
    );
}
