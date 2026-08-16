import React from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { CORE_VALUES } from '@/lib/constants';

export default function CoreValues() {
  return (
    <section className="py-[clamp(56px,7vw,80px)]">
      <div className="max-w-[1272px] mx-auto px-6">
        <SectionHeader
          badge="Guiding Principles"
          title="The core values that shape"
          italicTitle="our culture"
          subtitle="How we collaborate, execute, and build high-impact programs for the university."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CORE_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="reveal bg-white border border-border rounded-card p-8 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1 hover:border-borderstrong"
            >
              <div className="flex items-center justify-between">
                <span className="font-sans font-medium text-xl tracking-[-0.02em] text-ink">{val.number}</span>
                <span className="text-[13px] font-medium text-secondary bg-soft py-1 px-3 rounded-pill">
                  {val.label}
                </span>
              </div>
              <h3 className="font-sans font-medium text-[21px] leading-[1.3] tracking-[-0.02em] text-ink">
                {val.title}
              </h3>
              <p className="text-[15px] leading-[1.6] text-secondary">{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
