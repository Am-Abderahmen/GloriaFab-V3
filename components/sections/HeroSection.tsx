"use client";

import { useRef } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const t = useTranslations("home");
  const locale = useLocale();

  /*
   * VIDEO INSTRUCTIONS
   * ------------------
   * 1. Place your video at: public/videos/hero-textile.mp4
   *    Recommended: also provide public/videos/hero-textile.webm for wider browser support.
   * 2. Uncomment the <video> block below and remove the placeholder <div> background image.
   * 3. Recommended encoding: H.264, max 1920px wide, CRF 28, ~10–20 MB.
   *
   * videoRef is kept here so the <video> block can be uncommented without
   * any further code changes. Remove this comment once the video is live.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">

      {/* ── Background ──────────────────────────────────────── */}
      <div className="absolute inset-0 bg-[#0a0a0a]">

        {/* Base gradient — always visible */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #0a0a0a 0%, #1a1508 30%, #0f0d08 60%, #0a0a0a 100%)",
          }}
        />

        {/*
         * ── PLACEHOLDER HERO IMAGE ──────────────────────────
         * Replace this div with the <video> block below once
         * you have the real textile manufacturing video.
         */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1800&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/*
         * ── HERO VIDEO (uncomment when ready) ───────────────
         * <video
         *   ref={videoRef}
         *   autoPlay
         *   muted
         *   loop
         *   playsInline
         *   className="absolute inset-0 w-full h-full object-cover opacity-60"
         *   src="/videos/hero-textile.mp4"
         * >
         *   <source src="/videos/hero-textile.webm" type="video/webm" />
         *   <source src="/videos/hero-textile.mp4"  type="video/mp4" />
         * </video>
         */}

        {/* Subtle woven-fabric texture overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(201,168,76,0.15) 2px, rgba(201,168,76,0.15) 3px),
              repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(201,168,76,0.08) 8px, rgba(201,168,76,0.08) 9px)
            `,
          }}
        />

        {/* Directional gradient overlays for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-[#0a0a0a]/30 to-[#0a0a0a]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/30" />
      </div>

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 pb-20 md:pb-28">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-px bg-[#c9a84c]" />
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#c9a84c]">
            El Guettar, Tunisie
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.05] text-[#f5f2ed] max-w-5xl mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t("heroTitle")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-base md:text-lg text-[#f5f2ed]/60 max-w-xl mb-10 leading-relaxed"
        >
          {t("heroSubtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href={`/${locale}/realisations`}
            className="inline-flex items-center gap-2 px-7 py-4 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.2em] uppercase hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-all duration-300"
          >
            {t("heroBtn1")}
          </Link>
          <Link
            href={`/${locale}/contact#start-project`}
            className="inline-flex items-center gap-2 px-7 py-4 bg-[#c9a84c] text-[#0a0a0a] text-xs tracking-[0.2em] uppercase hover:bg-[#e4c97e] transition-all duration-300"
          >
            {t("heroBtn2")}
          </Link>
        </motion.div>
      </div>

      {/* ── Scroll indicator ────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
      >
        <span className="text-[8px] tracking-[0.3em] uppercase text-[#9a9590] rotate-90 mb-2">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-[#9a9590]" />
        </motion.div>
      </motion.div>

      {/* Bottom gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
    </section>
  );
}
