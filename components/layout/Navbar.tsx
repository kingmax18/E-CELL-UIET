'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, SITE } from '@/lib/constants';
import Button from '@/components/ui/Button';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  // Transparent over hero → floating white pill after slight scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] flex justify-center px-4 pt-4 pointer-events-none transition-[padding] duration-200 ${
          isScrolled ? 'scrolled' : ''
        }`}
      >
        <nav
          aria-label="Main Navigation"
          className={`pointer-events-auto flex items-center justify-between gap-5 w-full max-w-[1272px] h-16 rounded-cta border transition-all duration-350 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] px-3 pl-5 ${
            isScrolled
              ? 'bg-white/90 [backdrop-filter:blur(16px)] border-border shadow-[0_2px_8px_rgba(27,29,30,0.05)]'
              : 'bg-transparent border-transparent'
          }`}
        >
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 no-underline">
            <Image src="/logo.png" alt="UIET E-Cell Logo" width={34} height={34} className="rounded-lg object-contain" priority />
            <span className="font-sans font-semibold text-[15px] tracking-[-0.02em] text-ink uppercase">
              {SITE.name}
            </span>
          </Link>

          {/* Desktop Nav Links Pill — reference: ink-8% pill, radius 30px */}
          <div
            className={`hidden lg:flex items-center gap-1 rounded-cta py-[5px] px-1.5 transition-colors duration-350 ${
              isScrolled ? 'bg-[rgba(27,29,30,0.06)]' : 'bg-[rgba(27,29,30,0.08)]'
            }`}
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2 px-[18px] text-sm font-medium rounded-cta no-underline whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-ink'
                      : 'text-secondary hover:text-ink hover:bg-white/55'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button href="/contact" variant="primary" size="sm" arrow className="hidden md:inline-flex">
              Join E-Cell
            </Button>

            <button
              type="button"
              className="md:hidden flex flex-col justify-center gap-1.5 w-11 h-11 p-2.5 rounded-full bg-[rgba(27,29,30,0.08)] border-none cursor-pointer"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileOpen}
            >
              <span className={`w-full h-0.5 bg-ink rounded-sm transition-transform duration-200 ${isMobileOpen ? 'translate-y-1 rotate-45' : ''}`} />
              <span className={`w-full h-0.5 bg-ink rounded-sm transition-transform duration-200 ${isMobileOpen ? '-translate-y-1 -rotate-45' : ''}`} />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        links={NAV_LINKS}
        currentPath={pathname}
      />
    </>
  );
}
