import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  italicTitle?: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  italicTitle,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const centered = align === 'center';

  return (
    <div
      className={`reveal mb-10 md:mb-14 ${centered ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'} ${className}`}
    >
      {badge && (
        <div className="inline-flex items-center gap-1.5 bg-white border border-border rounded-pill px-4 py-1.5 text-xs font-medium uppercase tracking-[0.08em] text-secondary mb-4">
          {badge}
        </div>
      )}

      <h2 className="font-sans font-medium text-[clamp(30px,4.4vw,48px)] leading-[1.1] tracking-[-0.04em] text-ink mb-4">
        {title}{' '}
        {italicTitle && (
          <span className="font-serif italic font-normal tracking-[-0.01em] text-ink text-[1.05em]">
            {italicTitle}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="text-[clamp(15px,1.8vw,17px)] font-normal leading-[1.6] text-secondary">
          {subtitle}
        </p>
      )}
    </div>
  );
}
