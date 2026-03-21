import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import profileImage from "../assets/portfolio_profile .jpeg";

export default function Hero() {
  const glowRef = useRef(null);

  // Subtle background animation (premium feel)
  useEffect(() => {
    gsap.to(glowRef.current, {
      opacity: 0.6,
      scale: 1.1,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[var(--bg-main)]">
      {/* Background glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[140px]"
      />

      <div className="mx-auto max-w-6xl px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          {/* LEFT: TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 text-sm font-medium tracking-wide text-[var(--accent)]"
            >
              Full-Stack & AI Engineer · IIT Kharagpur
            </motion.p>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="heading text-4xl font-semibold leading-tight tracking-tight text-[var(--text-primary)] sm:text-5xl"
            >
              Building clean, scalable <br />
              <span className="text-[var(--accent)]">
                modern web experiences
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-6 max-w-xl text-base text-[var(--text-secondary)] sm:text-lg"
            >
              I design and develop production-ready web applications — from SaaS
              dashboards to full-stack platforms — with a focus on performance,
              clarity, and real-world usability.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="/projects"
                className="btn-primary inline-flex items-center gap-2"
              >
                View Projects
                <ArrowRight size={18} />
              </a>

              <a href="/contact" className="btn-outline">
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT: PHOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative mx-auto w-[260px] sm:w-[320px] -translate-y-4"
          >
            <div className="relative overflow-hidden rounded-[28px]  border border-[var(--border-light)]  shadow-2xl">
              {/* Replace src with your image */}
              <img
                src={profileImage}
                alt="Swathi Chauhan"
                className="h-full w-full object-cover grayscale hover:grayscale-0 transition duration-500"
              />
            </div>

            {/* Accent ring */}
            <div className="absolute -inset-3 -z-10 rounded-[32px] border border-[var(--accent)]/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}