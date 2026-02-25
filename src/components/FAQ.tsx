"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What does this system do?",
    answer:
      "Our system is a comprehensive load management platform designed for carrier companies. It centralizes load tracking, dispatching, employee management, invoicing, and reporting into one easy-to-use dashboard, helping you streamline operations and boost profitability.",
  },
  {
    question: "How does the system manage employees, drivers, and equipment?",
    answer:
      "You can register and manage all employees, drivers, brokers, trucks, and trailers from a centralized hub. The system stores contact details, key dates (hire, resignation, birthdays), documents, and performance metrics — all accessible with advanced filtering and search.",
  },
  {
    question: "How does the system handle loads and dispatching?",
    answer:
      "Loads are stored with all broker-related data in one place. You can manage load statuses, dispatch them to drivers seamlessly, and track everything from pickup to delivery with real-time status updates and automated notifications.",
  },
  {
    question:
      "Does the system support multi-company management and notifications?",
    answer:
      "Yes! You can manage multiple companies under a single platform with centralized control. The system also supports Telegram integration for real-time alerts and custom notification workflows, ensuring you never miss critical updates.",
  },
  {
    question: "Can the system handle invoices and generate reports?",
    answer:
      "Absolutely. The system provides dynamic reporting, gross boards, and personalized dashboards that give you complete visibility into your operations. Invoicing is streamlined with automated generation and tracking capabilities.",
  },
  {
    question: "How can I track performance and load rates?",
    answer:
      "Our platform includes comprehensive performance tracking tools — from dispatcher KPIs and driver metrics to load rate analysis and revenue trends. Dynamic dashboards let you monitor everything in real-time and make data-driven decisions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="relative py-24 bg-white">
      <div className="mx-auto max-w-3xl px-[5%]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-blue-600 mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 leading-tight">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                delay: i * 0.05,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className={`rounded-xl border transition-all duration-300 ${
                openIndex === i
                  ? "border-blue-200 bg-blue-50/30 shadow-sm"
                  : "border-navy-100 bg-white hover:border-navy-200"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="flex items-center justify-between w-full text-left px-6 py-5 gap-4"
              >
                <span
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    openIndex === i ? "text-blue-700" : "text-navy-900"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === i ? "bg-blue-600 rotate-180" : "bg-navy-100"
                  }`}
                >
                  <svg
                    className={`w-3.5 h-3.5 transition-colors duration-200 ${
                      openIndex === i ? "text-white" : "text-navy-500"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <p className="text-sm text-navy-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
