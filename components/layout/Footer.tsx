"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { siteConfig } from "@/data/site";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { LinkedInIcon, FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";

const locales = ["fr", "en", "it"];

export default function Footer() {
  const t = useTranslations("nav");
  const tf = useTranslations("footer");
  const locale = useLocale();

  const navLinks = [
    { key: "home", href: `/${locale}` },
    { key: "about", href: `/${locale}/about` },
    { key: "realisations", href: `/${locale}/realisations` },
    { key: "contact", href: `/${locale}/contact` },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/8">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href={`/${locale}`} className="inline-block mb-4">
              <div className="flex flex-col leading-none">
                <span
                  className="text-2xl font-light tracking-[0.15em] text-[#f5f2ed]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  GLORIA<span className="text-[#c9a84c]">FAB</span>
                </span>
                <span className="text-[8px] tracking-[0.3em] text-[#9a9590] uppercase mt-0.5">
                  Textile · Tunisia
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#9a9590] leading-relaxed max-w-xs mt-4">
              {tf("tagline")}
            </p>
            <div className="flex gap-4 mt-6">
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer"
                className="text-[#9a9590] hover:text-[#c9a84c] transition-colors" aria-label="LinkedIn">
                <LinkedInIcon size={16} />
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer"
                className="text-[#9a9590] hover:text-[#c9a84c] transition-colors" aria-label="Facebook">
                <FacebookIcon size={16} />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer"
                className="text-[#9a9590] hover:text-[#c9a84c] transition-colors" aria-label="Instagram">
                <InstagramIcon size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#c9a84c] mb-5">
              {tf("quickLinks")}
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map(({ key, href }) => (
                <Link key={key} href={href}
                  className="text-sm text-[#9a9590] hover:text-[#f5f2ed] transition-colors">
                  {t(key)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#c9a84c] mb-5">
              {tf("contactUs")}
            </p>
            <div className="flex flex-col gap-3">
              <a href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-sm text-[#9a9590] hover:text-[#f5f2ed] transition-colors">
                <Mail size={13} />{siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 text-sm text-[#9a9590] hover:text-[#f5f2ed] transition-colors">
                <Phone size={13} />{siteConfig.phone}
              </a>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-[#9a9590] hover:text-[#c9a84c] transition-colors">
                <MessageCircle size={13} />WhatsApp
              </a>
            </div>
            <div className="flex gap-3 mt-8">
              {locales.map((loc) => (
                <Link key={loc} href={`/${loc}`}
                  className="text-[10px] tracking-[0.2em] uppercase text-[#9a9590] hover:text-[#c9a84c] transition-colors">
                  {loc.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#9a9590]/60">
            © {new Date().getFullYear()} GloriaFab. {tf("rights")}
          </p>
          <p className="text-xs text-[#9a9590]/40">
            {siteConfig.address.line1}, {siteConfig.address.line2}
          </p>
        </div>
      </div>
    </footer>
  );
}
