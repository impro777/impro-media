"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const contactSection = document.getElementById("contact");

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pastHero = scrollY > 400;

      let contactVisible = false;
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        contactVisible = rect.top < window.innerHeight * 0.8;
      }

      setVisible(pastHero && !contactVisible);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#contact"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-teal px-6 py-3.5 text-sm font-bold text-bg-base shadow-[0_4px_20px_rgba(139,216,189,0.3)] transition-all duration-300 hover:bg-teal-hover hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(139,216,189,0.4)] md:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
      aria-label="Book a Strategy Call"
    >
      Book a Call
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}
