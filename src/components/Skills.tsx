import { Code, Database, Server, Zap, FileCode, Cpu } from "lucide-react";

const skills = [
  { name: "C++", icon: Cpu, level: "System Architect" },
  { name: "C", icon: Cpu, level: "Low-Level Master" },
  { name: "HTML", icon: Code, level: "Structure Expert" },
  { name: "CSS", icon: Code, level: "Style Sheriff" },
  { name: "JavaScript", icon: FileCode, level: "Script Slinger" },
  { name: "React", icon: Zap, level: "Component Cowboy" },
  { name: "TypeScript", icon: FileCode, level: "Type Wrangler" },
  { name: "Node.js", icon: Server, level: "Backend Bandit" },
  { name: "Python", icon: Database, level: "Data Gunslinger" },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-20 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="font-cinzel text-4xl md:text-6xl font-bold text-center mb-16 text-foreground animate-fade-in-up">
          ARSENAL OF <span className="text-accent">SKILLS</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="flex flex-col items-center group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-4">
                  {/* Badge background */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-lg group-hover:shadow-gold">
                    <div className="w-20 h-20 rounded-full bg-card flex items-center justify-center">
                      <Icon className="w-10 h-10 text-accent group-hover:text-primary transition-colors duration-300" />
                    </div>
                  </div>
                  
                  {/* Star decoration */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center transform group-hover:rotate-180 transition-transform duration-500">
                    <span className="text-accent-foreground text-xs font-bold">★</span>
                  </div>
                </div>

                <h3 className="font-cinzel text-lg font-bold text-foreground mb-1 text-center">
                  {skill.name}
                </h3>
                <p className="font-playfair text-sm text-muted-foreground text-center">
                  {skill.level}
                </p>
              </div>
            );
          })}
        </div>

        {/* Decorative divider */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-32 bg-gradient-to-r from-transparent to-accent/50" />
          <span className="text-accent text-2xl">★</span>
          <div className="h-px w-32 bg-gradient-to-l from-transparent to-accent/50" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
