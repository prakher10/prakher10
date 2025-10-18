import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Social from "@/components/Social";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Social />
      <Contact />
    </div>
  );
};

export default Index;
