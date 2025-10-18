import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import parchmentBg from "@/assets/parchment.jpg";

const About = () => {
  const handleDownload = async () => {
    try {
      // First try to fetch the file to ensure it exists
      const response = await fetch("/resume.pdf");
      if (!response.ok) {
        throw new Error("Resume file not found");
      }
      
      // Create download link
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Download failed. The resume will open in a new tab instead.");
      window.open("/resume.pdf", "_blank");
    }
  };

  const handleView = () => {
    // Try multiple methods to ensure PDF opens
    const resumeUrl = "/resume.pdf";
    
    // Method 1: Try window.open
    const newWindow = window.open(resumeUrl, "_blank");
    
    // Method 2: If popup blocked, create a link
    if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section id="about" className="min-h-screen py-20 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="font-cinzel text-4xl md:text-6xl font-bold text-center mb-12 text-foreground animate-fade-in-up">
          ABOUT THE <span className="text-accent">OUTLAW</span>
        </h2>

        <div 
          className="relative p-8 md:p-12 rounded-lg shadow-deep animate-scale-in"
          style={{
            backgroundImage: `url(${parchmentBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Worn edges effect */}
          <div className="absolute inset-0 rounded-lg shadow-inner pointer-events-none" style={{
            boxShadow: 'inset 0 0 40px rgba(0,0,0,0.3)'
          }} />
          
          <div className="relative text-secondary-foreground">
            <p className="font-playfair text-lg md:text-xl leading-relaxed mb-6">
              Greetings, traveler. I'm a <span className="font-bold text-primary">frontier developer</span> navigating 
              the wild territories of the digital landscape. Much like the legendary gunslingers of the Old West, 
              I've honed my craft through countless duels with challenging projects and treacherous bugs.
            </p>
            
            <p className="font-playfair text-lg md:text-xl leading-relaxed mb-6">
              My journey began in the saloons of code, where I learned the arts of <span className="font-bold text-primary">frontend mastery</span>, 
              <span className="font-bold text-primary"> backend architecture</span>, and <span className="font-bold text-primary">full-stack development</span>. 
              Each project is a new adventure, each line of code a step deeper into uncharted territory.
            </p>

            <p className="font-playfair text-lg md:text-xl leading-relaxed mb-8">
              When I'm not coding up storms in the digital frontier, you'll find me exploring new technologies, 
              contributing to open source, and helping fellow developers find their way through the wilderness.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleDownload}
                size="lg"
                className="font-cinzel text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-gold transition-all duration-300 hover:scale-105 group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                DOWNLOAD RESUME
              </Button>
              
              <Button 
                onClick={handleView}
                size="lg"
                className="font-cinzel text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-gold transition-all duration-300 hover:scale-105 group"
              >
                <FileText className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                VIEW RESUME
              </Button>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-sm text-secondary-foreground/70 mb-2">
                Having trouble? Try the direct link:
              </p>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 underline font-playfair"
              >
                Open Resume Directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
