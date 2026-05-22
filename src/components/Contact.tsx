import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:kabeershahani747@gmail.com?subject=Portfolio%20contact&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-surface/40">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's build <span className="text-gradient">something</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Open to internships, collaborations, and conversations about code, algorithms, and AI. I'll get back to you within a day.
          </p>
          <div className="space-y-4 text-sm">
            <a href="mailto:kabeershahani747@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors">
              <span className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center"><Mail className="w-4 h-4 text-primary" /></span>
              kabeershahani747@gmail.com
            </a>
            <a href="tel:+923121776142" className="flex items-center gap-3 hover:text-primary transition-colors">
              <span className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center"><Phone className="w-4 h-4 text-primary" /></span>
              0312 1776142
            </a>
            <a href="https://github.com/Abdul-Kabeer78" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
              <span className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center"><Github className="w-4 h-4 text-primary" /></span>
              github.com/Abdul-Kabeer78
            </a>
            <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
              <span className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center"><Linkedin className="w-4 h-4 text-primary" /></span>
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="p-6 md:p-8 rounded-3xl bg-gradient-card border border-border shadow-card space-y-4"
        >
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground" htmlFor="name">Name</label>
            <input id="name" name="name" required className="mt-1.5 w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary outline-none transition-colors" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required className="mt-1.5 w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary outline-none transition-colors" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required className="mt-1.5 w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary outline-none transition-colors resize-none" />
          </div>
          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-[1.01] transition-transform">
            <Send className="w-4 h-4" /> {sent ? "Opening mail client…" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
