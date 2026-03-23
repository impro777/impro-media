import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
                  review: [
                    {
                      "@type": "Review",
                      author: {
                        "@type": "Person",
                        name: "Eerik Oja",
                        jobTitle: "Co-founder",
                        worksFor: { "@type": "Organization", name: "Planet42" },
                      },
                      reviewBody:
                        "Aleksandrs rebuilt marketing tracking from the ground up, eliminating inefficiencies in paid user acquisition and more than doubling quality leads volume using paid media channels while staying within budgets.",
                    },
                    {
                      "@type": "Review",
                      author: {
                        "@type": "Person",
                        name: "Małgorzata Nęcka",
                        jobTitle: "Chief Marketing Officer",
                        worksFor: {
                          "@type": "Organization",
                          name: "NetCredit",
                        },
                      },
                      reviewBody:
                        "Alex developed a full conversion tracking system and technical documentation for our backend integration. His skills have repeatedly helped improve the company's results. Working with Alex is working with an absolute Professional Expert!",
                    },
                    {
                      "@type": "Review",
                      author: {
                        "@type": "Person",
                        name: "Roberts Bite",
                        jobTitle: "Chief Marketing Manager",
                        worksFor: {
                          "@type": "Organization",
                          name: "TWINO Group",
                        },
                      },
                      reviewBody:
                        "An exceptional expert in digital and growth marketing, whose opinion and insight have been highly valued by senior management.",
                    },
                    {
                      "@type": "Review",
                      author: {
                        "@type": "Person",
                        name: "Alexander Tsatkin",
                        jobTitle: "VP Mobile",
                        worksFor: {
                          "@type": "Organization",
                          name: "Matomy Media Group",
                        },
                      },
                      reviewBody:
                        "His expertise in media buying and optimization is one of the best around. He has been able to consistently hit high revenue numbers despite the changing landscape.",
                    },
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
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "0349919ca61a4fa0b882f158c6a14b98"}'
        />
      </body>
    </html>
  );
}
