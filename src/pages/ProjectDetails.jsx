import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects[slug];

  if (!project) {
    return (
      <section className="py-32 text-center">
        <h2 className="text-2xl font-semibold">Project not found</h2>
        <Link to="/projects" className="btn-outline mt-6 inline-block">
          Back to projects
        </Link>
      </section>
    );
  }

  return (
    <section className="bg-[var(--bg-main)]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Back */}
        <Link
          to="/projects"
          className="mb-10 inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)]"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid gap-14 lg:grid-cols-2"
        >
          {/* LEFT */}
          <div>
            <p className="text-sm font-medium text-[var(--accent)]">
              {project.tagline}
            </p>

            <h1 className="heading mt-3 text-4xl font-semibold">
              {project.title}
            </h1>

            <p className="mt-6 max-w-xl text-[var(--text-secondary)]">
              {project.description}
            </p>

            {/* Tech */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="rounded-full border border-[var(--border-light)] bg-white px-3 py-1 text-sm text-[var(--text-secondary)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-8 flex flex-wrap gap-4">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Live Demo <ExternalLink size={16} />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline inline-flex items-center gap-2"
                >
                  GitHub <Github size={16} />
                </a>
              )}
            </div>
          </div>

          {/* RIGHT – HERO IMAGE */}
          <div className="overflow-hidden rounded-[22px] border border-[var(--border-light)] bg-white shadow-soft">
            <img
              src={project.heroImage}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        {/* WHAT I BUILT */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-28"
        >
          <h2 className="heading text-2xl font-semibold">
            What I Built
          </h2>
          <p className="mt-2 max-w-2xl text-[var(--text-secondary)]">
            Core features and technical decisions that shaped this product.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {project.highlights.map((item, i) => (
              <div
                key={i}
                className="card flex items-start gap-4"
              >
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                <p className="text-[var(--text-secondary)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* PRODUCT WALKTHROUGH */}
        {project.gallery?.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-28"
          >
            <h2 className="heading text-2xl font-semibold">
              Product Walkthrough
            </h2>
            <p className="mt-2 max-w-2xl text-[var(--text-secondary)]">
              Key screens and flows that define the user experience.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden rounded-[20px] border border-[var(--border-light)] bg-white shadow-soft"
                >
                  <img
                    src={img}
                    alt={`${project.title} screen ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* IMPACT */}
        {project.outcome && (
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-28"
          >
            <div className="rounded-[24px] bg-[var(--accent-soft)] px-10 py-12">
              <h2 className="heading text-2xl font-semibold">
                Impact & Results
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-[var(--text-secondary)]">
                {project.outcome}
              </p>
            </div>
          </motion.section>
        )}
      </div>
    </section>
  );
}