// app/page.tsx
import Hero from "./Hero";
import Services from "./Services";
import Cases from "./Cases";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Cases />
      <Contact />
    </>
  );
}
