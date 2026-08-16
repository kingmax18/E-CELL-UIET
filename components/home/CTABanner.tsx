import React from 'react';
import Button from '@/components/ui/Button';

export default function CTABanner() {
  return (
    <section className="py-[clamp(56px,7vw,80px)]">
      <div className="max-w-[1272px] mx-auto px-6">
        {/* Reference "Together Section": rounded bordered gradient card,
            inset from the page edges — not full-bleed */}
        <div className="reveal relative overflow-hidden bg-white border border-border rounded-panel text-center">
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 bg-[linear-gradient(71deg,rgba(217,243,252,0.38)_11%,rgba(235,248,253,0.45)_45.7%,rgba(255,255,255,0.54)_64.5%,rgba(253,241,211,0.66)_100%)] [mask-image:linear-gradient(to_bottom,black_55%,transparent_92%)] [-webkit-mask-image:linear-gradient(to_bottom,black_55%,transparent_92%)]">
            <img
              src="/assets/images/ntUDPbezGATca4W8ayYcVbeQbM.svg"
              alt="UIET E-Cell Glow"
              className="w-full h-full object-cover object-center opacity-90"
            />
          </div>

          <div className="relative z-[1] flex flex-col items-center max-w-[800px] mx-auto px-6 py-[clamp(60px,8vw,96px)]">
            <h2 className="font-sans font-medium text-[clamp(32px,5vw,56px)] leading-[1.08] tracking-[-0.04em] text-ink mb-5 [text-wrap:balance]">
              Take the leap into{' '}
              <span className="font-serif italic font-normal tracking-[-0.01em] text-ink text-[1.05em]">
                student entrepreneurship
              </span>
            </h2>
            <p className="text-[clamp(16px,2vw,18px)] leading-[1.6] text-secondary max-w-[640px] mb-9">
              Looking to launch a project, build leadership skills, or connect with innovators across
              campus? Join UIET E-Cell and turn your bold ideas into reality.
            </p>
            <div className="flex justify-center">
              <Button href="/contact" variant="blue" size="lg" arrow>
                Join UIET E-Cell Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
