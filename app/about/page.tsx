'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import VisionMission from '@/components/about/VisionMission';
import OurStory from '@/components/about/OurStory';
import CoreValues from '@/components/about/CoreValues';
import GalleryGrid from '@/components/about/GalleryGrid';
import CTABanner from '@/components/home/CTABanner';
import { useData } from '@/context/DataProvider';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function AboutPage() {
  const { gallery } = useData();
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        {/* Page Hero — full-bleed gradient from the very top, under the navbar */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none overflow-hidden bg-[linear-gradient(71deg,rgba(217,243,252,0.38)_11%,rgba(235,248,253,0.45)_45.7%,rgba(255,255,255,0.54)_64.5%,rgba(253,241,211,0.66)_100%)] [mask-image:linear-gradient(to_bottom,black_55%,transparent_92%)] [-webkit-mask-image:linear-gradient(to_bottom,black_55%,transparent_92%)]">
            <img
              src="/assets/images/ntUDPbezGATca4W8ayYcVbeQbM.svg"
              alt=""
              className="w-full h-full object-cover opacity-90"
            />
          </div>
          <div className="relative max-w-[1272px] mx-auto px-6 pt-[160px] pb-[72px] text-center">
            <div className="inline-flex py-1.5 px-4 bg-white border border-border rounded-pill text-xs font-medium uppercase tracking-[0.08em] text-secondary mb-5">
              UIET E-Cell · Overview
            </div>
            <h1 className="font-sans font-medium text-[clamp(36px,5.5vw,64px)] leading-[1.08] tracking-[-0.04em] text-ink mb-5 [text-wrap:balance]">
              Inspiring a generation of{' '}
              <span className="font-serif italic font-normal text-[1.05em]">changemakers</span>
            </h1>
            <p className="text-[clamp(16px,1.8vw,18px)] leading-[1.6] text-secondary max-w-[720px] mx-auto">
              Learn. Collaborate. Showcase. The official Entrepreneurship Cell of UIET, Maharshi Dayanand
              University, Rohtak — building a high-impact founder culture on campus.
            </p>
          </div>
        </section>

        <VisionMission />
        <OurStory />
        <CoreValues />
        <GalleryGrid gallery={gallery} />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
