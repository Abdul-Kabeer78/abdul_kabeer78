import { motion } from "framer-motion";
import { ArrowRight, Github, Mail, Sparkles } from "lucide-react";
const profile = "https://avatars.githubusercontent.com/u/247107935?v=4";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 bg-gradient-hero overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border glass text-xs text-muted-foreground mb-6">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Available for internships & collaboration
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
            Abdul Kabeer
            <br />
            <span className="text-gradient">Shahani</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Computer Science Student <span className="text-foreground/80">·</span> C++ Developer <span className="text-foreground/80">·</span> Java Programmer <span className="text-foreground/80">·</span> DSA Enthusiast <span className="text-foreground/80">·</span> Artificial Intelligence Learner
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-[1.02] transition-transform">
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border hover:bg-secondary transition-colors font-medium">
              <Mail className="w-4 h-4" /> Contact Me
            </a>
            <a href="https://github.com/Abdul-Kabeer78" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border hover:bg-secondary transition-colors font-medium">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-30 rounded-full" />
          <div className="relative animate-float">
            <div className="absolute -inset-1 bg-gradient-primary rounded-3xl blur-lg opacity-60" />
            <img
              src={profile}
              alt="Abdul Kabeer Shahani"
              width={768}
              height={768}
              className="relative rounded-3xl w-72 md:w-80 aspect-square object-cover border border-border shadow-card"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
