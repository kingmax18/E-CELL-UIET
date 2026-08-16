'use client';

import React from 'react';

/* Shared admin UI primitives — Tailwind, Awake design language,
   tight rhythm */

export const adminInput =
  'w-full bg-white border border-border rounded-card px-3.5 py-2.5 text-sm text-ink placeholder:text-muted outline-none transition-colors duration-200 focus:border-ink';

export const adminLabel = 'block text-[13px] font-medium text-ink mb-1.5';

export const adminCard = 'bg-white border border-border rounded-panel';

export const adminTh =
  'text-left text-xs font-semibold uppercase tracking-[0.06em] text-secondary px-4 py-3 border-b border-border bg-soft/50';

export const adminTd = 'px-4 py-3 text-sm text-ink align-middle border-b border-bordersubtle';

export function PageHeader({ title, subtitle, action }: { title: string; subtitle: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
      <div>
        <h1 className="font-sans font-medium text-[26px] leading-tight tracking-[-0.03em] text-ink">{title}</h1>
        <p className="text-sm text-secondary mt-1">{subtitle}</p>
      </div>
      {action}
    </div>
  );
}

export function Modal({
  open,
  onClose,
  title,
  children,
  wide,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[2000] bg-ink/50 [backdrop-filter:blur(4px)] flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className={`bg-white border border-border rounded-panel w-full ${wide ? 'max-w-xl' : 'max-w-md'} my-8 shadow-[0_16px_48px_rgba(27,29,30,0.2)]`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-border">
          <h2 className="font-sans font-medium text-[15px] tracking-[-0.015em] text-ink">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-soft text-ink hover:bg-softhover transition-colors duration-200 flex items-center justify-center"
            aria-label="Close"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}

const STATUS_STYLES: Record<string, string> = {
  Pending: 'bg-[#ffefda] text-[#b3661d]',
  Shortlisted: 'bg-[#e2f0ff] text-[#1d6fb3]',
  Accepted: 'bg-[#e4f6df] text-[#2f7a1d]',
  Rejected: 'bg-[#fde7eb] text-[#c74a62]',
  upcoming: 'bg-[#e4f6df] text-[#2f7a1d]',
  past: 'bg-soft text-secondary',
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex py-0.5 px-2 rounded-pill text-[11px] font-medium whitespace-nowrap ${
        STATUS_STYLES[status] || 'bg-soft text-secondary'
      }`}
    >
      {status}
    </span>
  );
}

export function EmptyState({ text }: { text: string }) {
  return (
    <div className="bg-soft border border-bordersubtle rounded-card py-10 px-5 text-center text-[13px] text-secondary">
      {text}
    </div>
  );
}

export function FilterPills({
  options,
  active,
  onChange,
}: {
  options: string[];
  active: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center gap-0.5 bg-[rgba(27,29,30,0.06)] rounded-cta p-1 w-fit flex-wrap">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`py-1.5 px-3.5 text-[13px] font-medium rounded-cta transition-all duration-200 whitespace-nowrap ${
            active === opt ? 'bg-ink text-white' : 'text-secondary hover:text-ink hover:bg-white/60'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
