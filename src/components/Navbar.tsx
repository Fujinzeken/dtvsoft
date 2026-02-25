"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Our Services", href: "#services" },
  { label: "Our Platform", href: "#platform" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-nav" : "glass-nav-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-[5%]">
          <div className="flex h-18 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <span className="text-2xl font-bold tracking-tight flex items-center">
                <span className="bg-white text-navy-950 px-1.5 py-0.5 rounded">
                  dtv
                </span>
                <span className="text-white ml-1">soft</span>
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-navy-300 transition-colors duration-200 hover:text-white group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-500 rounded-full transition-all duration-300 group-hover:w-6" />
                </a>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://app.dtvsoft.com/login"
                className="px-5 py-2 text-sm font-medium text-navy-300 hover:text-white transition-colors duration-200"
              >
                Log in
              </a>
              <a
                href="https://app.dtvsoft.com/register"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30"
              >
                Sign up
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col items-end gap-1.5">
                <span
                  className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                    mobileOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
                  }`}
                />
                <span
                  className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                    mobileOpen ? "w-0 opacity-0" : "w-4"
                  }`}
                />
                <span
                  className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                    mobileOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-navy-900/95 backdrop-blur-xl border-l border-white/5"
            >
              <div className="flex flex-col p-8 pt-24 gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-base font-medium text-navy-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
                  >
                    {link.label}
                  </motion.a>
                ))}

                <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-white/5">
                  <a
                    href="https://app.dtvsoft.com/login"
                    className="px-4 py-3 text-center text-sm font-medium text-navy-300 hover:text-white border border-white/10 rounded-lg transition-colors duration-200"
                  >
                    Log in
                  </a>
                  <a
                    href="https://app.dtvsoft.com/register"
                    className="px-4 py-3 text-center text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all duration-200"
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
