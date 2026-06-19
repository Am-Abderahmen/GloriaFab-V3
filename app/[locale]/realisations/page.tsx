import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RealisationsContent from "./RealisationsContent";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "realisations" });
  return {
    title: "Réalisations — GloriaFab",
    description: t("heroSubtitle"),
  };
}

export default function RealisationsPage() {
  return (
    <>
      <Header />
      <main>
        <RealisationsContent />
      </main>
      <Footer />
    </>
  );
}
