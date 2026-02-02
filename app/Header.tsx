export default function Header() {
    return (
        <header className="w-full p-6 flex justify-between items-center border-b border-gray-800">
            <span className="font-semibold text-lg">Tradecom</span>
            <nav className="flex gap-6 text-sm">
                <a href="#">Om oss</a>
                <a href="#">Tjänster</a>
                <a href="#contact">Kontakt</a>
            </nav>
        </header>
    );
}