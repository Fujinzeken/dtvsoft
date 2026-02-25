"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Essential",
    price: "$500",
    period: "/month",
    description:
      "Perfect for smaller fleets getting started with load management.",
    features: [
      { text: "500 monthly loads included", included: true },
      { text: "Additional load: $1.50 each", included: true },
      { text: "Unlimited users", included: true },
      { text: "Integrations (chargeable)", included: true },
      { text: "Email support", included: true },
      { text: "Customization (chargeable)", included: true },
    ],
    cta: "Send request",
    href: "https://app.dtvsoft.com/send-request?subscription_package=Essential",
    popular: false,
  },
  {
    name: "Growth",
    price: "$1,000",
    period: "/month",
    description:
      "Ideal for growing companies that need more capacity and support.",
    features: [
      { text: "1,500 monthly loads included", included: true },
      { text: "Additional load: $1.00 each", included: true },
      { text: "Unlimited users", included: true },
      { text: "Integrations (chargeable)", included: true },
      { text: "Email & Live chat support", included: true },
      { text: "Customization (chargeable)", included: true },
    ],
    cta: "Send request",
    href: "https://app.dtvsoft.com/send-request?subscription_package=Growth",
    popular: true,
  },
  {
    name: "Advanced",
    price: "$2,000",
    period: "/month",
    description:
      "For large-scale operations demanding maximum throughput and priority support.",
    features: [
      { text: "4,500 monthly loads included", included: true },
      { text: "Additional load: $0.60 each", included: true },
      { text: "Unlimited users", included: true },
      { text: "Integrations (chargeable)", included: true },
      { text: "Email & Live chat support", included: true },
      { text: "Customization (chargeable)", included: true },
    ],
    cta: "Send request",
    href: "https://app.dtvsoft.com/send-request?subscription_package=Advanced",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-white overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-[5%]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-blue-600 mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 leading-tight mb-4">
            Flexible Plans for{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-400">
              Every Fleet Size
            </span>
          </h2>
          <p className="text-lg text-navy-600 leading-relaxed">
            Our mission is to equip carrier companies with innovative software
            solutions designed to streamline load management and boost
            operational efficiency.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className={`relative rounded-2xl p-[1px] transition-all duration-500 ${
                plan.popular
                  ? "bg-linear-to-b from-blue-400 via-blue-600 to-blue-400 shadow-xl shadow-blue-500/15 scale-[1.02] lg:scale-105"
                  : "bg-navy-200/60 hover:bg-navy-300/60"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1 text-xs font-bold text-white bg-blue-600 rounded-full shadow-lg shadow-blue-500/30 uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`relative rounded-2xl p-6 sm:p-8 h-full ${
                  plan.popular ? "bg-navy-950" : "bg-white"
                }`}
              >
                {/* Plan name */}
                <h3
                  className={`text-lg font-bold mb-1 ${
                    plan.popular ? "text-white" : "text-navy-950"
                  }`}
                >
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-3">
                  <span
                    className={`text-4xl font-extrabold ${
                      plan.popular ? "text-white" : "text-navy-950"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      plan.popular ? "text-navy-400" : "text-navy-500"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    plan.popular ? "text-navy-400" : "text-navy-500"
                  }`}
                >
                  {plan.description}
                </p>

                {/* CTA */}
                <a
                  href={plan.href}
                  className={`block w-full text-center py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-300 mb-8 ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-500 glow-blue"
                      : "bg-navy-950 text-white hover:bg-navy-800"
                  }`}
                >
                  {plan.cta}
                </a>

                {/* Divider */}
                <div
                  className={`h-px mb-6 ${
                    plan.popular ? "bg-white/10" : "bg-navy-100"
                  }`}
                />

                {/* Features list */}
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <svg
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          plan.popular ? "text-blue-400" : "text-blue-600"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-navy-300" : "text-navy-600"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
