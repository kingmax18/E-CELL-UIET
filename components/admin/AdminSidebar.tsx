'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  RiDashboard3Line,
  RiFileList3Line,
  RiCalendarEventLine,
  RiTeamLine,
  RiImage2Line,
  RiBarChartBoxLine,
  RiHandHeartLine,
  RiSettings4Line,
  RiLogoutBoxRLine,
  RiExternalLinkLine,
} from 'react-icons/ri';
import { useAdminAuth } from '@/context/AdminAuthProvider';

export const NAV_GROUPS = [
  {
    label: 'Overview',
    items: [{ id: 'dashboard', label: 'Dashboard', icon: RiDashboard3Line }],
  },
  {
    label: 'Manage',
    items: [
      { id: 'applications', label: 'Applications', icon: RiFileList3Line },
      { id: 'events', label: 'Events', icon: RiCalendarEventLine },
      { id: 'team', label: 'Team', icon: RiTeamLine },
      { id: 'gallery', label: 'Gallery', icon: RiImage2Line },
      { id: 'partners', label: 'Partners', icon: RiHandHeartLine },
    ],
  },
  {
    label: 'Site',
    items: [
      { id: 'stats', label: 'Site Stats', icon: RiBarChartBoxLine },
      { id: 'settings', label: 'Settings', icon: RiSettings4Line },
    ],
  },
];

export default function AdminSidebar({
  activeTab,
  setActiveTab,
  pendingCount = 0,
}: {
  activeTab: string;
  setActiveTab: (t: string) => void;
  pendingCount?: number;
}) {
  const { user, logout } = useAdminAuth();

  return (
    <aside className="w-[272px] shrink-0 h-screen sticky top-0 flex flex-col bg-white border-r border-border">
      {/* Brand */}
      <div className="px-5 pt-6 pb-5">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-card bg-soft border border-bordersubtle flex items-center justify-center shrink-0">
            <Image src="/logo.png" alt="UIET E-Cell" width={28} height={28} className="rounded-md" />
          </div>
          <div className="leading-tight min-w-0">
            <div className="font-sans font-semibold text-[15px] tracking-[-0.015em] text-ink">E-Cell Admin</div>
            <div className="text-xs text-muted mt-0.5">UIET · MDU Rohtak</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-5">
        {NAV_GROUPS.map((group) => (
          <div key={group.label} className="flex flex-col gap-0.5">
            <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted px-3 mb-1.5">
              {group.label}
            </div>
            {group.items.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2.5 py-2.5 px-3.5 rounded-pill text-sm font-medium text-left transition-colors duration-200 ${
                    active
                      ? 'bg-ink text-white'
                      : 'text-secondary hover:text-ink hover:bg-soft'
                  }`}
                >
                  <Icon size={17} className="shrink-0" />
                  <span className="flex-1">{tab.label}</span>
                  {tab.id === 'applications' && pendingCount > 0 && (
                    <span
                      className={`text-[11px] font-semibold py-0.5 px-2 rounded-pill ${
                        active ? 'bg-white text-ink' : 'bg-violet text-white'
                      }`}
                    >
                      {pendingCount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </nav>

      {/* User & actions */}
      <div className="px-4 pb-5 pt-2 flex flex-col gap-3">
        <div className="flex items-center gap-3 bg-soft border border-bordersubtle rounded-card p-3">
          <div className="w-9 h-9 rounded-full bg-ink text-white flex items-center justify-center text-xs font-semibold uppercase shrink-0">
            {(user?.name || 'A').charAt(0)}
          </div>
          <div className="leading-tight min-w-0">
            <div className="text-sm font-medium text-ink truncate">{user?.name || 'Admin'}</div>
            <div className="text-xs text-muted truncate">{user?.role || 'Super Admin'}</div>
          </div>
        </div>

        <div className="flex gap-2">
          <Link
            href="/"
            target="_blank"
            className="flex-1 inline-flex items-center justify-center gap-1.5 text-[13px] font-medium text-secondary bg-soft py-2 rounded-pill hover:bg-softhover hover:text-ink transition-colors duration-200"
          >
            <RiExternalLinkLine size={14} /> View Site
          </Link>
          <button
            type="button"
            onClick={logout}
            className="flex-1 inline-flex items-center justify-center gap-1.5 text-[13px] font-medium text-white bg-ink py-2 rounded-pill hover:bg-violet transition-colors duration-200"
          >
            <RiLogoutBoxRLine size={14} /> Logout
          </button>
        </div>
      </div>
    </aside>
  );
}
