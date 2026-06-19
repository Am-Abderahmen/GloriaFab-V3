"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const locales = ["fr", "en", "it"];

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLocalePath = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/") || `/${newLocale}`;
  };

  const navLinks = [
    { key: "home", href: `/${locale}` },
    { key: "about", href: `/${locale}/about` },
    { key: "realisations", href: `/${locale}/realisations` },
    { key: "contact", href: `/${locale}/contact` },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <div className="flex flex-col leading-none">
              <span
                className="text-2xl md:text-3xl font-light tracking-[0.15em] text-[#f5f2ed] group-hover:text-[#c9a84c] transition-colors duration-300"
                style={{ fontFamily: "var(--font-display)" }}
              >
                GLORIA
                <span className="text-[#c9a84c]">FAB</span>
              </span>
              <span className="text-[8px] tracking-[0.3em] text-[#9a9590] uppercase mt-0.5">
                Textile · Tunisia
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                className={`text-xs tracking-[0.2em] uppercase transition-colors duration-200 ${
                  pathname === href
                    ? "text-[#c9a84c]"
                    : "text-[#f5f2ed]/70 hover:text-[#f5f2ed]"
                }`}
              >
                {t(key)}
              </Link>
            ))}
          </nav>

          {/* Right: lang + CTA */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Language switcher */}
            <div className="flex items-center gap-1">
              {locales.map((loc, i) => (
                <span key={loc} className="flex items-center">
                  <Link
                    href={getLocalePath(loc)}
                    className={`text-[10px] tracking-[0.2em] uppercase transition-colors duration-200 px-1 ${
                      locale === loc
                        ? "text-[#c9a84c]"
                        : "text-[#9a9590] hover:text-[#f5f2ed]"
                    }`}
                  >
                    {loc.toUpperCase()}
                  </Link>
                  {i < locales.length - 1 && (
                    <span className="text-[#9a9590] text-[8px]">/</span>
                  )}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Link
              href={`/${locale}/contact#start-project`}
              className="text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 bg-[#c9a84c] text-[#0a0a0a] font-medium hover:bg-[#e4c97e] transition-colors duration-200"
            >
              {t("cta")}
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-[#f5f2ed] p-2"
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-xl flex flex-col pt-24 px-8"
          >
            <nav className="flex flex-col gap-8 mb-12">
              {navLinks.map(({ key, href }) => (
                <Link
                  key={key}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl font-light text-[#f5f2ed] hover:text-[#c9a84c] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t(key)}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4 mb-8">
              {locales.map((loc) => (
                <Link
                  key={loc}
                  href={getLocalePath(loc)}
                  onClick={() => setMenuOpen(false)}
                  className={`text-xs tracking-[0.2em] uppercase px-3 py-1 border ${
                    locale === loc
                      ? "border-[#c9a84c] text-[#c9a84c]"
                      : "border-white/20 text-[#9a9590]"
                  }`}
                >
                  {loc.toUpperCase()}
                </Link>
              ))}
            </div>

            <Link
              href={`/${locale}/contact#start-project`}
              onClick={() => setMenuOpen(false)}
              className="w-full text-center text-xs tracking-[0.25em] uppercase py-4 bg-[#c9a84c] text-[#0a0a0a] font-medium"
            >
              {t("cta")}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
