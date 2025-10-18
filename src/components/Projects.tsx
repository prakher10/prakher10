import { Card } from "@/components/ui/card";
import { ExternalLink, Eye } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "WANTED: Job Description Questions",
    description: "An intelligent web application that generates relevant interview questions based on job descriptions. Built with modern web technologies.",
    reward: "LIVE",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://jobdescriptionquestions.netlify.app/",
  },
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="font-cinzel text-4xl md:text-6xl font-bold text-center mb-16 text-foreground animate-fade-in-up">
          WANTED <span className="text-accent">PROJECTS</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project Preview Window */}
          <div className="relative">
            <Card className="bg-card border-2 border-accent/30 overflow-hidden h-[600px] sticky top-8">
              {/* Monitor Frame */}
              <div className="bg-accent/10 border-b-2 border-accent/30 p-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="flex-1 text-center">
                    <p className="font-cinzel text-sm text-accent font-bold">LIVE PREVIEW</p>
                  </div>
                </div>
              </div>

              {/* Preview Content */}
              <div className="h-full bg-background relative overflow-hidden">
                <iframe
                  src={projects[0].url}
                  className="w-full h-full border-none"
                  title="Project Preview"
                  loading="lazy"
                />
                
                {/* Overlay for interaction */}
                <div className="absolute inset-0 bg-transparent hover:bg-black/5 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                  <a
                    href={projects[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-cinzel font-bold hover:bg-accent/90 transition-all duration-300 flex items-center gap-2"
                  >
                    <Eye className="w-5 h-5" />
                    VIEW FULL SITE
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={`relative bg-card border-2 overflow-hidden group cursor-pointer transition-all duration-500 animate-scale-in ${
                  hoveredProject === project.id 
                    ? 'border-accent shadow-gold scale-105' 
                    : 'border-accent/30 hover:border-accent/60'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Wanted Poster Header */}
                <div className="bg-accent/10 border-b-2 border-accent/30 p-4">
                  <p className="font-cinzel text-2xl font-bold text-center text-accent">WANTED</p>
                </div>

                <div className="p-6">
                  <h3 className="font-cinzel text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Description - Slides in on hover */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    hoveredProject === project.id ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="font-playfair text-muted-foreground mb-4 text-lg">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack - Slides in on hover */}
                  <div className={`overflow-hidden transition-all duration-500 delay-100 ${
                    hoveredProject === project.id ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="font-cinzel text-sm text-muted-foreground mb-3">TECH ARSENAL:</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary/50 text-foreground text-sm font-cinzel rounded border border-border hover:border-accent transition-colors duration-300"
                          style={{ animationDelay: `${techIndex * 0.1}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="font-cinzel text-sm text-muted-foreground">STATUS</p>
                      <p className="font-cinzel text-3xl font-bold text-accent">{project.reward}</p>
                    </div>
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-primary hover:bg-accent hover:text-accent-foreground transition-all duration-300 group-hover:animate-glow"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/50" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent/50" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent/50" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/50" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
