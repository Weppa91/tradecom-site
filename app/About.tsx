export default function About() {
    return (
        <section data-theme="light" className="w-full bg-white text-black">
            {/* Fullbredd-wrapper */}
            <div className="w-full px-6 py-28">
                {/* Asymmetrisk layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16">

                    {/* Vänster: rubrik – långt ut till vänster */}
                    <div className="lg:col-span-5 lg:pl-4 xl:pl-8">
                        <h2 className="font-serif uppercase leading-[0.9] tracking-[0.08em] text-5xl sm:text-6xl lg:text-7xl">
                            SNABBT OM
                            <br />
                            TRADECOM
                        </h2>
                    </div>

                    {/* Höger: brödtext – indragen lite åt höger */}
                    <div className="lg:col-span-6 lg:col-start-7 lg:pr-12 xl:pr-20">
                        <p className="text-base sm:text-lg leading-relaxed text-black/80">
                            I dag verkar vi inom alla direktförsäljningskanaler, dvs.
                            eventförsäljning, dörrförsäljning och telemarketing. Vi representerar och
                            marknadsför främst våra uppdragsgivares varumärken i
                            försäljningssammanhang, men har även egna varumärken som vi äger
                            ”in-house”, bl.a. vår egen hälsokostserie – Vitalplus.{" "}
                            <a
                                href="https://www.vitalplus.se"
                                target="_blank"
                                rel="noreferrer"
                                className="underline underline-offset-4 text-black hover:text-black/70 transition"
                            >
                                www.vitalplus.se
                            </a>
                        </p>
                    </div>
                </div>

                {/* Divider – fortfarande centrerad visuellt */}
                <div className="mt-24 h-px w-full bg-black/20" />
            </div>
        </section>
    );
}
