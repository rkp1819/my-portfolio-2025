import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
