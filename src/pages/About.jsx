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
           I'm Mudavath Swathi Chauhan — an Aerospace Engineering student at IIT Kharagpur 
           who builds full-stack web applications. While my degree is in Aerospace, 
           I've spent the last two years teaching myself the MERN stack, Next.js, 
           Python, and AI integrations. I've shipped projects across different domains 
           — an AI-powered job consultancy platform, a SaaS analytics tool with 
           ML-driven predictions, a wind power forecasting dashboard, and a premium 
           e-commerce platform. Every project is deployed, live, and built 
           end-to-end by me.
          </p>

          <p className="text-[var(--text-secondary)]">
          I care about clean UI, reliable backends, and code that's actually 
          maintainable — not just features for the sake of it. I'm actively looking 
          for full-stack or AI-focused opportunities — full-time roles, 
          internships, or freelance collaborations — where I can apply my skills 
          to real problems and build things that matter.
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
              2022 - 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}