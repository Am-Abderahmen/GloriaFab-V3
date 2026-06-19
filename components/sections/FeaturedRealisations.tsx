"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { realisations } from "@/data/realisations";

export default function FeaturedRealisations() {
  const t = useTranslations("home");
  const locale = useLocale();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const featured = realisations.filter((r) => r.featured).slice(0, 6);

  return (
    <section className="bg-[#0a0a0a] py-24 md:py-32" ref={ref}>
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#c9a84c]" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-[#c9a84c]">
                Portfolio
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-light text-[#f5f2ed] leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("featuredTitle")}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Link
              href={`/${locale}/realisations`}
              className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#c9a84c] border-b border-[#c9a84c]/40 pb-1 hover:border-[#c9a84c] transition-colors duration-200 group"
            >
              {t("featuredBtn")}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden cursor-pointer"
              style={{ aspectRatio: i === 0 ? "3/4" : i === 1 ? "3/4" : "3/4" }}
            >
              {/* Image */}
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.images[0]}')` }}
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-[#0a0a0a]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#c9a84c] mb-2 block">
                  {item.category}
                </span>
                <h3
                  className="text-xl font-light text-[#f5f2ed] leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.name}
                </h3>
              </div>

              {/* Hover CTA */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 border border-[#c9a84c] flex items-center justify-center">
                  <ArrowRight size={12} className="text-[#c9a84c]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
