import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Outfit } from "next/font/google";
import { ThemeProvider, type Theme } from "@/components/theme/ThemeProvider";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const stored = cookieStore.get("theme")?.value;
  const theme: Theme = stored === "light" || stored === "dark" ? stored : "dark";

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${theme === "dark" ? "dark" : ""} h-full`}
      style={{ colorScheme: theme }}
      suppressHydrationWarning
    >
      <body className="min-h-full antialiased">
        <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
