import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-ken-burns"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.1)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
      
      {/* Smoke/Dust Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-foreground/5 smoke-effect"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-foreground drop-shadow-2xl tracking-wide">
          THE FRONTIER
          <span className="block text-accent mt-2">PORTFOLIO</span>
        </h1>
        <p className="font-playfair text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Where Code Meets the Wild West
        </p>
        <Button 
          onClick={scrollToAbout}
          size="lg"
          className="font-cinzel text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:shadow-gold transition-all duration-300 hover:scale-105"
        >
          START YOUR JOURNEY
        </Button>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float cursor-pointer group"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 text-accent group-hover:text-accent/80 transition-colors" />
      </button>
    </section>
  );
};

export default Hero;
