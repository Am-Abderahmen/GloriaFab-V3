"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutContent() {
  const t = useTranslations("about");
  const locale = useLocale();
  const savoirItems = t.raw("savoirItems") as string[];
  const whyItems = t.raw("whyItems") as { title: string; text: string }[];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=1600&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 to-[#0a0a0a]/90" />
          {/* Gold geometric accent */}
          <div className="absolute top-1/3 right-20 w-px h-40 bg-gradient-to-b from-transparent via-[#c9a84c]/30 to-transparent" />
          <div className="absolute top-1/3 right-28 w-px h-28 bg-gradient-to-b from-transparent via-[#c9a84c]/15 to-transparent" />
        </div>

        <div className="relative max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 pb-20 md:pb-28 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#c9a84c]" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-[#c9a84c]">
                À propos
              </span>
            </div>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-light text-[#f5f2ed] leading-[1.05] max-w-4xl mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("heroTitle")}
            </h1>
            <p className="text-base md:text-lg text-[#9a9590] max-w-2xl leading-relaxed">
              {t("heroSubtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* El Guettar — land of memory */}
      <section className="bg-[#f5f2ed] py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
          <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-[#c9a84c]" />
                  <span className="text-[10px] tracking-[0.35em] uppercase text-[#c9a84c]">
                    El Guettar
                  </span>
                </div>
                <h2
                  className="text-3xl md:text-4xl font-light text-[#0a0a0a] leading-tight mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t("guettarTitle")}
                </h2>
                <div className="w-12 h-px bg-[#c9a84c] mb-8" />
                <p className="text-base text-[#2a2825]/70 leading-relaxed mb-4">
                  {t("guettarText")}
                </p>
                <p className="text-xs text-[#9a9590] italic">{t("guettarNote")}</p>
              </div>

              <div className="relative">
                <div className="h-[400px] overflow-hidden">
                  {/* PLACEHOLDER — Replace with real El Guettar landscape photo */}
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=900&q=80')",
                    }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#c9a84c]/20" />
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* Mountain and oasis */}
      <section className="bg-[#0a0a0a] py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
          <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Images */}
              <div className="grid grid-cols-2 gap-3">
                <div className="h-56 overflow-hidden">
                  {/* PLACEHOLDER — Mountain photo */}
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80')",
                    }}
                  />
                </div>
                <div className="h-56 overflow-hidden mt-8">
                  {/* PLACEHOLDER — Oasis photo */}
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=600&q=80')",
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-[#c9a84c]" />
                  <span className="text-[10px] tracking-[0.35em] uppercase text-[#c9a84c]">
                    Territoire
                  </span>
                </div>
                <h2
                  className="text-3xl md:text-4xl font-light text-[#f5f2ed] leading-tight mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t("mountainTitle")}
                </h2>
                <div className="w-12 h-px bg-[#c9a84c] mb-8" />
                <p className="text-base text-[#9a9590] leading-relaxed">
                  {t("mountainText")}
                </p>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* Craft to modern */}
      <section className="bg-[#111010] py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
          <Section>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#c9a84c]" />
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#c9a84c]">
                  Savoir-faire
                </span>
                <div className="w-8 h-px bg-[#c9a84c]" />
              </div>
              <h2
                className="text-3xl md:text-5xl font-light text-[#f5f2ed] leading-tight mb-6 max-w-3xl mx-auto"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("craftTitle")}
              </h2>
              <p className="text-base text-[#9a9590] leading-relaxed max-w-2xl mx-auto">
                {t("craftText")}
              </p>
            </div>

            {/* Two column visuals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="relative h-72 overflow-hidden group">
                {/* PLACEHOLDER — El Guettar artisan photo */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=900&q=80')",
                  }}
                />
                <div className="absolute bottom-4 left-4">
                  <span className="text-[9px] tracking-[0.3em] uppercase text-[#c9a84c] bg-[#0a0a0a]/70 px-3 py-1">
                    Artisanat local
                  </span>
                </div>
              </div>
              <div className="relative h-72 overflow-hidden group">
                {/* PLACEHOLDER — GloriaFab workshop photo */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=80')",
                  }}
                />
                <div className="absolute bottom-4 left-4">
                  <span className="text-[9px] tracking-[0.3em] uppercase text-[#c9a84c] bg-[#0a0a0a]/70 px-3 py-1">
                    Atelier GloriaFab
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p
                className="text-2xl md:text-3xl font-light italic text-[#c9a84c]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                &ldquo;{t("craftPhrase")}&rdquo;
              </p>
            </div>
          </Section>
        </div>
      </section>

      {/* Birth of GloriaFab */}
      <section className="bg-[#f5f2ed] py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
          <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-[#c9a84c]" />
                  <span className="text-[10px] tracking-[0.35em] uppercase text-[#c9a84c]">
                    Histoire
                  </span>
                </div>
                <h2
                  className="text-3xl md:text-4xl font-light text-[#0a0a0a] leading-tight mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t("birthTitle")}
                </h2>
                <div className="w-12 h-px bg-[#c9a84c] mb-8" />
                <p className="text-base text-[#2a2825]/70 leading-relaxed">
                  {t("birthText")}
                </p>
              </div>

              <div className="relative">
                <div className="h-[420px] overflow-hidden">
                  {/* PLACEHOLDER — GloriaFab founding image / team photo */}
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=900&q=80')",
                    }}
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-24 h-24 border border-[#c9a84c]/20" />
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* Savoir-faire today */}
      <section className="bg-[#0a0a0a] py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
          <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-[#c9a84c]" />
                  <span className="text-[10px] tracking-[0.35em] uppercase text-[#c9a84c]">
                    Aujourd&apos;hui
                  </span>
                </div>
                <h2
                  className="text-3xl md:text-4xl font-light text-[#f5f2ed] leading-tight mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t("savoirTitle")}
                </h2>
                <div className="w-12 h-px bg-[#c9a84c] mb-8" />
              </div>

              <div className="flex flex-col justify-center">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {savoirItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-4 h-4 border border-[#c9a84c]/40 flex items-center justify-center mt-0.5 shrink-0">
                        <div className="w-1.5 h-1.5 bg-[#c9a84c]" />
                      </div>
                      <span className="text-sm text-[#f5f2ed]/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* Why GloriaFab */}
      <section className="bg-[#111010] py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
          <Section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#c9a84c]" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-[#c9a84c]">
                Nos engagements
              </span>
            </div>
            <h2
              className="text-3xl md:text-5xl font-light text-[#f5f2ed] leading-tight mb-16 max-w-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("whyTitle")}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.7 }}
                  className="border border-white/8 p-7 hover:border-[#c9a84c]/30 transition-colors duration-300"
                >
                  <div className="w-8 h-px bg-[#c9a84c] mb-5" />
                  <h3
                    className="text-lg font-light text-[#f5f2ed] mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#9a9590] leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-24 md:py-28 text-center"
        style={{
          background: "linear-gradient(135deg, #0f0c05 0%, #1a1508 50%, #0f0c05 100%)",
        }}
      >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
          <Section>
            <h2
              className="text-3xl md:text-5xl font-light text-[#f5f2ed] mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("ctaTitle")}
            </h2>
            <Link
              href={`/${locale}/contact#start-project`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a84c] text-[#0a0a0a] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#e4c97e] transition-colors"
            >
              {t("ctaBtn")}
              <ArrowRight size={14} />
            </Link>
          </Section>
        </div>
      </section>
    </>
  );
}
