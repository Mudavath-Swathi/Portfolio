import { motion } from "framer-motion";
import profileImage from "../assets/portfolio_profile .jpeg";

export default function About() {
  return (
    <section className="bg-[var(--bg-main)]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-3 max-w-2xl"
        >
          <h1 className="heading text-3xl font-semibold">
            About Me
          </h1>
          <p className="mt-3 text-[var(--text-secondary)]">
            A brief look into my background, approach to development, and what I
            enjoy building.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="mb-5 text-[var(--text-secondary)]">
              I’m a full-stack developer with a strong interest in building
              scalable, user-focused web applications. I enjoy working across
              the stack — from designing clean user interfaces to implementing
              reliable backend systems and integrating intelligent features.
            </p>

            <p className="mb-5 text-[var(--text-secondary)]">
              My work focuses on clarity, performance, and real-world usability.
              I prefer building systems that are easy to maintain, thoughtfully
              designed, and aligned with actual user needs rather than just
              adding features for the sake of complexity.
            </p>

            <p className="text-[var(--text-secondary)]">
              I’m currently exploring opportunities in full-stack and AI-driven
              web development, including freelance projects, internships, and
              full-time roles where I can continue to grow and contribute
              meaningfully.
            </p>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto w-[260px] sm:w-[300px]"
          >
            <div className="overflow-hidden rounded-[22px] border border-[var(--border-light)] bg-white shadow-lg">
              <img
                src={profileImage}
                alt="Swathi Chauhan"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-20 max-w-3xl"
        >
          <h2 className="heading mb-4 text-2xl font-semibold">
            Education
          </h2>

          <div className="card">
            <p className="font-medium text-[var(--text-primary)]">
              Bachelor of Technology (B.Tech)
            </p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              Aerospace Engineering — IIT Kharagpur
            </p>
            <p className="mt-1 text-sm text-[var(--text-subtle)]">
              Currently in 4th Year
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}