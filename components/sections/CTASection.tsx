"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function CTASection() {
  const t = useTranslations("home");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative py-28 md:py-36 overflow-hidden"
      ref={ref}
      style={{
        background:
          "linear-gradient(135deg, #0f0c05 0%, #1a1508 50%, #0f0c05 100%)",
      }}
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Large decorative letter */}
      <div
        className="absolute -right-8 top-1/2 -translate-y-1/2 text-[300px] font-light leading-none text-[#c9a84c]/3 pointer-events-none select-none hidden lg:block"
        style={{ fontFamily: "var(--font-display)" }}
      >
        G
      </div>

      <div className="relative max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#c9a84c]" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#c9a84c]">
              Contact
            </span>
            <div className="w-8 h-px bg-[#c9a84c]" />
          </div>

          <h2
            className="text-4xl md:text-6xl font-light text-[#f5f2ed] leading-tight mb-4 max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("ctaTitle")}
          </h2>

          <p className="text-base text-[#9a9590] mb-12 max-w-xl mx-auto leading-relaxed">
            {t("ctaSubtitle")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-3 px-7 py-4 bg-[#c9a84c] text-[#0a0a0a] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#e4c97e] transition-colors"
            >
              <Mail size={14} />
              {t("ctaEmail")}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 border border-[#c9a84c]/40 text-[#c9a84c] text-xs tracking-[0.2em] uppercase hover:bg-[#c9a84c]/10 transition-colors"
            >
              <MessageCircle size={14} />
              {t("ctaWhatsapp")}
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-3 px-7 py-4 border border-white/10 text-[#9a9590] text-xs tracking-[0.2em] uppercase hover:border-white/30 hover:text-[#f5f2ed] transition-colors"
            >
              <Phone size={14} />
              {t("ctaCall")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
