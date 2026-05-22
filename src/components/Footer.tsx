import { useEffect, useState } from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Abdul Kabeer Shahani. Crafted with care.
        </p>
        <div className="flex items-center gap-3">
          <a href="https://github.com/Abdul-Kabeer78" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-lg hover:bg-secondary transition-colors"><Github className="w-4 h-4" /></a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg hover:bg-secondary transition-colors"><Linkedin className="w-4 h-4" /></a>
          <a href="mailto:kabeershahani747@gmail.com" aria-label="Email" className="p-2 rounded-lg hover:bg-secondary transition-colors"><Mail className="w-4 h-4" /></a>
        </div>
      </div>

      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-gradient-primary text-primary-foreground shadow-glow flex items-center justify-center hover:scale-110 transition-transform"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}
