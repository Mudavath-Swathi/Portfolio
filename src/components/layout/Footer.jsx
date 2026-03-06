import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-light)] bg-[var(--bg-muted)]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-6xl px-6 py-12"
      >
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          {/* Left */}
          <p className="text-sm text-[var(--text-secondary)]">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-[var(--text-primary)]">
              Swathi Chauhan
            </span>
            . All rights reserved.
          </p>

          {/* Right */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Mudavath-Swathi"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-[var(--text-secondary)] transition hover:text-[var(--accent)]"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/swathi-chauhan-901a1b275"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-[var(--text-secondary)] transition hover:text-[var(--accent)]"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="/contact"
              aria-label="Contact"
              className="text-[var(--text-secondary)] transition hover:text-[var(--accent)]"
            >
              <HiOutlineMail size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}