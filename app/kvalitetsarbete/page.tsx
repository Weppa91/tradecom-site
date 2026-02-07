import PageSplitHero from "../components/PageSplitHero";

export default function Page() {
    return (
        <PageSplitHero
            title="KVALITETSARBETE"
            subtitle="NYCKELN TILL FRAMGÅNG"
            paragraphs={[
                "TradeCom har implementerat ett kvalitetssystem i alla försäljningsled för att kunna hantera dem stora utmaningar som förekommer på en föränderlig marknad. Med denna beprövade modell kan vi säkerställa och tillgodose att både uppdragsgivare och kunder kan känna säkerhet och trygghet med våra gemensamma affärer.",
                "Vi har även satt upp en arbetsgrupp där representanter från företagsledningen, medarbetare och även externa konsulter löpande arbetar med att identifiera företagets styrkor, svagheter, möjligheter och hot enligt en modell vi kallar för SWOT.",
                "Låt oss berätta mer om vad detta innebär för dig som kund eller uppdragsgivare. Modellen har hjälpt oss att på ett mer realistiskt och trovärdigt sätt hitta avvikelser och potential inom det egna företaget. Målsättningen är att förädla avvikelser till åtgärder och handlingsplaner vilket leder till förbättrade rutiner, utveckling av verksamheten och nöjdare kunder."
            ]}
            imageSrc="/images/cards/kvalitetsarbete.jpg"
            imageAlt="Kvalitetsarbete" />
    )

}
