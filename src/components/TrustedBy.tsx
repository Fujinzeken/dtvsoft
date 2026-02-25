"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  {
    name: "Colibri Holding LLC",
    logo: "/images/brands/colibri.webp",
    height: "h-10",
  },
  {
    name: "Freight United LLC",
    logo: "/images/brands/freight.avif",
    height: "h-10",
  },
  { name: "Vamar INC", logo: "/images/brands/vamar.webp", height: "h-14" },
  { name: "TNT Transfer LLC", logo: "/images/brands/tnt.avif", height: "h-14" },
];

// Duplicate enough for seamless loop
const marqueeItems = [...brands, ...brands, ...brands, ...brands];

export default function TrustedBy() {
  return (
    <section className="relative py-14 bg-navy-50 overflow-hidden">
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-400">
          Trusted by leading companies
        </p>
      </motion.div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-40 z-10 bg-linear-to-r from-navy-50 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 z-10 bg-linear-to-l from-navy-50 to-transparent pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex animate-marquee items-center gap-32">
          {marqueeItems.map((brand, i) => (
            <div key={i} className="shrink-0 flex items-center justify-center">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={140}
                height={48}
                className={`${brand.height} w-auto object-contain opacity-40 hover:opacity-80 transition-opacity duration-500`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
