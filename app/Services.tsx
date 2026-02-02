export default function Services() {
    return (
        <section className="py-24 px-6 border-t border-gray-800">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Våra tjänster</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 border border-gray-800 rounded">
                        <h3 className="font-semibold mb-2">E-handel</h3>
                        <p className="text-sm text-gray-400">
                            Skalbara e-handelslösningar byggda för tillväxt.
                        </p>
                    </div>

                    <div className="p-6 border border-gray-800 rounded">
                        <h3 className="font-semibold mb-2">Integrationer</h3>
                        <p className="text-sm text-gray-400">
                            ERP, PIM, betalningar och logistik – allt hänger ihop.
                        </p>
                    </div>

                    <div className="p-6 border border-gray-800 rounded">
                        <h3 className="font-semibold mb-2">Strategi</h3>
                        <p className="text-sm text-gray-400">
                            Rätt teknik, rätt processer, rätt affärsbeslut.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
