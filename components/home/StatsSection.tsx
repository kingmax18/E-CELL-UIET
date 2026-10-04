'use client';

import React, { useEffect, useRef, useState } from 'react';

const ROTATING_WORDS = ['Creativity.', 'Innovation.', 'Strategy.'];

function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const cycle = setInterval(() => {
      setLeaving(true);
      timer = setTimeout(() => {
        setIndex((i) => (i + 1) % ROTATING_WORDS.length);
        setLeaving(false);
      }, 450);
    }, 2600);

    return () => {
      clearInterval(cycle);
      clearTimeout(timer);
    };
  }, []);

  return (
    <span className="inline-block relative whitespace-nowrap">
      <span
        className={`inline-block font-serif italic font-normal tracking-[-0.01em] text-ink ${leaving ? 'word-out' : 'word-in'}`}
      >
        {ROTATING_WORDS[index]}
      </span>
    </span>
  );
}

function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf: number;
    let observer: IntersectionObserver;

    const animate = () => {
      const duration = 1800;
      const start = performance.now();

      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(Math.round(eased * value));

        if (p < 1) raf = requestAnimationFrame(tick);
      };

      raf = requestAnimationFrame(tick);
    };

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [value]);

  return <span ref={ref}>{display}</span>;
}

interface StatsSectionProps {
  stats?: {
    members?: { value?: number };
    events?: { value?: number };
    startups?: { value?: number };
    years?: { value?: number };
  };
}

export default function StatsSection({ stats }: StatsSectionProps) {
  const statList = [
    { value: stats?.members?.value || 15, label: 'Active Student Members' },
    { value: stats?.events?.value || 5, label: 'Events & Workshops' },
    { value: stats?.startups?.value || 2, label: 'Student Startups' },
    { value: stats?.years?.value || 2, label: 'Years of Activity' },
  ];

  return (
    <section className="py-[clamp(56px,7vw,80px)]">
      <div className="max-w-[1272px] mx-auto px-6">
        <h2 className="reveal font-sans font-medium text-[clamp(28px,4vw,44px)] leading-[1.2] tracking-[-0.035em] text-ink text-center max-w-[960px] mx-auto mb-[72px] [text-wrap:balance]">
          <span className="block">Fostering an ecosystem of creative thinkers, builders,</span>
          <span className="block">and student entrepreneurs with <RotatingWord /></span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
          {statList.map((stat, idx) => (
            <div key={idx} className="reveal text-center">
              <div className="flex items-start justify-center font-sans font-medium text-[clamp(64px,8vw,112px)] leading-none tracking-[-0.045em] text-ink mb-4 [font-variant-numeric:tabular-nums]">
                <span className="text-[0.5em] leading-[1.5] mt-[5px] mr-1.5 font-medium text-ink">+</span>
                <CountUp value={stat.value} />
              </div>
              <div className="text-base font-medium leading-[1.4] text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
