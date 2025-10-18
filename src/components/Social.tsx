import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socials = [
  { name: "GitHub", icon: Github, url: "https://github.com/prakher10", badge: "Code Sheriff" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/prakher-singh-491b24241/", badge: "Network Marshal" },
  { name: "Email", icon: Mail, url: "mailto:prakhersingh2345@gmail.com", badge: "Telegraph" },
];

const Social = () => {
  return (
    <section id="social" className="py-20 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="font-cinzel text-4xl md:text-6xl font-bold text-center mb-16 text-foreground animate-fade-in-up">
          SHERIFF'S <span className="text-accent">BADGES</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                className="group relative animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Badge card */}
                <div className="relative bg-card border-2 border-accent/30 rounded-lg p-6 transition-all duration-300 hover:border-accent hover:shadow-gold">
                  {/* Pin effect */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-accent rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 bg-accent-foreground rounded-full" />
                  </div>

                  <div className="flex flex-col items-center pt-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-accent group-hover:text-primary transition-colors" />
                    </div>
                    
                    <h3 className="font-cinzel text-lg font-bold text-foreground mb-2">
                      {social.name}
                    </h3>
                    
                    <p className="font-playfair text-sm text-muted-foreground text-center">
                      {social.badge}
                    </p>
                  </div>

                  {/* Dust effect on hover */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-accent/30 rounded-full smoke-effect"
                          style={{
                            left: `${30 + i * 20}%`,
                            animationDelay: `${i * 0.2}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Social;
