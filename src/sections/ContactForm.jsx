import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="relative border-t border-[var(--border-light)] bg-[var(--bg-muted)] scroll-mt-28">
      <div className="mx-auto max-w-6xl px-6 py-24">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 max-w-2xl"
        >
          <h2 className="heading text-3xl font-semibold text-[var(--text-primary)]">
            Let’s work together
          </h2>
          <p className="mt-3 text-[var(--text-secondary)]">
            Have a project in mind, a question, or just want to connect?
            Feel free to reach out — I usually respond quickly.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid gap-14 md:grid-cols-2">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-md"
          >
            <p className="mb-6 text-[var(--text-secondary)] leading-relaxed">
              I’m open to internships, freelance projects, collaborations,
              and full-time opportunities related to full-stack and AI-driven
              web development.
            </p>

            <div className="space-y-4 text-sm">
              <p>
                <span className="font-medium text-[var(--text-primary)]">
                  Email:
                </span>{" "}
                <a
                  href="mailto:swathichauhan22@gmail.com"
                  className="text-[var(--accent)] hover:underline"
                >
                  swathichauhan22@gmail.com
                </a>
              </p>

              <p>
                <span className="font-medium text-[var(--text-primary)]">
                  Location:
                </span>{" "}
                India
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[20px] border border-[var(--border-light)] bg-[var(--bg-card)] p-8 shadow-sm"
          >
            <div className="space-y-5">
              {/* Name */}
              <div>
                <label className="mb-1 block text-sm font-medium text-[var(--text-primary)]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-md border border-[var(--border-light)] bg-transparent px-4 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-1 block text-sm font-medium text-[var(--text-primary)]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-[var(--border-light)] bg-transparent px-4 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-1 block text-sm font-medium text-[var(--text-primary)]">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-md border border-[var(--border-light)] bg-transparent px-4 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
              </div>

              {/* CTA */}
              <button
                type="submit"
                className="btn-primary mt-2 inline-flex items-center gap-2"
              >
                Send Message →
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}