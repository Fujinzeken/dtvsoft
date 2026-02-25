"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "The system's gross boards and dynamic reporting have transformed how we operate. We now have complete visibility into our operations and can make informed decisions with confidence. It's been a game-changer for us.",
    name: "David Brown",
    company: "Colibri Holding LLC",
    initials: "DB",
    color: "bg-blue-500",
  },
  {
    quote:
      "This system has exceeded our expectations. The dynamic reporting and gross boards give us actionable insights, while the personalized dashboards help us track key metrics with ease. It's helped us grow faster and smarter.",
    name: "Olivia Clark",
    company: "Freight United LLC",
    initials: "OC",
    color: "bg-emerald-500",
  },
  {
    quote:
      "Managing loads and invoices has never been easier. The dynamic dashboards and personalized reports allow us to monitor performance in real-time, ensuring our business runs smoothly.",
    name: "Emily Carter",
    company: "Vamar INC",
    initials: "EC",
    color: "bg-violet-500",
  },
  {
    quote:
      "The system's ability to centralize load management, dispatcher performance, and invoicing has been invaluable. It's intuitive, efficient, and gives us all the tools we need to scale our operations.",
    name: "Mark Davis",
    company: "TNT Transfer LLC",
    initials: "MD",
    color: "bg-amber-500",
  },
  {
    quote:
      "We've improved operational efficiency significantly. The ability to track dispatcher performance, generate invoices, and view gross boards all in one place saves us hours every week. Highly recommend it!",
    name: "Brian Johnson",
    company: "Atlas Freight Solutions",
    initials: "BJ",
    color: "bg-rose-500",
  },
  {
    quote:
      "The Telegram integration has been a game-changer for us. Setting up workflows with custom rules and receiving real-time alerts ensures that we never miss critical updates. It's exactly what we needed.",
    name: "Sophia Green",
    company: "Colibri Holding LLC",
    initials: "SG",
    color: "bg-sky-500",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-navy-950 overflow-hidden grain-overlay">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-500/8 rounded-full blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-6xl px-[5%]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-blue-400 mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            What Our Clients Are Saying
          </h2>
          <p className="text-lg text-navy-400 leading-relaxed">
            Discover how leading carrier companies are transforming their
            operations with our platform.
          </p>
        </motion.div>

        {/* Testimonial Grid — 2 columns on md, 3 on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                delay: i * 0.06,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="rounded-2xl border border-white/10 bg-navy-900/80 backdrop-blur-sm p-6 hover:border-white/15 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-navy-300 leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-navy-400">{t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
