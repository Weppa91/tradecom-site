import PageSplitHero from "../components/PageSplitHero";


export default function Page() {
    return (
        <PageSplitHero
            title="OM TRADECOM"
            paragraphs={[
                "TradeCom är ett av Sveriges främsta direktförsäljningsföretag som verkar inom området eventförsäljning, även kallat 'Field marketing'.",

                "Som fristående säljbolag på svenska marknaden har vi sedan starten 2004 etablerat oss som ett av de mest framgångsrika direktförsäljningsföretagen inom vårt verksamhetsområde, både vad det gäller resultat och kvalitet.",

                "I dag verkar vi inom alla direktförsäljningskanaler, dvs. eventförsäljning, dörrförsäljning och telemarketing. Vi representerar och marknadsför främst våra uppdragsgivares varumärken i försäljningssammanhangen, men har även egna varumärken som vi äger in-house, bl.a. vår egen hälsokostserie – Vitalplus.",

                "TradeCom är verksamt i hela Sverige. Huvudkontoret ligger i Stockholm (Årsta), men vi har även verksamhetsfilialer i Uddevalla, Västerås, Örebro, Kumla, Enköping och Varberg.",

                "Vi har i dag uppdrag som sträcker sig från södra Sverige ända upp till de nordligaste delarna av landet. Beroende på uppdragets karaktär har vi möjlighet att etablera permanenta lokala försäljningsteam eller resande team – något vi har stor erfarenhet av.",
            ]}
            imageSrc="/images/om-tradecom.jpg"
            imageAlt="Om Tradecom"
        />
    );
}
