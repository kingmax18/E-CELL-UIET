'use client';

import React, { useState } from 'react';

interface AccordionItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export default function AccordionItem({ question, answer, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`bg-white border rounded-card overflow-hidden mb-4 transition-colors duration-200 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
        isOpen ? 'border-ink' : 'border-border hover:border-borderstrong'
      }`}
    >
      <button
        type="button"
        className="w-full py-[22px] px-6 flex items-center justify-between text-left gap-4 bg-transparent border-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-sans text-lg font-medium tracking-[-0.015em] text-ink leading-[1.35]">
          {question}
        </span>
        <span
          className={`flex items-center justify-center h-8 w-8 rounded-full shrink-0 transition-all duration-200 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? 'rotate-45 bg-ink text-white' : 'bg-soft text-ink'
          }`}
          aria-hidden="true"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-[max-height] duration-350 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
        style={{ maxHeight: isOpen ? '400px' : '0' }}
      >
        <div className="px-6 pb-[22px] text-[15px] leading-[1.65] text-secondary">{answer}</div>
      </div>
    </div>
  );
}
