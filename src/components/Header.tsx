"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { Button } from "./ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[rgba(20,30,51,0.9)] backdrop-blur-[20px]">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6">
        <a href="#" className="shrink-0">
          <Image
            src="/images/logo-white.svg"
            alt="IM Pro"
            width={100}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-text-dim transition-colors hover:text-text-bright"
            >
              {item.label}
            </a>
          ))}
          <Button href="#contact" size="sm">
            Book a Strategy Call
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <X className="h-6 w-6 text-text-bright" />
          ) : (
            <Menu className="h-6 w-6 text-text-bright" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-white/5 bg-[rgba(20,30,51,0.98)] px-6 pb-6 pt-4 md:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-[15px] font-medium text-text-dim transition-colors hover:text-text-bright"
            >
              {item.label}
            </a>
          ))}
          <Button href="#contact" size="sm" className="mt-4 w-full">
            Book a Strategy Call
          </Button>
        </nav>
      )}
    </header>
  );
}
