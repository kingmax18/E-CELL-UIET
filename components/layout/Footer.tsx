import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10">
      <div className="max-w-[1272px] mx-auto px-[clamp(16px,4vw,24px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-8 md:gap-16 mb-16">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 no-underline">
              <Image src="/logo.png" alt="UIET E-Cell Logo" width={36} height={36} className="rounded-lg" />
              <span className="font-sans font-semibold text-base tracking-[-0.02em] text-ink uppercase">
                {SITE.name}
              </span>
            </Link>
            <p className="text-sm leading-[1.6] text-secondary max-w-[360px]">
              Empowering student innovation and leadership at Maharshi Dayanand University, Rohtak — part
              of the E-Cell initiative by E-Cell IIT Bombay.
            </p>
            <div className="flex items-center gap-2.5 mt-2">
              <a
                href="https://linkedin.com/company/mdu-ecell"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-border bg-transparent text-secondary transition-all duration-200 hover:bg-ink hover:border-ink hover:text-white"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.63-1.4 1.4-1.4s1.4.63 1.4 1.4v4.93h2.79m-13.26-7.66c.92 0 1.67.75 1.67 1.67s-.75 1.67-1.67 1.67-1.67-.75-1.67-1.67.75-1.67 1.67-1.67M6.8 18.5h2.79V10.13H6.8V18.5Z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/ecell_mdu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-border bg-transparent text-secondary transition-all duration-200 hover:bg-ink hover:border-ink hover:text-white"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="mailto:ecelluietfs@gmail.com"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-border bg-transparent text-secondary transition-all duration-200 hover:bg-ink hover:border-ink hover:text-white"
                aria-label="Email"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-sm font-semibold text-ink tracking-[-0.01em]">Sitemap</h4>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-secondary no-underline transition-colors duration-200 hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-sm font-semibold text-ink tracking-[-0.01em]">Resources</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="https://startupindia.gov.in" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary no-underline transition-colors duration-200 hover:text-ink">
                  Startup India
                </a>
              </li>
              <li>
                <a href="https://mdu.ac.in" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary no-underline transition-colors duration-200 hover:text-ink">
                  MDU Rohtak
                </a>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-secondary no-underline transition-colors duration-200 hover:text-ink">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-secondary no-underline transition-colors duration-200 hover:text-ink">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-sm text-secondary no-underline transition-colors duration-200 hover:text-ink">
                  Admin Panel
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-sm font-semibold text-ink tracking-[-0.01em]">Contact Details</h4>
            <div className="flex flex-col gap-2 text-sm text-secondary leading-[1.5]">
              <p>{SITE.address}</p>
              <p>
                <a href={`mailto:${SITE.email}`} className="text-ink font-medium no-underline hover:underline">
                  {SITE.email}
                </a>
              </p>
              <p>UIET Building, MDU Campus</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-[13px] text-muted">
          <p>© {new Date().getFullYear()} UIET E-Cell, Maharshi Dayanand University. All rights reserved.</p>
          <p>Built by Tech Team E-Cell</p>
        </div>
      </div>
    </footer>
  );
}
























































































