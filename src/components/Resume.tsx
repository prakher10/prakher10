import { Download, FileText, Award, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Resume = () => {
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
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section id="resume" className="py-20 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="font-cinzel text-4xl md:text-6xl font-bold text-center mb-16 text-foreground animate-fade-in-up">
          SHERIFF'S <span className="text-accent">CREDENTIALS</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Resume Preview Card */}
          <Card className="bg-card border-2 border-accent/30 p-8 hover:border-accent transition-all duration-300 hover:shadow-gold">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mr-4">
                <FileText className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="font-cinzel text-2xl font-bold text-foreground">Resume</h3>
                <p className="font-playfair text-muted-foreground">Complete professional history</p>
              </div>
            </div>
            
            <p className="font-playfair text-muted-foreground mb-6">
              Download my complete resume with detailed experience, education, and achievements 
              from my journey through the digital frontier.
            </p>

            <div className="space-y-3">
              <Button 
                onClick={handleDownload}
                className="w-full bg-accent hover:bg-accent/80 text-accent-foreground font-cinzel text-lg py-6"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              
              <Button 
                onClick={handleView}
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground font-cinzel text-lg py-6"
              >
                <FileText className="w-5 h-5 mr-2" />
                View Resume
              </Button>

              <div className="text-center pt-2">
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-accent underline font-playfair"
                >
                  Direct link to resume
                </a>
              </div>
            </div>
          </Card>

          {/* Quick Stats */}
          <div className="space-y-6">
            <Card className="bg-card border-2 border-accent/30 p-6 hover:border-accent transition-all duration-300">
              <div className="flex items-center">
                <Briefcase className="w-8 h-8 text-accent mr-4" />
                <div>
                  <h4 className="font-cinzel text-xl font-bold text-foreground">Experience</h4>
                  <p className="font-playfair text-muted-foreground">X+ Years in Development</p>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-2 border-accent/30 p-6 hover:border-accent transition-all duration-300">
              <div className="flex items-center">
                <Award className="w-8 h-8 text-accent mr-4" />
                <div>
                  <h4 className="font-cinzel text-xl font-bold text-foreground">Projects</h4>
                  <p className="font-playfair text-muted-foreground">X+ Completed Missions</p>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-2 border-accent/30 p-6 hover:border-accent transition-all duration-300">
              <div className="flex items-center">
                <FileText className="w-8 h-8 text-accent mr-4" />
                <div>
                  <h4 className="font-cinzel text-xl font-bold text-foreground">Skills</h4>
                  <p className="font-playfair text-muted-foreground">Full-Stack Expertise</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="font-playfair text-lg text-muted-foreground mb-6">
            Ready to ride together on your next digital adventure?
          </p>
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            variant="outline" 
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-cinzel text-lg px-8 py-3"
          >
            Let's Talk Business
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resume;