import React from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';

const showcaseEvents = [
  {
    id: 1,
    title: 'Eureka Pitching Competition 2026',
    tagline: 'Present Your Idea. Pitch to Win.',
    tags: ['Pitching', 'Competition', 'Startup'],
    image: '/gallery/page_3.jpg',
    date: 'Aug 27, 2026',
    venue: 'UIET MDU Main Auditorium',
    isUpcoming: true,
  },
  {
    id: 2,
    title: 'Ideathon 2025 — Solutions for Campus',
    tagline: '24-hour campus innovation hackathon.',
    tags: ['Ideathon', 'Innovation', 'Hackathon'],
    image: '/gallery/page_25.jpg',
    date: 'Mar 10, 2025',
    venue: 'MDU Innovation Hub',
    isUpcoming: false,
  },
  {
    id: 3,
    title: 'Digital Marketing & Content Masterclass',
    tagline: 'SEO basics, brand growth, & live demos.',
    tags: ['Workshop', 'Marketing', 'Skill'],
    image: '/gallery/page_43.jpg',
    date: 'May 20, 2025',
    venue: 'Online / UIET Seminar Hall',
    isUpcoming: false,
  },
  {
    id: 4,
    title: 'Annual E-Summit & Founders Gathering',
    tagline: 'Student team showcases and keynote talks.',
    tags: ['Summit', 'Networking', 'Flagship'],
    image: '/gallery/page_12.jpg',
    date: 'Nov 25, 2024',
    venue: 'MDU Main Campus',
    isUpcoming: false,
  },
];

export default function EventsPreview() {
  return (
    <section className="py-[clamp(56px,7vw,80px)]">
      <div className="max-w-[1272px] mx-auto px-6">
        <SectionHeader
          badge="Upcoming Activities"
          title="See our flagship work in"
          italicTitle="campus action"
          subtitle="From campus pitch competitions and 24-hour ideathons to interactive masterclasses and industry summits."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {showcaseEvents.map((item) => (
            <article
              key={item.id}
              className="reveal flex flex-col bg-white border border-border rounded-panel overflow-hidden transition-all duration-200 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-borderstrong"
            >
              <div className="relative w-full h-[clamp(280px,30vw,380px)] overflow-hidden bg-[#f8fafc]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-400 group-hover:scale-[1.04] hover:scale-[1.04]"
                />
                {item.isUpcoming && (
                  <span className="absolute top-4 right-4 bg-pgreen text-[#0E3B09] text-[11px] font-semibold py-[5px] px-3 rounded-pill uppercase tracking-[0.05em]">
                    Upcoming Event
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-2 text-xs font-medium text-secondary uppercase tracking-[0.05em]">
                  <span>{item.date}</span>
                  <span className="text-muted">•</span>
                  <span className="text-muted font-medium normal-case tracking-normal">{item.venue}</span>
                </div>
                <h3 className="font-sans font-medium text-[clamp(20px,2.2vw,26px)] leading-[1.25] tracking-[-0.02em] text-ink">
                  {item.title}
                </h3>
                <p className="text-[15px] text-secondary leading-[1.55]">{item.tagline}</p>
                <div className="flex gap-2 flex-wrap mt-2">
                  {item.tags.map((t, idx) => (
                    <span key={idx} className="text-xs font-medium text-secondary bg-soft py-1 px-3 rounded-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal text-center">
          <Button href="/events" variant="outline" size="lg" arrow>
            View All Flagship Events
          </Button>
        </div>
      </div>
    </section>
  );
}
