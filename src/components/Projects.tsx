import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const USER = "Abdul-Kabeer78";

const projects = [
  {
    title: "Modern Attendance System",
    repo: "ModerenAttendanceSystem",
    description: "Sleek Java Swing desktop app with FlatLaf dark UI — student/course management, real-time attendance, detailed reports, and persistent storage.",
    tech: ["Java", "Swing", "FlatLaf", "OOP"],
    gradient: "from-blue-500/30 to-cyan-500/30",
  },
  {
    title: "Inventory Management System",
    repo: "InventoryManagementSystem",
    description: "Java Swing app with secure login, CRUD operations, category organization, CSV export, and real-time stock alerts powered by MySQL.",
    tech: ["Java", "MySQL", "JDBC", "Swing"],
    gradient: "from-indigo-500/30 to-blue-500/30",
  },
  {
    title: "Library Management System",
    repo: "LibraryManagementsystemwithmysql",
    description: "Full library system with MySQL backend — book inventory, member registration, issue/return with fines, and secure role-based login.",
    tech: ["Java", "MySQL", "OOP"],
    gradient: "from-sky-500/30 to-blue-500/30",
  },
  {
    title: "AI Student Grader",
    repo: "AIStudentGrader",
    description: "Intelligent grading system that uses AI to evaluate student responses — reducing manual effort with fast, accurate, unbiased feedback.",
    tech: ["Java", "AI", "Automation"],
    gradient: "from-violet-500/30 to-blue-500/30",
  },
  {
    title: "Java Chat Bot",
    repo: "JavaChatBot",
    description: "Modern Java Swing AI chatbot powered by the OpenRouter API — conversation history, smart context, and smooth background processing.",
    tech: ["Java", "Swing", "OpenRouter API"],
    gradient: "from-cyan-500/30 to-blue-500/30",
  },
  {
    title: "Hotel Management System",
    repo: "HotelManagementSystem",
    description: "Complete C++ console app for hotel operations — room booking, customer management, billing, and file-based data storage.",
    tech: ["C++", "OOP", "File I/O"],
    gradient: "from-blue-500/30 to-indigo-500/30",
  },
  {
    title: "Flight Reservation System",
    repo: "FlightReservationSystem",
    description: "C++ console reservation system with file storage — add flights, view schedules, book tickets with auto-generated IDs, and cancel bookings.",
    tech: ["C++", "DSA", "File I/O"],
    gradient: "from-sky-500/30 to-cyan-500/30",
  },
  {
    title: "Advanced Todo App",
    repo: "AdvanceTodoApp",
    description: "Java Swing to-do manager with dark UI — priorities, categories, due-date reminders, filters, statistics, and text export.",
    tech: ["Java", "Swing", "OOP"],
    gradient: "from-indigo-500/30 to-violet-500/30",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Projects</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Selected <span className="text-gradient">work</span>
            </h2>
          </div>
          <a
            href={`https://github.com/${USER}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            View all repositories <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => {
            const repoUrl = `https://github.com/${USER}/${p.repo}`;
            return (
              <motion.article
                key={p.repo}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group rounded-2xl bg-gradient-card border border-border shadow-card overflow-hidden hover:-translate-y-1 hover:border-primary/40 transition-all"
              >
                <a href={repoUrl} target="_blank" rel="noreferrer" className="block">
                  <div className={`relative h-40 bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
                    <span className="font-display text-5xl font-bold text-foreground/30">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                </a>
                <div className="p-6">
                  <a href={repoUrl} target="_blank" rel="noreferrer">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                  </a>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={repoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors">
                      <Github className="w-4 h-4" /> View Repository
                    </a>
                    <a href={`${repoUrl}#readme`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors">
                      <ExternalLink className="w-4 h-4" /> Read More
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
