import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PresentationSection from "@/components/sections/PresentationSection";
import FeaturedRealisations from "@/components/sections/FeaturedRealisations";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return {
    title: "GloriaFab — Textile Manufacturing Tunisia",
    description: t("heroSubtitle"),
  };
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PresentationSection />
        <FeaturedRealisations />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
