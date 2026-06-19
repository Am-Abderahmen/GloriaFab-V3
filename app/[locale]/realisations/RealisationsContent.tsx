"use client";

import { useState, useCallback, useMemo } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MessageCircle, SlidersHorizontal } from "lucide-react";
import {
  realisations,
  type Realisation,
  type RealisationCategory,
  type RealisationAudience,
} from "@/data/realisations";
import { siteConfig } from "@/data/site";

type Filter = "all" | RealisationCategory;
// "unisexe" in the UI also matches the "b2b" audience value in the data
// (label shown to visitors is "Unisexe / B2B" — see messages/*.json)
type AudienceFilter = "all" | RealisationAudience;

export default function RealisationsContent() {
  const t = useTranslations("realisations");
  const [filter, setFilter] = useState<Filter>("all");
  const [audienceFilter, setAudienceFilter] = useState<AudienceFilter>("all");
  const [selected, setSelected] = useState<Realisation | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categories: { key: Filter; label: string }[] = [
    { key: "all", label: t("filters.all") },
    { key: "vetements", label: t("filters.vetements") },
    { key: "lingerie", label: t("filters.lingerie") },
    { key: "travail", label: t("filters.travail") },
    { key: "sport", label: t("filters.sport") },
    { key: "uniformes", label: t("filters.uniformes") },
    { key: "maison", label: t("filters.maison") },
  ];

  const audiences: { key: AudienceFilter; label: string }[] = [
    { key: "all", label: t("filters.all") },
    { key: "homme", label: t("audience.homme") },
    { key: "femme", label: t("audience.femme") },
    { key: "enfant", label: t("audience.enfant") },
    { key: "unisexe", label: t("audience.unisexe") },
    { key: "maison", label: t("audience.maison") },
  ];

  // "unisexe" filter button matches both "unisexe" and "b2b" data values,
  // since the visible label is "Unisexe / B2B".
  const matchesAudience = (item: Realisation, value: AudienceFilter) => {
    if (value === "all") return true;
    if (value === "unisexe") return item.audience === "unisexe" || item.audience === "b2b";
    return item.audience === value;
  };

  const filtered = useMemo(
    () =>
      realisations.filter((r) => {
        const catOk = filter === "all" || r.category === filter;
        const audOk = matchesAudience(r, audienceFilter);
        return catOk && audOk;
      }),
    [filter, audienceFilter]
  );

  const activeFilterCount =
    (filter !== "all" ? 1 : 0) + (audienceFilter !== "all" ? 1 : 0);

  const openModal = useCallback((item: Realisation) => {
    setSelected(item);
    setPhotoIndex(0);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setSelected(null);
    document.body.style.overflow = "";
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-16 bg-[#0a0a0a] overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              rgba(201,168,76,0.3) 0px,
              rgba(201,168,76,0.3) 1px,
              transparent 1px,
              transparent 40px
            )`,
          }}
        />
        <div className="relative max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#c9a84c]" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-[#c9a84c]">
                Portfolio
              </span>
            </div>
            <h1
              className="text-4xl md:text-6xl font-light text-[#f5f2ed] leading-tight mb-6 max-w-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("heroTitle")}
            </h1>
            <p className="text-base text-[#9a9590] max-w-2xl leading-relaxed mb-8">
              {t("heroSubtitle")}
            </p>
            <p className="text-sm text-[#9a9590]/60 max-w-2xl leading-relaxed border-l-2 border-[#c9a84c]/30 pl-4 italic">
              {t("intro")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mobile filter trigger — visible below lg only */}
      <div className="lg:hidden sticky top-[64px] z-30 bg-[#0a0a0a] border-b border-white/5">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-3">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-[#f5f2ed] border border-white/15 px-4 py-2.5 w-full justify-center hover:border-[#c9a84c]/50 transition-colors"
          >
            <SlidersHorizontal size={13} className="text-[#c9a84c]" />
            {t("filtersLabel")}
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#c9a84c] text-[#0a0a0a] text-[10px] flex items-center justify-center font-medium">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Main layout: sidebar (desktop) + grid */}
      <section className="bg-[#0a0a0a] py-10 md:py-16">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
            {/* ── Desktop sidebar filters ─────────────────────────── */}
            <aside className="hidden lg:block w-56 shrink-0">
              <div className="sticky top-28">
                <FilterGroup
                  title={t("categoryLabel")}
                  options={categories}
                  activeKey={filter}
                  onSelect={(key) => setFilter(key as Filter)}
                  primary
                />
                <div className="w-full h-px bg-white/8 my-8" />
                <FilterGroup
                  title={t("audienceLabel")}
                  options={audiences}
                  activeKey={audienceFilter}
                  onSelect={(key) => setAudienceFilter(key as AudienceFilter)}
                />
              </div>
            </aside>

            {/* ── Grid ─────────────────────────────────────────────── */}
            <div className="flex-1 min-w-0">
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
              >
                <AnimatePresence mode="popLayout">
                  {filtered.map((item) => (
                    <motion.article
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="group cursor-pointer"
                      onClick={() => openModal(item)}
                    >
                      <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                          style={{ backgroundImage: `url('${item.images[0]}')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                        <div className="absolute top-4 right-4 w-7 h-7 border border-[#c9a84c]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-[8px] tracking-wider text-[#c9a84c]">+</span>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <span className="text-[8px] tracking-[0.3em] uppercase text-[#c9a84c] mb-1 block">
                            {item.category} · {item.audience}
                          </span>
                          <h3
                            className="text-base font-light text-[#f5f2ed]"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {item.name}
                          </h3>
                        </div>

                        {item.images.length > 1 && (
                          <div className="absolute top-4 left-4 flex gap-1">
                            {item.images.map((_, i) => (
                              <div key={i} className="w-1 h-1 rounded-full bg-[#c9a84c]/60" />
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </motion.div>

              {filtered.length === 0 && (
                <div className="text-center py-24 text-[#9a9590]">
                  <p className="text-base">{t("emptyState")}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mobile filter drawer ─────────────────────────────────── */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm lg:hidden"
            onClick={(e) => e.target === e.currentTarget && setMobileFiltersOpen(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 left-0 right-0 bg-[#111010] border-t border-white/10 max-h-[80vh] overflow-y-auto rounded-t-2xl"
            >
              <div className="sticky top-0 bg-[#111010] flex items-center justify-between px-6 py-5 border-b border-white/8">
                <span className="text-sm tracking-[0.2em] uppercase text-[#f5f2ed]">
                  {t("filtersLabel")}
                </span>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-8 h-8 flex items-center justify-center text-[#9a9590] hover:text-[#f5f2ed]"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="px-6 py-6">
                <FilterGroup
                  title={t("categoryLabel")}
                  options={categories}
                  activeKey={filter}
                  onSelect={(key) => setFilter(key as Filter)}
                  primary
                  wrap
                />
                <div className="w-full h-px bg-white/8 my-6" />
                <FilterGroup
                  title={t("audienceLabel")}
                  options={audiences}
                  activeKey={audienceFilter}
                  onSelect={(key) => setAudienceFilter(key as AudienceFilter)}
                  wrap
                />

                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-full mt-8 py-4 bg-[#c9a84c] text-[#0a0a0a] text-xs tracking-[0.2em] uppercase font-medium"
                >
                  {filtered.length} {filtered.length === 1 ? t("resultsOne") : t("resultsMany")}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Realisation modal ────────────────────────────────────── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl flex items-center justify-center p-0 md:p-6"
            onClick={(e) => e.target === e.currentTarget && closeModal()}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-[#111010] border border-white/8 w-full h-full md:h-auto md:max-w-[90vw] md:max-h-[85vh] lg:max-w-[85vw] overflow-y-auto md:overflow-hidden"
            >
              {/* Close */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-[#0a0a0a]/70 backdrop-blur-sm border border-white/20 flex items-center justify-center text-[#9a9590] hover:text-[#f5f2ed] hover:border-white/40 transition-colors"
                aria-label={t("closeBtn")}
              >
                <X size={18} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 md:h-[85vh] md:max-h-[85vh]">
                {/* Left: Image gallery */}
                <div className="relative bg-[#0a0a0a] order-1">
                  <div
                    className="h-[50vh] md:h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${selected.images[photoIndex]}')` }}
                  />

                  {/* Thumbnails */}
                  {selected.images.length > 1 && (
                    <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2.5 px-4">
                      {selected.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setPhotoIndex(i)}
                          className={`w-12 h-12 md:w-14 md:h-14 bg-cover bg-center border-2 transition-all ${
                            i === photoIndex
                              ? "border-[#c9a84c]"
                              : "border-white/20 opacity-70 hover:opacity-100"
                          }`}
                          style={{ backgroundImage: `url('${img}')` }}
                          aria-label={`Photo ${i + 1}`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Nav arrows */}
                  {selected.images.length > 1 && (
                    <>
                      <button
                        onClick={() => setPhotoIndex((i) => Math.max(0, i - 1))}
                        disabled={photoIndex === 0}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#0a0a0a]/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-[#9a9590] disabled:opacity-20 hover:border-white/40 transition-colors"
                        aria-label={t("prevPhoto")}
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={() =>
                          setPhotoIndex((i) => Math.min(selected.images.length - 1, i + 1))
                        }
                        disabled={photoIndex === selected.images.length - 1}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#0a0a0a]/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-[#9a9590] disabled:opacity-20 hover:border-white/40 transition-colors"
                        aria-label={t("nextPhoto")}
                      >
                        <ChevronRight size={16} />
                      </button>
                    </>
                  )}
                </div>

                {/* Right: Info */}
                <div className="order-2 p-8 md:p-10 lg:p-12 flex flex-col justify-between overflow-y-auto">
                  <div>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] mb-4 block">
                      {selected.category} · {selected.audience}
                    </span>
                    <h2
                      className="text-3xl md:text-4xl font-light text-[#f5f2ed] mb-5 leading-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {selected.name}
                    </h2>
                    <div className="w-12 h-px bg-[#c9a84c] mb-7" />
                    <p className="text-base text-[#9a9590] leading-relaxed mb-8">
                      {selected.description}
                    </p>

                    {/* Optional details — hidden automatically if empty */}
                    <div className="space-y-3">
                      {selected.material && (
                        <div className="flex gap-3">
                          <span className="text-[9px] tracking-[0.2em] uppercase text-[#c9a84c] w-24 shrink-0 pt-0.5">
                            {t("material")}
                          </span>
                          <span className="text-sm text-[#9a9590]">{selected.material}</span>
                        </div>
                      )}
                      {selected.usage && (
                        <div className="flex gap-3">
                          <span className="text-[9px] tracking-[0.2em] uppercase text-[#c9a84c] w-24 shrink-0 pt-0.5">
                            {t("usage")}
                          </span>
                          <span className="text-sm text-[#9a9590]">{selected.usage}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-10">
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                        `Bonjour, je suis intéressé par une réalisation similaire à : ${selected.name}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full py-4 bg-[#c9a84c] text-[#0a0a0a] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#e4c97e] transition-colors"
                    >
                      <MessageCircle size={14} />
                      {t("modalBtn")}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Reusable vertical filter group — used in both the desktop sidebar
// and the mobile drawer.
// ─────────────────────────────────────────────────────────────────────────
function FilterGroup({
  title,
  options,
  activeKey,
  onSelect,
  primary = false,
  wrap = false,
}: {
  title: string;
  options: { key: string; label: string }[];
  activeKey: string;
  onSelect: (key: string) => void;
  primary?: boolean;
  wrap?: boolean;
}) {
  return (
    <div>
      <p className="text-[10px] tracking-[0.3em] uppercase text-[#9a9590]/60 mb-4">
        {title}
      </p>
      <div className={wrap ? "flex flex-wrap gap-2" : "flex flex-col gap-1"}>
        {options.map(({ key, label }) => {
          const active = activeKey === key;
          if (wrap) {
            // Mobile drawer — chip style
            return (
              <button
                key={key}
                onClick={() => onSelect(key)}
                className={`text-[10px] tracking-[0.15em] uppercase px-4 py-2.5 transition-all duration-200 ${
                  active
                    ? "bg-[#c9a84c] text-[#0a0a0a]"
                    : "border border-white/10 text-[#9a9590] hover:border-white/30 hover:text-[#f5f2ed]"
                }`}
              >
                {label}
              </button>
            );
          }
          // Desktop sidebar — vertical list style
          return (
            <button
              key={key}
              onClick={() => onSelect(key)}
              className={`text-left text-[11px] tracking-[0.1em] uppercase py-2.5 px-3 transition-all duration-200 border-l-2 ${
                active
                  ? "border-[#c9a84c] text-[#c9a84c] bg-[#c9a84c]/5"
                  : "border-transparent text-[#9a9590] hover:text-[#f5f2ed] hover:border-white/20"
              } ${primary ? "" : ""}`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
