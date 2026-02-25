"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function Platform() {
  return (
    <section
      id="platform"
      className="relative py-24 bg-navy-950 overflow-hidden grain-overlay"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/8 rounded-full blur-[100px]" />
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
            Our Platform
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            Streamline Operations with an{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-400">
              Easy-to-Use Dashboard
            </span>
          </h2>
          <p className="text-lg text-navy-400 leading-relaxed">
            With a simple layout and customizable options, it allows fleet
            managers to easily make quick decisions.
          </p>
        </motion.div>

        {/* ===== Bento Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Large Card — Dashboard Overview */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-2 group relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900/80 backdrop-blur-sm p-6 sm:p-8 hover:border-white/15 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500"
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="flex-1 min-w-0">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-4">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>
                  Gross Boards & Reporting
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Dynamic Dashboards & Reports
                </h3>
                <p className="text-sm text-navy-400 leading-relaxed">
                  Get complete visibility into your operations with dynamic
                  reporting, gross boards, and personalized dashboards that help
                  you make informed decisions with confidence.
                </p>
              </div>
              {/* Mini chart visualization */}
              <div className="sm:w-56 bg-navy-800/60 rounded-xl p-4 border border-white/5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-navy-300">
                    Revenue
                  </span>
                  <span className="text-[10px] font-semibold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                    +18%
                  </span>
                </div>
                <div className="flex items-end gap-1 h-16">
                  {[30, 45, 35, 60, 50, 75, 55, 85, 70, 92].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-linear-to-t from-blue-500 to-blue-400 transition-all duration-300 group-hover:from-blue-600 group-hover:to-blue-400"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card — Status Tracking */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900/80 backdrop-blur-sm p-6 hover:border-white/15 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold mb-4">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Load Status
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Real-Time Status Tracking
            </h3>
            <p className="text-sm text-navy-400 leading-relaxed mb-5">
              Track every load from pickup to delivery with live status updates
              and automated notifications.
            </p>
            {/* Status pills */}
            <div className="space-y-2">
              {[
                {
                  label: "In Transit",
                  count: 24,
                  color: "bg-blue-100 text-blue-700",
                },
                {
                  label: "Delivered",
                  count: 156,
                  color: "bg-green-100 text-green-700",
                },
                {
                  label: "Pending",
                  count: 8,
                  color: "bg-amber-100 text-amber-700",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-3 py-2 rounded-lg bg-navy-800/60"
                >
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${s.color}`}
                  >
                    {s.label}
                  </span>
                  <span className="text-sm font-bold text-white">
                    {s.count}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card — Dispatcher Collaboration */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900/80 backdrop-blur-sm p-6 hover:border-white/15 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold mb-4">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
              Team
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Dispatcher Collaboration
            </h3>
            <p className="text-sm text-navy-400 leading-relaxed mb-5">
              Seamless coordination between dispatchers with shared views,
              assignments, and performance tracking.
            </p>
            {/* Team avatars */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  "bg-blue-500",
                  "bg-emerald-500",
                  "bg-violet-500",
                  "bg-amber-500",
                ].map((c, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${c} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {["JD", "AK", "MR", "SG"][i]}
                  </div>
                ))}
              </div>
              <span className="text-xs text-navy-400">+12 more</span>
            </div>
          </motion.div>

          {/* Wide Card — Employee Management */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="md:col-span-2 lg:col-span-2 group relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900/80 backdrop-blur-sm p-6 sm:p-8 hover:border-white/15 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500"
          >
            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-semibold mb-4">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  Employee Management
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Employee Management Made Simple
                </h3>
                <p className="text-sm text-navy-400 leading-relaxed mb-5">
                  Store all employee details, including contact information,
                  critical dates, and performance metrics. Manage your entire
                  workforce from a single, intuitive interface.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: "📧", label: "Contact Details" },
                    { icon: "📅", label: "Key Dates" },
                    { icon: "📸", label: "Photo Integration" },
                    { icon: "🔍", label: "Advanced Filtering" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-navy-800/60 text-sm text-navy-300"
                    >
                      <span>{item.icon}</span>
                      <span className="font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Employee table mock */}
              <div className="lg:w-72 rounded-xl border border-white/10 overflow-hidden bg-navy-800/50">
                <div className="px-4 py-3 bg-navy-800/80 border-b border-white/5">
                  <span className="text-xs font-semibold text-navy-300">
                    Recent Employees
                  </span>
                </div>
                {[
                  { name: "John Davis", role: "Driver", status: "Active" },
                  {
                    name: "Sarah Miller",
                    role: "Dispatcher",
                    status: "Active",
                  },
                  { name: "Mike Chen", role: "Driver", status: "On Leave" },
                ].map((emp, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-4 py-3 border-b border-white/5 last:border-0"
                  >
                    <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-blue-600">
                        {emp.name
                          .split(" ")
                          .map((w) => w[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-white truncate">
                        {emp.name}
                      </div>
                      <div className="text-[10px] text-navy-400">
                        {emp.role}
                      </div>
                    </div>
                    <span
                      className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                        emp.status === "Active"
                          ? "bg-green-50 text-green-600"
                          : "bg-amber-50 text-amber-600"
                      }`}
                    >
                      {emp.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card — Driver Management — Full Width */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="md:col-span-2 lg:col-span-3 group relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900/80 backdrop-blur-sm p-6 sm:p-8 hover:border-white/15 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500"
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-600 text-xs font-semibold mb-4">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25m0 0V4.875c0-.621-.504-1.125-1.125-1.125H5.25c-.621 0-1.125.504-1.125 1.125v8.25"
                    />
                  </svg>
                  Smart Driver Management
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Optimize Driver Operations with Real-Time Updates
                </h3>
                <p className="text-sm text-navy-400 leading-relaxed">
                  Track driver performance, monitor historical insights, and
                  streamline dispatching — all from a single, unified view.
                </p>
              </div>
              {/* Driver stats — horizontal on wide */}
              <div className="flex flex-wrap gap-4 sm:gap-6">
                {[
                  {
                    label: "Active Drivers",
                    value: "42",
                    trend: "+3",
                    icon: "🚛",
                  },
                  {
                    label: "Avg. Miles/Week",
                    value: "2,450",
                    trend: "+5%",
                    icon: "📍",
                  },
                  {
                    label: "On-Time Rate",
                    value: "97.2%",
                    trend: "+1.2%",
                    icon: "⏱️",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-navy-800/60 border border-white/5"
                  >
                    <span className="text-xl">{stat.icon}</span>
                    <div>
                      <div className="text-xs text-navy-400">{stat.label}</div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-lg font-bold text-white">
                          {stat.value}
                        </span>
                        <span className="text-[10px] font-semibold text-green-600">
                          {stat.trend}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA under Platform */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="https://app.dtvsoft.com/register"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-blue-600 rounded-xl glow-blue hover:bg-blue-500 transition-all duration-300"
          >
            Start Managing Your Fleet
            <svg
              className="w-4 h-4"
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
        </motion.div>
      </div>
    </section>
  );
}
