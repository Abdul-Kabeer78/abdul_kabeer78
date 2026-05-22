import { motion } from "framer-motion";

const skills = [
  { name: "Java (DSA)", level: 90 },
  { name: "C++", level: 88 },
  { name: "Data Structures & Algorithms", level: 88 },
  { name: "Object-Oriented Programming", level: 90 },
  { name: "Java Swing", level: 85 },
  { name: "JDBC & MySQL", level: 80 },
  { name: "Web Development", level: 75 },
  { name: "AI Fundamentals", level: 70 },
  { name: "Problem Solving", level: 92 },
  { name: "Clean Code & Desktop Apps", level: 85 },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Tools of the <span className="text-gradient">craft</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-5 rounded-2xl bg-gradient-card border border-border"
            >
              <div className="flex justify-between mb-3">
                <span className="font-medium">{s.name}</span>
                <span className="text-sm text-muted-foreground">{s.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.05, ease: "easeOut" }}
                  className="h-full bg-gradient-primary"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
