'use client';

import React from 'react';
import {
  RiLightbulbLine,
  RiBuilding2Line,
  RiGovernmentLine,
  RiAtomLine,
  RiRocketLine,
  RiMap2Line,
} from 'react-icons/ri';

const partners = [
  { icon: RiLightbulbLine, name: 'E-Cell IIT Bombay' },
  { icon: RiBuilding2Line, name: 'UIET MDU Rohtak' },
  { icon: RiGovernmentLine, name: 'MDU Rohtak' },
  { icon: RiAtomLine, name: 'MDU Innovation Hub' },
  { icon: RiRocketLine, name: 'Startup India' },
  { icon: RiMap2Line, name: 'Startup Haryana' },
];

export default function LogoStrip() {
  return (
    <div className="pt-[clamp(48px,6vw,64px)] pb-2 overflow-hidden">
      <p className="block text-center text-[15px] font-normal text-secondary mb-9">
        Part of the E-Cell IIT Bombay initiative · Loved by institutional &amp; ecosystem partners
      </p>

      <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex items-center gap-[clamp(48px,6vw,88px)] pr-[clamp(48px,6vw,88px)] animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="inline-flex items-center gap-3 text-[rgba(27,29,30,0.45)] transition-colors duration-200 hover:text-ink"
              >
                <Icon size={26} className="shrink-0" />
                <span className="text-xl font-semibold tracking-[-0.02em]">{p.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
