import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Job Consultancy Platform",
    description:
      "A full-stack job consultancy platform featuring admin dashboards, resume workflows, and AI-assisted candidate matching.",
    tech: ["React", "Node.js", "MongoDB", "AI"],
    link: "/projects/job-consultancy",
  },
  {
    title: "SaaS Analytics Dashboard",
    description:
      "A modern analytics dashboard with real-time metrics, visual insights, and AI-driven decision support.",
    tech: ["React", "Tailwind", "Charts", "AI"],
    link: "/projects/saas-dashboard",
  },
  {
    title: "Sanvika Luxe — Diamond E-Commerce",
    description:
      "A premium jewellery e-commerce platform with AI-based recommendations and a secure checkout experience.",
    tech: ["React", "Node.js", "E-commerce", "AI"],
    link: "/projects/sanvika-luxe",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const FeaturedProjects = () => {
  return (
    <section className="bg-[var(--bg-muted)] pt-24 pb-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-2 text-sm font-medium tracking-wide text-[var(--accent)]">
            Selected Work
          </p>
          <h2 className="heading text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-[var(--text-secondary)]">
            A selection of real-world applications I’ve built — focusing on
            scalability, performance, and thoughtful user experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-[var(--border-light)] bg-[var(--bg-card)] p-6 shadow-sm transition-all"
            >
              <div className="flex h-full flex-col">
                {/* Title */}
                <h3 className="mb-3 text-lg font-semibold text-[var(--text-primary)]">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-[var(--bg-main)] px-3 py-1 text-xs font-medium text-[var(--text-secondary)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-auto flex items-center gap-2 text-sm font-medium text-[var(--accent)]">
                  View Case Study
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 text-center"
        >
          <a href="/projects" className="btn-outline inline-flex items-center gap-2">
            View All Projects
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;