'use client';

import React, { useState } from 'react';
import EventCard, { type EventData } from './EventCard';

type TabKey = 'upcoming' | 'past' | 'all';

export default function EventsTabs({ events = [] }: { events?: EventData[] }) {
  const [activeTab, setActiveTab] = useState<TabKey>('upcoming');

  const filteredEvents = events.filter((ev) => {
    if (activeTab === 'all') return true;
    return ev.status === activeTab;
  });

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'upcoming', label: `Upcoming Events (${events.filter((e) => e.status === 'upcoming').length})` },
    { key: 'past', label: `Past Events (${events.filter((e) => e.status === 'past').length})` },
    { key: 'all', label: `All (${events.length})` },
  ];

  return (
    <div>
      {/* Tabs pill */}
      <div className="flex items-center gap-1 bg-[rgba(27,29,30,0.06)] rounded-cta p-[5px] w-fit mx-auto mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={`py-2 px-4 md:px-[18px] text-[13px] md:text-sm font-medium rounded-cta whitespace-nowrap transition-all duration-200 ${
              activeTab === tab.key
                ? 'bg-white text-ink'
                : 'text-secondary hover:text-ink hover:bg-white/55'
            } ${tab.key === 'all' ? 'hidden sm:inline-flex' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.map((ev) => (
            <EventCard key={ev.id} event={ev} />
          ))}
        </div>
      ) : (
        <div className="bg-soft border border-bordersubtle rounded-card py-16 px-6 text-center">
          <p className="text-secondary">No {activeTab} events scheduled at the moment.</p>
        </div>
      )}
    </div>
  );
}
