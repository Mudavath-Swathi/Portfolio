import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Framer Motion",
        "GSAP",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express",
        "MongoDB",
        "REST APIs",
        "Authentication",
      ],
    },
    {
      title: "AI / Data",
      skills: [
        "OpenAI API",
        "Prompt Engineering",
        "AI Workflow Automation",
        "Data Processing",
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        "Git & GitHub",
        "Vite",
        "Postman",
        "Vercel",
        "Render",
        "Netlify",
        "Deployment",
        "Clean Architecture",
      ],
    },
  ];

  return (
    <section className="relative border-t border-[var(--border-light)] bg-[var(--bg-muted)]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <h2 className="heading text-3xl font-semibold text-[var(--text-primary)]">
            Skills & Technologies
          </h2>
          <p className="mt-3 text-[var(--text-secondary)]">
            Tools, technologies, and frameworks I use to build reliable,
            scalable, and production-ready applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="rounded-[18px] border border-[var(--border-light)] bg-[var(--bg-card)] p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="mb-4 text-lg font-medium text-[var(--text-primary)]">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="cursor-default rounded-full border border-[var(--border-light)] bg-white/40 px-3 py-1 text-sm text-[var(--text-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;