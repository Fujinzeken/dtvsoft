"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 hero-gradient grain-overlay" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Gradient orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-blue-500/15 rounded-full blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-3xl px-[5%] text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Ready to Streamline
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-300">
              Your Operations?
            </span>
          </h2>
          <p className="text-lg text-navy-400 leading-relaxed max-w-xl mx-auto mb-10">
            Join 50+ carrier companies already using DTV Soft to manage loads,
            track performance, and maximize profits.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://app.dtvsoft.com/register"
              className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-blue-600 rounded-xl glow-blue hover:bg-blue-500 transition-all duration-300"
            >
              Get Started Free
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="https://app.dtvsoft.com/login"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-navy-300 border border-white/10 rounded-xl hover:border-white/20 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              Log in
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
