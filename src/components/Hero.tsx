"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.1,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const stats = [
  { value: "10K+", label: "Loads Managed" },
  { value: "50+", label: "Companies Trust Us" },
  { value: "99.9%", label: "Uptime" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/truck-bg.avif"
        alt=""
        fill
        priority
        className="object-cover object-center"
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-navy-950/75" />
      <div className="absolute inset-0 bg-linear-to-b from-navy-950/60 via-navy-950/40 to-navy-950/90" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] animate-pulse [animation-delay:2s]" />

      <div className="relative z-10 mx-auto max-w-6xl px-[5%] pt-32 pb-28 lg:pt-40 lg:pb-36 w-full">
        <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>
            <span className="text-sm font-medium text-blue-300">
              Trusted by 50+ Carrier Companies
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white mb-6"
          >
            Boost Productivity
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-blue-500 to-blue-300">
              with Advanced
            </span>
            <br />
            Load Management
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl text-navy-300 leading-relaxed max-w-xl mb-10 mx-auto lg:mx-0"
          >
            Simplify operations, improve accuracy, and optimize profits with our
            all-in-one solution built for modern carrier companies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center lg:justify-start gap-4 mb-14"
          >
            <a
              href="https://app.dtvsoft.com/register"
              className="group relative inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-blue-600 rounded-xl glow-blue transition-all duration-300 hover:bg-blue-500"
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
          </motion.div>

          {/* Stats Row */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-start gap-10 sm:gap-14"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center lg:items-start"
              >
                <span className="text-3xl sm:text-4xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-sm text-navy-400 mt-1">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-navy-50 to-transparent" />
    </section>
  );
}
