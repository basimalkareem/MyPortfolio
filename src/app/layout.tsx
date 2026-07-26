import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://basimalkareem.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "S. Basim Al Kareem | Frontend Developer",
    template: "%s | S. Basim Al Kareem",
  },
  description:
    "Frontend Developer with 6+ years building scalable Angular, React, and Next.js applications — payments, SEO, and user-centric UI.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
    "Basim Al Kareem",
    "Portfolio",
  ],
  authors: [{ name: "S. Basim Al Kareem" }],
  creator: "S. Basim Al Kareem",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: "S. Basim Al Kareem | Frontend Developer",
    description:
      "6+ years shipping scalable web apps with React, Next.js, Angular, Stripe, and SEO.",
    siteName: "Basim Al Kareem Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "S. Basim Al Kareem | Frontend Developer",
    description:
      "6+ years shipping scalable web apps with React, Next.js, Angular, Stripe, and SEO.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeInitScript = `
(() => {
  try {
    const stored = localStorage.getItem('theme');
    const theme = stored === 'light' || stored === 'dark' ? stored : 'light';
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
  } catch (_) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} h-full`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
