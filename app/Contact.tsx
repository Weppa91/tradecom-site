export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 bg-black text-white">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-6">
                    Kontakta oss
                </h2>
                <p className="text-gray-400 mb-8">
                    Vill du prata e-handel, integrationer eller nästa steg för ditt bolag?
                </p>

                <a
                    href="mailto:hello@tradecom.se"
                    className="inline-block px-6 py-3 bg-white text-black rounded font-medium"
                >
                    hello@tradecom.se
                </a>
            </div>
        </section>
    );
}
