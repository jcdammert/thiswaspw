"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks, phoneDisplay, phoneHref } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-navy sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="Finesse Cleaning"
            width={160}
            height={35}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a href={phoneHref} className="text-sm font-semibold text-brand">
            {phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-brand px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="text-white lg:hidden"
          aria-label="Open menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-navy lg:hidden">
          <div className="flex items-center justify-between px-6 py-4">
            <Image
              src="/images/logo.png"
              alt="Finesse Cleaning"
              width={160}
              height={35}
              className="h-9 w-auto"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-white"
              aria-label="Close menu"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-6 px-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-white/90"
              >
                {link.label}
              </Link>
            ))}
            <a href={phoneHref} className="text-lg font-semibold text-brand">
              {phoneDisplay}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-brand px-6 py-3 text-center text-sm font-semibold text-white"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
