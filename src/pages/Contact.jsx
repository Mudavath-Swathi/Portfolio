import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-[var(--bg-main)]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 max-w-2xl"
        >
          <h1 className="heading text-4xl font-semibold">
            Let’s work together
          </h1>
          <p className="mt-3 text-[var(--text-secondary)]">
            Have a project in mind, a role to discuss, or just want to connect?
            I’m always open to meaningful conversations says hi.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid gap-14 md:grid-cols-2">
          {/* LEFT: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-6 text-[var(--text-secondary)]">
              I’m currently open to freelance projects, internships, and
              full-time opportunities related to full-stack and AI-driven
              development.
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[var(--accent)]" />
                <a
                  href="mailto:swathichauhan22@gmail.com"
                  className="text-[var(--accent)] hover:underline"
                >
                  swathichauhan22@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[var(--accent)]" />
                <span className="text-[var(--text-secondary)]">
                  India
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card space-y-5"
          >
            <div>
              <label className="mb-1 block text-sm font-medium">
                Name
              </label>
              <input type="text" placeholder="Your name" />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Email
              </label>
              <input type="email" placeholder="you@example.com" />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell me about your project or idea..."
              />
            </div>

            <button type="submit" className="btn-primary w-fit">
              Send message →
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}