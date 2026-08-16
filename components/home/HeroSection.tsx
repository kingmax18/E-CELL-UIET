'use client';

import React, { useRef } from 'react';
import Button from '@/components/ui/Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '[data-hero="headline"]',
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.9 }
      )
        .fromTo(
          '[data-hero="subtitle"]',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          '[data-hero="actions"]',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="hero" className="relative block w-full overflow-hidden bg-white">
      {/* Full-bleed ambient background — gradient + mesh together fade
          out toward the bottom so the hero blends into the page */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 bg-[linear-gradient(71deg,rgba(217,243,252,0.38)_11%,rgba(235,248,253,0.45)_45.7%,rgba(255,255,255,0.54)_64.5%,rgba(253,241,211,0.66)_100%)] [mask-image:linear-gradient(to_bottom,black_55%,transparent_92%)] [-webkit-mask-image:linear-gradient(to_bottom,black_55%,transparent_92%)]">
        <img
          src="/assets/images/ntUDPbezGATca4W8ayYcVbeQbM.svg"
          alt="UIET E-Cell Ambient Glow"
          className="w-full h-full object-cover object-center opacity-95"
        />
      </div>

      <div className="relative z-[1] max-w-[1000px] mx-auto text-center flex flex-col items-center pt-[clamp(150px,18vw,190px)] pb-[clamp(72px,9vw,110px)] px-6">
        {/* Inter Medium display headline + Instrument Serif accent */}
        <h1
          data-hero="headline"
          className="font-sans font-medium text-[clamp(42px,7.4vw,96px)] leading-[1.05] tracking-[-0.045em] text-ink mb-[26px] [text-wrap:balance]"
        >
          Building student startups with{' '}
          <span className="font-serif italic font-normal tracking-[-0.01em] text-ink text-[1.05em]">
            thoughtful innovation
          </span>
        </h1>

        {/* Subtitle */}
        <p
          data-hero="subtitle"
          className="text-[clamp(16px,1.8vw,18px)] font-normal leading-[1.6] text-secondary max-w-[660px] mb-[38px]"
        >
          At UIET E-Cell, we foster entrepreneurial thinking, incubate student-led ventures, and provide
          hands-on mentorship, workshops, and seed funding across Maharshi Dayanand University.
        </p>

        {/* Action CTAs */}
        <div data-hero="actions" className="flex items-center justify-center gap-3.5 flex-wrap">
          <Button href="/contact" variant="blue" size="lg" arrow>
            Join UIET E-Cell
          </Button>
          <Button href="/events" variant="white" size="lg" arrow>
            Explore Initiatives
          </Button>
        </div>
      </div>
    </section>
  );
}
