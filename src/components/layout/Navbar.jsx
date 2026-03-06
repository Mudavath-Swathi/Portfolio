import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200";

  return (
    <header className="sticky top-0 z-50">
      {/* Light / Cream Navbar */}
      <div className="border-b border-[var(--border-light)] bg-[rgba(248,246,242,0.85)] backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo / Name */}
          <NavLink
            to="/"
            className="text-lg font-semibold tracking-tight text-[var(--text-primary)]"
          >
            Swathi Chauhan
            <span className="text-[var(--accent)]">.</span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/projects" className={linkClass}>
              Projects
            </NavLink>
            <NavLink to="/skills" className={linkClass}>
              Skills
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <NavLink to="/projects" className="btn-primary">
              View Work
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[var(--text-primary)]"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden border-b border-[var(--border-light)] bg-[rgba(248,246,242,0.95)] backdrop-blur-sm"
          >
            <nav className="flex flex-col gap-5 px-6 py-6">
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className={linkClass}
              >
                Home
              </NavLink>
              <NavLink
                to="/projects"
                onClick={() => setOpen(false)}
                className={linkClass}
              >
                Projects
              </NavLink>
              <NavLink
                to="/skills"
                onClick={() => setOpen(false)}
                className={linkClass}
              >
                Skills
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className={linkClass}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className={linkClass}
              >
                Contact
              </NavLink>

              <NavLink
                to="/projects"
                onClick={() => setOpen(false)}
                className="btn-primary mt-4 w-fit"
              >
                View Work
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}