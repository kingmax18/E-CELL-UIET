import React from 'react';
import SectionHeader from '@/components/ui/SectionHeader';

const awards = [
  {
    title: 'E-Summit Excellence Award',
    desc: 'Celebrated for cutting-edge student founder mentorship, interactive workshops, and seamless pitch events.',
    year: '2026',
    badge: 'MDU Innovation',
  },
  {
    title: 'State Startup Hub Recognition',
    desc: 'Recognized for creative excellence, ecosystem leadership, and innovative student startup incubations.',
    year: '2025',
    badge: 'Ecosystem Award',
  },
  {
    title: 'Best Campus Chapter Initiative',
    desc: 'Honored for highest student engagement, masterclass series, and entrepreneurship bootcamp impact.',
    year: '2024',
    badge: 'Youth Leadership',
  },
];

export default function AccoladesSection() {
  return (
    <section className="py-[clamp(56px,7vw,80px)]" id="award">
      <div className="max-w-[1272px] mx-auto px-6">
        <SectionHeader
          badge="Recognition & Milestones"
          title="Accolades and achievements celebrating our"
          italicTitle="excellence"
          subtitle="Recognized by university leaders and startup ecosystems for fostering innovation and execution across Haryana."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {awards.map((a, idx) => (
            <div
              key={idx}
              className="reveal bg-white border border-border rounded-card p-8 flex flex-col justify-between gap-6 min-h-[240px] transition-all duration-200 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-borderstrong"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-[13px] font-medium text-secondary bg-soft py-1 px-3 rounded-pill whitespace-nowrap">
                  {a.badge}
                </span>
                <span className="text-sm font-medium text-muted">{a.year}</span>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-sans font-medium text-[21px] leading-[1.3] tracking-[-0.02em] text-ink">
                  {a.title}
                </h3>
                <p className="text-[15px] font-normal leading-[1.6] text-secondary">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
