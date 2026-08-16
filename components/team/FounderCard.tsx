import React from 'react';
import { avatarUrl } from '@/lib/utils';

interface Founder {
  id: number;
  name: string;
  role: string;
  batch?: string;
  contribution?: string;
  badge?: string;
  photo?: string;
}

export default function FounderCard({ founder }: { founder: Founder }) {
  return (
    <div className="reveal group bg-white border border-border rounded-panel overflow-hidden transition-all duration-200 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-borderstrong">
      <div className="relative w-full h-[300px] overflow-hidden bg-[#f8fafc]">
        <img
          src={founder.photo || avatarUrl(founder.name)}
          alt={founder.name}
          loading="lazy"
          className="w-full h-full object-cover object-[center_20%] transition-transform duration-400 group-hover:scale-[1.05]"
        />
        <span className="absolute top-3 left-3 bg-white/90 [backdrop-filter:blur(8px)] text-ink text-[11px] font-medium py-1 px-3 rounded-pill whitespace-nowrap">
          {founder.badge || 'Founding Pioneer'}
        </span>
      </div>

      <div className="p-5 flex flex-col items-start gap-1">
        <h3 className="font-sans font-medium text-lg tracking-[-0.015em] text-ink">{founder.name}</h3>
        <p className="text-sm text-secondary">{founder.role}</p>
        {founder.batch && <p className="text-xs text-muted">{founder.batch}</p>}
        {founder.contribution && (
          <p className="text-[13px] leading-[1.5] text-secondary mt-1">{founder.contribution}</p>
        )}
      </div>
    </div>
  );
}
