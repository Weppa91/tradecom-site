// app/page.tsx
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import ThreeCtaCards from "./components/ThreeCtaCards";
import ThreeTextCards from "./components/ThreeTextCards";



export default function Page() {
  return (
    <>
      <Hero />
      <About />

      {/* Hero premium-blocket */}
      <section className="relative w-full h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        {/* Bakgrundsbild */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.squarespace-cdn.com/content/v1/646dc21ed4e3d64741f92bcb/2fba4abb-1667-4279-be7e-55c45f0875c4/damian-zaleski-RYyr-k3Ysqg-unsplash.jpg")',
          }}
        />
        {/* Mörk overlay */}
        <div className="absolute inset-0 bg-black/70" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.15) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.85) 100%)",
          }}
        />

        {/* Text */}
        <div className="relative z-10 text-center px-6">
          <h2 className="uppercase tracking-wide text-4xl md:text-6xl lg:text-7xl font-semibold">
            <span className="block text-white">Experten på</span>
            <span className="block text-[#97C46B]">Direktförsäljning</span>
          </h2>
        </div>
      </section>

      {/* 3-korts segmentet (ska ligga UTANFÖR hero) */}
      <ThreeCtaCards />
      <ThreeTextCards />
      <Contact />
    </>
  );
}

