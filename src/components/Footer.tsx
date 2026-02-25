import Link from "next/link";

const footerLinks = {
  Navigation: [
    { label: "Our Services", href: "#services" },
    { label: "Our Platform", href: "#platform" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  Account: [
    { label: "Sign up", href: "https://app.dtvsoft.com/register" },
    { label: "Log in", href: "https://app.dtvsoft.com/login" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-[5%] py-16">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Brand Column */}
          <div className="md:max-w-sm">
            <Link href="/" className="flex items-center mb-5">
              <span className="text-2xl font-bold italic tracking-tight flex items-center">
                <span className="bg-white text-navy-950 px-1.5 py-0.5 rounded">
                  dtv
                </span>
                <span className="text-white ml-1">soft</span>
              </span>
            </Link>
            <p className="text-sm text-navy-400 leading-relaxed max-w-sm mb-6">
              Simplify operations, improve accuracy, and optimize profits with
              our all-in-one solution for carrier companies.
            </p>
            <a
              href="mailto:info@dtvsoft.com"
              className="inline-flex items-center gap-2 text-sm text-navy-400 hover:text-blue-400 transition-colors duration-200"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              info@dtvsoft.com
            </a>
          </div>

          {/* Link Columns — pushed to the right */}
          <div className="ml-auto flex gap-16">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-navy-400 mb-5">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-navy-300 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-white/5 flex items-center justify-center sm:justify-start">
          <p className="text-xs text-navy-400">
            &copy; {new Date().getFullYear()} DTV Soft. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
