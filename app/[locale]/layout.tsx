import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

// Self-hosted fonts via @fontsource — no network request at build or runtime.
// Works on any hosting provider, any CI environment, offline.
import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/300-italic.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/dm-sans/300.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";

import "../globals.css";

// ── Per-locale SEO metadata
type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const localeDescriptions: Record<string, string> = {
  fr: "GloriaFab — Atelier de confection textile en Tunisie. Vêtements, lingerie, uniformes, sportswear.",
  en: "GloriaFab — Textile manufacturing workshop in Tunisia. Garments, lingerie, uniforms, sportswear.",
  it: "GloriaFab — Atelier di confezione tessile in Tunisia. Abbigliamento, lingerie, uniformi, sportswear.",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: {
      default: "GloriaFab",
      template: "%s — GloriaFab",
    },
    description: localeDescriptions[locale] ?? localeDescriptions.fr,
    openGraph: {
      siteName: "GloriaFab",
      locale,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "fr" | "en" | "it")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="grain-overlay">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
