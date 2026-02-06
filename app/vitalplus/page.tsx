import PageSplitHero from "../components/PageSplitHero";

export default function Page() {
    return (
        <PageSplitHero
            title="OM VITALPLUS"
            paragraphs={[
                "Vitalplus är en del av TradeCom Scandinavia AB.",

                "Vitalplus är ett varumärke och en del av TradeCom Scandinavia AB som är verksamt i hela Sverige. Huvudkontoret ligger i Stockholm men vi har även verksamhetsfilialer i Uddevalla, Västerås, Örebro, Kumla, Enköping och Varberg.",

                "Företaget grundades 2004 och 2009 lanserades Vitalplus med visionen att verka för bättre hälsa och välmående i Sverige.",

                "Har du frågor om Vitalplus? Besök gärna vår hemsida eller kontakta vår kundservice:",
                "Telefon: 010-138 55 00",
                "E-post: kundservice@vitalplus.se",
            ]}
            imageSrc="/images/om-vitalplus.jpg"
            imageAlt="Om Vitalplus"
        />
    );
}
