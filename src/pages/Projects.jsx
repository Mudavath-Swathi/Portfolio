import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Job Consultancy Platform",
    description:
      "A full-stack platform designed to streamline hiring workflows. Includes admin dashboards, resume management, and AI-assisted candidate shortlisting to improve recruitment efficiency.",
    tech: ["React", "Node.js", "MongoDB", "AI"],
    link: "/projects/job-consultancy",
  },
  {
    title: "SaaS Analytics Dashboard",
    description:
      "A modern analytics dashboard providing real-time insights through interactive charts and AI-driven summaries, helping teams make faster, data-backed decisions.",
    tech: ["React", "Tailwind", "Charts", "AI"],
    link: "/projects/saas-dashboard",
  },
  {
    title: "Sanvika Luxe — Diamond E-Commerce",
    description:
      "A premium jewellery e-commerce experience featuring secure checkout, product filtering, and AI-based recommendations tailored for high-value customers.",
    tech: ["React", "Node.js", "E-commerce", "AI"],
    link: "/projects/sanvika-luxe",
  },
  {
    title: "Wind Power Forecast Monitoring Dashboard",
    description:
      "A full-stack wind power forecast monitoring dashboard built for the REint AI SWE Challenge. Fetches real-time data from the Elexon UK BMRS API and visualises actual vs forecasted wind generation with interactive controls and error analysis.",
    tech: ["React", "Node.js", "Express", "Recharts", "Python", "Jupyter"],
    link: "/projects/wind-forecast",
  },
];

export default function Projects() {
  return (
    <section className="bg-[var(--bg-main)]">
      <div className="mx-auto max-w-6xl px-6 py-28">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 max-w-3xl"
        >
          <h1 className="heading text-4xl font-semibold text-[var(--text-primary)] sm:text-5xl">
             Projects
          </h1>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            A curated set of projects showcasing my approach to building
            scalable, user-focused, and production-ready web applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="card flex flex-col justify-between"
            >
              {/* Content */}
              <div>
                <h3 className="mb-3 text-xl font-semibold text-[var(--text-primary)]">
                  {project.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-[var(--border-light)] px-3 py-1 text-xs text-[var(--text-secondary)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href={project.link}
                className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)] transition hover:gap-2"
              >
                View project
                <ArrowUpRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-20 text-center"
        >
          <p className="mb-4 text-[var(--text-secondary)]">
            Interested in working together?
          </p>
          <a href="/contact" className="btn-primary w-fit inline-flex justify-center px-6 py-3 text-white">
            Let’s talk
          </a>
        </motion.div>
      </div>
    </section>
  );
}