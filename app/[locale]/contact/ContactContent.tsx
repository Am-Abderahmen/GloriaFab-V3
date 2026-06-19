"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, MapPin, ExternalLink } from "lucide-react";
import { LinkedInIcon, FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/data/site";

export default function ContactContent() {
  const t = useTranslations("contact");

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `linear-gradient(rgba(201,168,76,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.8) 1px, transparent 1px)`, backgroundSize: "80px 80px" }} />
        <div className="relative max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#c9a84c]" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-[#c9a84c]">Contact</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-[#f5f2ed] leading-tight mb-6 max-w-4xl"
              style={{ fontFamily: "var(--font-display)" }}>
              {t("heroTitle")}
            </h1>
            <p className="text-base text-[#9a9590] max-w-2xl leading-relaxed">{t("heroSubtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Direct contact */}
      <section id="start-project" className="bg-[#f5f2ed] py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#c9a84c]" />
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#c9a84c]">Nous contacter</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-[#0a0a0a] leading-tight mb-6"
                style={{ fontFamily: "var(--font-display)" }}>
                {t("directTitle")}
              </h2>
              <div className="w-12 h-px bg-[#c9a84c] mb-8" />
              <p className="text-base text-[#2a2825]/70 leading-relaxed mb-10">{t("directText")}</p>
              <div className="flex flex-col gap-4">
                <a href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 px-7 py-4 bg-[#c9a84c] text-[#0a0a0a] hover:bg-[#e4c97e] transition-colors">
                  <Mail size={16} />
                  <div>
                    <p className="text-[9px] tracking-[0.25em] uppercase mb-0.5 opacity-70">Email</p>
                    <p className="text-sm font-medium">{siteConfig.email}</p>
                  </div>
                </a>
                <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 px-7 py-4 bg-[#0a0a0a] text-[#f5f2ed] hover:bg-[#1a1a1a] transition-colors">
                  <MessageCircle size={16} className="text-[#c9a84c]" />
                  <div>
                    <p className="text-[9px] tracking-[0.25em] uppercase mb-0.5 text-[#9a9590]">WhatsApp</p>
                    <p className="text-sm font-medium">{t("whatsappBtn")}</p>
                  </div>
                </a>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-4 px-7 py-4 border border-[#0a0a0a]/10 text-[#0a0a0a] hover:bg-[#0a0a0a]/5 transition-colors">
                  <Phone size={16} className="text-[#c9a84c]" />
                  <div>
                    <p className="text-[9px] tracking-[0.25em] uppercase mb-0.5 text-[#9a9590]">Téléphone</p>
                    <p className="text-sm font-medium">{siteConfig.phone}</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Address + map */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.2 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#c9a84c]" />
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#c9a84c]">{t("addressTitle")}</span>
              </div>
              <div className="flex items-start gap-3 mb-6">
                <MapPin size={16} className="text-[#c9a84c] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-[#0a0a0a]">{siteConfig.address.line1}</p>
                  <p className="text-sm text-[#9a9590]">{siteConfig.address.line2}</p>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="relative h-64 overflow-hidden mb-4"
                style={{ background: "linear-gradient(135deg, #111010, #1a1508)" }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={32} className="text-[#c9a84c] mx-auto mb-3" />
                    <p className="text-xs text-[#9a9590] tracking-wider">El Guettar, Gafsa, Tunisie</p>
                    <p className="text-[9px] text-[#9a9590]/40 mt-2 tracking-wider">
                      — Remplacer par l&apos;embed Google Maps réel —
                    </p>
                  </div>
                </div>
              </div>

              <a href={siteConfig.address.mapsUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#c9a84c] border-b border-[#c9a84c]/40 pb-1 hover:border-[#c9a84c] transition-colors">
                <ExternalLink size={12} />{t("directions")}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="bg-[#0a0a0a] py-16">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#c9a84c] mb-6">{t("socialTitle")}</p>
            <div className="flex gap-6">
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#9a9590] hover:text-[#c9a84c] transition-colors">
                <LinkedInIcon size={16} />LinkedIn
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#9a9590] hover:text-[#c9a84c] transition-colors">
                <FacebookIcon size={16} />Facebook
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#9a9590] hover:text-[#c9a84c] transition-colors">
                <InstagramIcon size={16} />Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center"
        style={{ background: "linear-gradient(135deg, #0f0c05 0%, #1a1508 50%, #0f0c05 100%)" }}>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl md:text-5xl font-light text-[#f5f2ed] mb-4"
              style={{ fontFamily: "var(--font-display)" }}>
              {t("ctaTitle")}
            </h2>
            <p className="text-base text-[#9a9590] mb-10">{t("ctaText")}</p>
            <a href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a84c] text-[#0a0a0a] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#e4c97e] transition-colors">
              <Mail size={14} />{t("emailBtn")}
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
