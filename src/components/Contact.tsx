import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formspree.io/f/mrbyjnrz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Your telegram has been dispatched. I'll ride back to you soon, partner.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Telegraph Down!",
        description: "The telegraph lines are down. Try again later, partner.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 relative flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <h2 className="font-cinzel text-4xl md:text-6xl font-bold text-center mb-16 text-foreground animate-fade-in-up">
          SEND A <span className="text-accent">TELEGRAM</span>
        </h2>

        <div className="bg-card border-2 border-accent/30 rounded-lg p-8 md:p-12 shadow-deep animate-scale-in">
          {/* Telegraph header decoration */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-accent/50" />
            <span className="font-cinzel text-xl text-accent">⚡ WESTERN TELEGRAPH ⚡</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-accent/50" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="font-cinzel text-sm text-foreground mb-2 block">
                YOUR NAME
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name, partner"
                required
                className="bg-background border-border focus:border-accent transition-colors font-playfair"
              />
            </div>

            <div>
              <label htmlFor="email" className="font-cinzel text-sm text-foreground mb-2 block">
                YOUR EMAIL
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@frontier.com"
                required
                className="bg-background border-border focus:border-accent transition-colors font-playfair"
              />
            </div>

            <div>
              <label htmlFor="message" className="font-cinzel text-sm text-foreground mb-2 block">
                YOUR MESSAGE
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your message here..."
                required
                rows={6}
                className="bg-background border-border focus:border-accent transition-colors font-playfair resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="submit"
                size="lg"
                className="flex-1 font-cinzel text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-gold transition-all duration-300 hover:scale-105 group"
              >
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                SEND MESSAGE
              </Button>
              
              <Button
                type="button"
                size="lg"
                variant="outline"
                onClick={() => window.open(`mailto:prakhersingh2345@gmail.com?subject=Message from ${formData.name}&body=${formData.message}`, '_blank')}
                className="flex-1 font-cinzel text-lg border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-lg hover:shadow-gold transition-all duration-300 hover:scale-105"
              >
                EMAIL DIRECT
              </Button>
            </div>
          </form>

          {/* Footer decoration */}
          <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground font-playfair text-sm">
            <span>★</span>
            <span>Est. 2025</span>
            <span>★</span>
            <span>Frontier Communications</span>
            <span>★</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
