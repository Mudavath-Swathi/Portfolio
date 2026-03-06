import { motion } from "framer-motion";

export default function SkillsM() {
  const skillGroups = [
    {
      title: "Frontend Development",
      description:
        "Building responsive, accessible, and performant user interfaces with modern frameworks.",
      skills: [
        "React",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "Framer Motion",
        "GSAP",
        "SEO Optimization",
      ],
    },
    {
      title: "Backend Development",
      description:
        "Designing scalable APIs, handling authentication, and managing application data.",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "Authentication & Authorization",
      ],
    },
    {
      title: "AI & Intelligent Features",
      description:
        "Integrating AI capabilities to enhance workflows, automation, and user experience.",
      skills: [
        "OpenAI API",
        "Prompt Engineering",
        "AI Workflow Automation",
        "Data Processing",
      ],
    },
    {
      title: "Tools & Practices",
      description:
        "Using industry-standard tools and clean practices for reliable development and deployment.",
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
    {
      title: "Database & Data Management",
      description:
        "Designing and managing application data using modern databases, ensuring efficient storage, retrieval, and scalable data models.",
      skills: [
        "MongoDB",
        "Mongoose",
        "Data Modeling",
      ],
    },
  ];

  return (
    <section className="border-t border-[var(--border-light)] bg-[var(--bg-muted)]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 max-w-2xl"
        >
          <h2 className="heading text-3xl font-semibold">
            Skills & Technologies
          </h2>
          <p className="mt-3 text-[var(--text-secondary)]">
            The technologies and tools I use to build scalable, production-ready
            web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="card"
            >
              <h3 className="mb-2 text-lg font-medium text-[var(--text-primary)]">
                {group.title}
              </h3>

              <p className="mb-5 text-sm text-[var(--text-secondary)]">
                {group.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-[var(--border-light)] bg-white px-3 py-1 text-sm text-[var(--text-secondary)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}