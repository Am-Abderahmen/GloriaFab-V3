"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function PresentationSection() {
  const t = useTranslations("home");
  const locale = useLocale();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#f5f2ed] py-24 md:py-32" ref={ref}>
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#c9a84c]" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-[#c9a84c]">
                GloriaFab
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-light text-[#0a0a0a] leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("presentTitle")}
            </h2>

            <div className="w-12 h-px bg-[#c9a84c] mb-8" />

            <p className="text-base text-[#2a2825]/70 leading-relaxed mb-10">
              {t("presentText")}
            </p>

            <Link
              href={`/${locale}/about`}
              className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#0a0a0a] border-b border-[#c9a84c] pb-1 hover:text-[#c9a84c] transition-colors duration-200 group"
            >
              {t("presentBtn")}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right: Visual accent */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative h-[420px] overflow-hidden">
              {/* PLACEHOLDER — Replace with real GloriaFab workshop image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/20 to-transparent" />
            </div>

            {/* Gold accent frame */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-[#c9a84c]/30 pointer-events-none" />
            <div className="absolute -top-4 -left-4 w-20 h-20 border border-[#c9a84c]/20 pointer-events-none" />

            {/* Stats badge */}
            <div className="absolute bottom-8 left-8 bg-[#0a0a0a]/90 backdrop-blur-sm px-6 py-4">
              <p
                className="text-3xl font-light text-[#c9a84c]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                100%
              </p>
              <p className="text-xs tracking-widest text-[#f5f2ed]/60 uppercase mt-1">
                Made in Tunisia
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
