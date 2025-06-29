// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import About from "./about";
import Faq from "./faq";
import Contact from "./contact";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-0 min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100">
        <section className="w-full">
          <Hero />
        </section>
        <section className="w-full px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 py-8 md:py-16">
          <About />
        </section>
        <section id="contact" className="scroll-mt-20 w-full px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 py-8 md:py-16">
          <Contact />
        </section>
        <section className="w-full px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 py-8 md:py-16">
          <Faq />
        </section>
      </main>
      <Footer />
    </>
  );
}
