import { motion } from "framer-motion";
import { Brain, Code2, Sigma } from "lucide-react";

const cards = [
  { icon: Code2, title: "Software Development", text: "Crafting clean, efficient code in C++ and Java with a strong foundation in OOP." },
  { icon: Sigma, title: "Problem Solving", text: "Sharpening algorithmic thinking through daily DSA practice and competitive challenges." },
  { icon: Brain, title: "AI & Machine Learning", text: "Exploring intelligent systems, neural networks, and the future of human-machine collaboration." },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building tomorrow with <span className="text-gradient">code & curiosity</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a Computer Science student with a deep passion for software development, algorithmic problem solving, and emerging AI technologies. From low-level C++ systems to elegant Java architectures, I love turning complex problems into clean, scalable solutions — while continually learning how artificial intelligence is reshaping the world we build.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-card border border-border shadow-card"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <c.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
