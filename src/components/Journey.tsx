import { motion } from "framer-motion";

const milestones = [
  { year: "2022", title: "Learning C++", desc: "Began my programming journey with C++ — mastering syntax, memory, and the fundamentals of systems thinking." },
  { year: "2023", title: "Mastering Java", desc: "Deepened object-oriented design with Java, building structured applications and exploring SOLID principles." },
  { year: "2024", title: "Practicing DSA", desc: "Daily problem solving across arrays, trees, graphs and dynamic programming to sharpen algorithmic intuition." },
  { year: "2025", title: "Exploring Artificial Intelligence", desc: "Diving into machine learning foundations, neural networks, and building AI-driven projects." },
];

export function Journey() {
  return (
    <section id="journey" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            A timeline of <span className="text-gradient">growth</span>
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:-translate-x-1/2" />
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 mb-10 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}
            >
              <div className={`md:[direction:ltr] ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                <div className="absolute left-2.5 md:left-1/2 top-2 w-4 h-4 rounded-full bg-gradient-primary border-4 border-background shadow-glow md:-translate-x-1/2" />
                <span className="text-sm text-primary font-mono">{m.year}</span>
                <h3 className="text-xl font-semibold mt-1 mb-2">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
              <div />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
