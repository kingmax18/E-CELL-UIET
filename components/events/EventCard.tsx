import React from 'react';
import CategoryBadge from '@/components/ui/CategoryBadge';
import Button from '@/components/ui/Button';
import { formatDate } from '@/lib/utils';

export interface EventData {
  id: number;
  title: string;
  tagline?: string;
  description?: string;
  date?: string;
  time?: string;
  venue?: string;
  mode?: string;
  category?: string;
  tags?: string[];
  status?: string;
  registrationUrl?: string;
}

export default function EventCard({ event }: { event: EventData }) {
  return (
    <article className="reveal bg-white border border-border rounded-panel p-6 md:p-7 flex flex-col gap-3 transition-all duration-200 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-borderstrong">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <CategoryBadge color={(event.category as 'orange') || 'orange'}>
          {event.mode || 'Offline'}
        </CategoryBadge>
        <span className="text-[13px] font-medium text-secondary">
          {formatDate(event.date)} · {event.time}
        </span>
      </div>

      <h3 className="font-sans font-medium text-[clamp(19px,2vw,24px)] leading-[1.25] tracking-[-0.02em] text-ink">
        {event.title}
      </h3>
      {event.tagline && <p className="text-[15px] text-secondary leading-[1.5]">{event.tagline}</p>}
      {event.description && <p className="text-sm leading-[1.6] text-secondary">{event.description}</p>}

      {event.tags && event.tags.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {event.tags.map((t, idx) => (
            <span key={idx} className="text-xs font-medium text-secondary bg-soft py-1 px-3 rounded-pill">
              #{t}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto pt-4 border-t border-bordersubtle flex items-center justify-between gap-3 flex-wrap">
        <span className="text-sm text-secondary">{event.venue}</span>
        {event.registrationUrl ? (
          <Button href={event.registrationUrl} variant="primary" size="sm" arrow>
            Register Now
          </Button>
        ) : (
          <span className="text-[13px] font-medium text-muted bg-soft py-1.5 px-4 rounded-pill">
            Concluded
          </span>
        )}
      </div>
    </article>
  );
}
