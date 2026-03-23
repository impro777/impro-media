import Image from "next/image";
import { COMPANY } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg-base py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo-white.svg"
            alt="IM Pro"
            width={70}
            height={28}
            className="h-7 w-auto"
          />
          <div className="h-5 w-px bg-white/10" />
          <Image
            src="/images/google-partner.png"
            alt="Google Partner"
            width={60}
            height={24}
            className="h-6 w-auto"
          />
        </div>
        <p className="text-sm text-text-dim">
          &copy; {COMPANY.foundedYear}&ndash;{new Date().getFullYear()}{" "}
          {COMPANY.name}. All rights reserved.
        </p>
        <a
          href="/privacy"
          className="text-sm text-text-dim transition-colors hover:text-text-main"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
