import React from 'react';

type BadgeColor = 'orange' | 'blue' | 'pink' | 'green' | 'lilac' | 'purple';

interface CategoryBadgeProps {
  children: React.ReactNode;
  color?: BadgeColor;
  className?: string;
}

const COLORS: Record<BadgeColor, string> = {
  orange: 'bg-porangebg text-porangedeep',
  blue: 'bg-pbluebg text-pbluedeep',
  pink: 'bg-ppinkbg text-ppinkdeep',
  green: 'bg-pgreenbg text-pgreendeep',
  lilac: 'bg-plilacbg text-plilacdeep',
  purple: 'bg-plilacbg text-plilacdeep',
};

export default function CategoryBadge({ children, color = 'purple', className = '' }: CategoryBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-pill px-3 py-1 text-[13px] font-medium ${COLORS[color]} ${className}`}
    >
      {children}
    </span>
  );
}
