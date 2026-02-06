import PageSplitHero from "../components/PageSplitHero";

export default function Page() {
    return (
        <PageSplitHero
            title="UPPDRAG"
            paragraphs={[
                "TradeCom företräder några av Sveriges största företag inom telekom, el och bank. Produkter och kampanjer formas av våra uppdragsgivare men presenteras av vår personal på det sätt som uppdragsgivaren föredrar. Vid ett normalstort uppdrag förmedlar vi drygt 2 000 nya kunder i månaden till våra uppdragsgivare vilket genererar ca 24 000 nya kunder per år.",
                "Vår modell har även framgångsrikt hjälpt utländska aktörer att slå sig in på den svenska marknaden. Exempel på sådana samarbeten är bl.a det tyska elbolaget Yello stroms intåg i Sverige, samt vårt samarbete med en av världens största bankkoncerner, Citibank. År 2008 mottog TradeCom priset som Citibanks främsta säljpartner i Sverige, alla säljkanaler inräknade.",
            ]}
            imageSrc="/images/cards/uppdrag.jpg"
            imageAlt="Uppdrag"
        />
    );
}
