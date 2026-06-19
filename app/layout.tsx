// Root layout — minimal shell required by Next.js App Router.
// The actual <html> and <body> are rendered by app/[locale]/layout.tsx.
// globals.css is imported there to avoid duplication.

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
