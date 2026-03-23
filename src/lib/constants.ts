import {
  Search,
  Monitor,
  BarChart3,
  ScanLine,
  Binoculars,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";

export const COMPANY = {
  name: "IM Pro",
  domain: "impro-media.com",
  email: "hello@impro-media.com",
  foundedYear: 2010,
  location: "European Union",
  responseTime: "within 24 hours",
} as const;

export const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SERVICES: ServiceItem[] = [
  {
    icon: Search,
    title: "Google Ads",
    description:
      "More qualified leads from Search, Demand Gen, and Performance Max - without wasting budget on clicks that don't convert.",
  },
  {
    icon: ScanLine,
    title: "Conversion Tracking",
    description:
      "End-to-end measurement systems: Google Tag Manager, affiliate postbacks, and backend integrations. I write technical specs and work with your dev team to build tracking that captures real business outcomes.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Google Analytics, custom dashboards, data pipelines, and automated reporting. Make decisions based on facts, not gut feel.",
  },
  {
    icon: Monitor,
    title: "Microsoft Ads",
    description:
      "Tap into Bing's lower-competition market for additional reach and often cheaper conversions than Google.",
  },
  {
    icon: Binoculars,
    title: "Competitor Intelligence",
    description:
      "Analyze competitor messaging, positioning, and ad strategies. Find gaps and opportunities they're missing.",
  },
  {
    icon: FlaskConical,
    title: "Landing Page Optimization",
    description:
      "Audit and improve landing pages for higher conversion rates. From copy tweaks to full CRO redesigns.",
  },
];

export const PHILOSOPHY = [
  {
    num: "01",
    title: "Understand Goals",
    description:
      "Every engagement starts with your business objectives - revenue targets, unit economics, and growth constraints.",
  },
  {
    num: "02",
    title: "Audit & Inventory",
    description:
      "Analyze what you already have: accounts, tracking, data, creatives. Find gaps and quick wins before changing anything.",
  },
  {
    num: "03",
    title: "Design the Strategy",
    description:
      "Map out the changes needed - campaign structure, measurement architecture, budget allocation - with clear priorities.",
  },
  {
    num: "04",
    title: "Signal Quality",
    description:
      "Ad platforms are only as good as the data you feed them. I design and refine the conversion signals your campaigns optimize on - better data means better algorithmic decisions and a lasting edge over competitors.",
  },
  {
    num: "05",
    title: "Build & Measure",
    description:
      "Implement the system and instrument everything. If it can't be measured, it can't be improved.",
  },
  {
    num: "06",
    title: "Optimize & Scale",
    description:
      "Continuously refine based on real performance data, then scale what works across channels and markets.",
  },
] as const;

export const FINTECH_CLIENTS = [
  { name: "Planet42", logo: "/images/clients/planet42.png" },
  { name: "CreditPrime", logo: "/images/clients/creditprime.png" },
  { name: "Moneza", logo: "/images/clients/moneza.png" },
  { name: "Ezaem", logo: "/images/clients/ezaem.png" },
  { name: "NetCredit", logo: "/images/clients/netcredit.png" },
  { name: "Zing", logo: "/images/clients/zing.png" },
  { name: "TWINO", logo: "/images/clients/twino.png" },
] as const;

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  photo: string;
  text: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Eerik Oja",
    role: "Co-founder",
    company: "Planet42",
    photo: "/images/testimonials/eerik-oja.jpeg",
    text: "Aleksandrs rebuilt marketing tracking from the ground up, eliminating inefficiencies in paid user acquisition and more than doubling quality leads volume using paid media channels while staying within budgets.",
  },
  {
    name: "Małgorzata Nęcka",
    role: "Chief Marketing Officer",
    company: "NetCredit",
    photo: "/images/testimonials/malgorzata-necka.jpeg",
    text: "Alex developed a full conversion tracking system and technical documentation for our backend integration. His ability to work quickly under time pressure is very appreciable. His skills have repeatedly helped improve the company's results. Working with Alex is working with an absolute Professional Expert!",
  },
  {
    name: "Roberts Bite",
    role: "Chief Marketing Manager",
    company: "TWINO Group",
    photo: "/images/testimonials/roberts-bite.jpeg",
    text: "An exceptional expert in digital and growth marketing, whose opinion and insight have been highly valued by senior management. Willing and able to invest time in coaching digital teams, making them more self-sustainable and able to compete at the top level of the respective market.",
  },
  {
    name: "Alexander Tsatkin",
    role: "VP Mobile",
    company: "Matomy Media Group",
    photo: "/images/testimonials/alexander-tsatkin.jpeg",
    text: "He was crucial in helping build our mobile marketing activity. His expertise in media buying and optimization is one of the best around. He has been able to consistently hit high revenue numbers despite the changing landscape. He is versatile, professional, and creative.",
  },
];

export const BUDGET_OPTIONS = [
  "Under \u20AC5,000",
  "\u20AC5,000 - \u20AC15,000",
  "\u20AC15,000 - \u20AC50,000",
  "\u20AC50,000+",
] as const;
