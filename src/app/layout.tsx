import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://impro-media.com";
const title = "IM Pro - Performance Marketing for FinTech";
const description =
  "Solo performance marketing consultant specializing in Google Ads for fintech - lending, credit, and financial services. 15+ years experience, €30M+ ad spend managed across 8+ countries. Conversion tracking, analytics, lead quality optimization.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | IM Pro",
  },
  description,
  keywords: [
    "Google Ads",
    "fintech marketing",
    "performance marketing",
    "PPC",
    "Microsoft Ads",
    "Demand Gen",
    "Performance Max",
    "conversion tracking",
    "Google Tag Manager",
    "fintech PPC agency",
    "Google Ads for fintech",
    "lead quality optimization",
    "Google Ads for lending",
    "PPC for financial services",
    "conversion tracking setup fintech",
    "Google Ads consultant Europe",
    "analytics",
    "landing page optimization",
  ],
  authors: [{ name: "Aleksandrs Jelesins" }],
  creator: "IM Pro",
  openGraph: {
    title,
    description,
    url: "./",
    siteName: "IM Pro",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "IM Pro - Performance Marketing for FinTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ProfessionalService",
                  "@id": `${siteUrl}/#organization`,
                  name: "IM Pro",
                  url: siteUrl,
                  description,
                  founder: { "@id": `${siteUrl}/#person` },
                  areaServed: "Worldwide",
                  serviceType: [
                    "Google Ads Management",
                    "Microsoft Ads Management",
                    "Demand Gen Campaigns",
                    "Performance Max Campaigns",
                    "Conversion Tracking",
                    "Analytics & Reporting",
                    "Landing Page Optimization",
                    "Competitor Intelligence",
                  ],
                  knowsAbout: [
                    "FinTech Marketing",
                    "Performance Marketing",
                    "PPC",
                    "Lead Quality Optimization",
                    "Attribution Modeling",
                    "AI-Enhanced Ad Optimization",
                    "Online Lending",
                    "Credit Products",
                    "Neobank Marketing",
                    "Microfinance",
                    "Cost Per Acquisition Optimization",
                  ],
                },
                {
                  "@type": "Person",
                  "@id": `${siteUrl}/#person`,
                  name: "Aleksandrs Jelesins",
                  jobTitle: "Performance Marketing Specialist",
                  worksFor: { "@id": `${siteUrl}/#organization` },
                  sameAs: [
                    "https://www.linkedin.com/in/aleksandrsjelesins/",
                  ],
                  knowsAbout: [
                    "Google Ads",
                    "Microsoft Ads",
                    "Google Tag Manager",
                    "Conversion Tracking",
                    "FinTech Marketing",
                    "Performance Max",
                    "Demand Gen",
                    "Data Analytics",
                    "AI-Enhanced Marketing",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteUrl}/#website`,
                  url: siteUrl,
                  name: "IM Pro",
                  publisher: { "@id": `${siteUrl}/#organization` },
                },
              ],
            }),
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
