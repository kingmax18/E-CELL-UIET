import React from 'react';

export default function OurStory() {
  return (
    <section className="py-[clamp(56px,7vw,80px)]">
      <div className="max-w-[1272px] mx-auto px-6">
        <div className="reveal bg-soft border border-bordersubtle rounded-panel p-8 md:p-12">
          <div className="text-[13px] font-medium text-secondary uppercase tracking-[0.06em] mb-4">
            Origin &amp; Purpose
          </div>
          <h2 className="font-sans font-medium text-[clamp(28px,4vw,44px)] leading-[1.15] tracking-[-0.035em] text-ink mb-6 [text-wrap:balance]">
            Why we built{' '}
            <span className="font-serif italic font-normal text-[1.05em]">UIET E-Cell</span>
          </h2>
          <p className="text-[17px] leading-[1.65] text-secondary max-w-[820px] mb-4">
            It started with a simple belief on our campus — that UIET MDU has no shortage of brilliant,
            driven students, but needed a dedicated student-run ecosystem to turn creative thinking and
            technical talent into real-world impact.
          </p>
          <p className="text-[15px] leading-[1.7] text-secondary max-w-[820px]">
            Established in 2024, UIET E-Cell has rapidly grown into a vibrant cross-disciplinary community.
            We organize hands-on masterclasses, 24-hour campus ideathons, speaker series with startup
            founders, and networking delegations that bridge academia with the Indian startup ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}
