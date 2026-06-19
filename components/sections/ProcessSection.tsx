"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ProcessSection() {
  const t = useTranslations("home");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const steps = t.raw("processSteps") as string[];

  return (
    <section className="bg-[#111010] py-24 md:py-32 overflow-hidden" ref={ref}>
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#c9a84c]" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-[#c9a84c]">
                Processus
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-light text-[#f5f2ed] leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("processTitle")}
            </h2>
            <div className="w-12 h-px bg-[#c9a84c] mb-8" />
            <p className="text-base text-[#9a9590] leading-relaxed">
              {t("processText")}
            </p>
          </motion.div>

          {/* Right: steps */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#c9a84c]/40 via-[#c9a84c]/20 to-transparent" />

            <div className="flex flex-col gap-0">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.12 + 0.3, duration: 0.7 }}
                  className="flex items-center gap-6 py-5 pl-12 relative group"
                >
                  {/* Step dot */}
                  <div className="absolute left-0 w-9 h-9 border border-[#c9a84c]/30 flex items-center justify-center group-hover:border-[#c9a84c]/70 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]/60 group-hover:bg-[#c9a84c] transition-colors" />
                  </div>

                  {/* Step number + text */}
                  <div className="flex items-center gap-4">
                    <span
                      className="text-4xl font-light text-[#c9a84c]/20 leading-none"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-[#f5f2ed]/70 group-hover:text-[#f5f2ed] transition-colors tracking-wide">
                      {step}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
