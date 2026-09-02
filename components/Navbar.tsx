"use client";

import { useState, useEffect } from "react";
import { Menu, X, Truck, Phone } from "lucide-react";
import { BRAND, CONTACT, NAV_LINKS } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? "bg-white/95 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-lg bg-navy text-white">
            <Truck className="size-5" strokeWidth={2.2} />
          </span>
          <span
            className={`font-display text-lg font-bold ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            {BRAND.name}
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition hover:text-brand ${
                scrolled ? "text-slate" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${CONTACT.phone}`}
            className="hidden items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-600 sm:inline-flex"
          >
            <Phone className="size-4" strokeWidth={2.4} />
            {CONTACT.phoneDisplay}
          </a>
          <button
            type="button"
            aria-label="เมนู"
            onClick={() => setOpen((v) => !v)}
            className={`grid size-10 place-items-center rounded-lg lg:hidden ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <Container className="flex flex-col py-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm font-medium text-slate hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
