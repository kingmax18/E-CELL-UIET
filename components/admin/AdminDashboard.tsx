'use client';

import React from 'react';
import {
  RiFileList3Line,
  RiTimeLine,
  RiTeamLine,
  RiCalendarEventLine,
} from 'react-icons/ri';
import { StatusBadge, EmptyState, adminTd, adminTh } from './ui';

interface AppRow {
  id: number;
  name: string;
  email?: string;
  deptInterest?: string;
  deptinterest?: string;
  branchYear?: string;
  branchyear?: string;
  status?: string;
}

interface Props {
  events?: Array<{ id: number; title: string; date: string; status?: string }>;
  team?: Array<{ id: number }>;
  applications: AppRow[];
  stats?: { members?: { value?: number }; events?: { value?: number }; startups?: { value?: number }; years?: { value?: number } };
  onNavigate: (tab: string) => void;
}

export default function AdminDashboard({ events = [], team = [], applications, stats, onNavigate }: Props) {
  const pending = applications.filter((a) => (a.status || 'Pending') === 'Pending').length;
  const accepted = applications.filter((a) => a.status === 'Accepted').length;
  const shortlisted = applications.filter((a) => a.status === 'Shortlisted').length;

  const kpis = [
    { label: 'Applications', value: applications.length, icon: RiFileList3Line, tint: 'bg-violet text-white' },
    { label: 'Pending Review', value: pending, icon: RiTimeLine, tint: 'bg-porange text-white' },
    { label: 'Team Members', value: team.length || stats?.members?.value || 0, icon: RiTeamLine, tint: 'bg-pgreen text-white' },
    { label: 'Events Hosted', value: events.length || stats?.events?.value || 0, icon: RiCalendarEventLine, tint: 'bg-pblue text-white' },
  ];

  // Department-wise breakdown
  const deptCount: Record<string, number> = {};
  applications.forEach((a) => {
    const d = a.deptInterest || a.deptinterest || 'Unspecified';
    deptCount[d] = (deptCount[d] || 0) + 1;
  });
  const deptEntries = Object.entries(deptCount).sort((a, b) => b[1] - a[1]);
  const maxDept = deptEntries[0]?.[1] || 1;

  const pipeline = [
    { label: 'Pending', value: pending, cls: 'bg-[#ffefda] text-[#b3661d]' },
    { label: 'Shortlisted', value: shortlisted, cls: 'bg-[#e2f0ff] text-[#1d6fb3]' },
    { label: 'Accepted', value: accepted, cls: 'bg-[#e4f6df] text-[#2f7a1d]' },
  ];

  const upcoming = events
    .filter((e) => e.status === 'upcoming')
    .sort((a, b) => (a.date > b.date ? 1 : -1))
    .slice(0, 3);

  return (
    <div>
      <div className="flex items-center justify-between gap-4 flex-wrap mb-5">
        <div>
          <h1 className="font-sans font-medium text-[26px] leading-tight tracking-[-0.03em] text-ink">
            Overview &amp; Analytics
          </h1>
          <p className="text-sm text-secondary mt-1">
            Real-time portal activity and recruitment pipeline.
          </p>
        </div>
        {pending > 0 && (
          <button
            type="button"
            onClick={() => onNavigate('applications')}
            className="text-[13px] font-medium text-ink bg-soft py-2 px-4 rounded-pill hover:bg-softhover transition-colors duration-200"
          >
            {pending} awaiting review
          </button>
        )}
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {kpis.map((k) => {
          const Icon = k.icon;
          return (
            <div key={k.label} className="bg-white border border-border rounded-panel p-5 flex flex-col gap-3">
              <div className={`w-9 h-9 rounded-card flex items-center justify-center ${k.tint}`}>
                <Icon size={18} />
              </div>
              <div>
                <div className="font-sans font-medium text-[34px] leading-none tracking-[-0.035em] text-ink [font-variant-numeric:tabular-nums]">
                  {k.value}
                </div>
                <div className="text-[13px] text-secondary mt-2">{k.label}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4">
        {/* Recruitment pipeline + upcoming */}
        <div className="bg-white border border-border rounded-panel p-6 lg:col-span-2">
          <h2 className="font-sans font-medium text-sm tracking-[-0.01em] text-ink mb-4">
            Recruitment Pipeline
          </h2>
          <div className="flex flex-col gap-3.5">
            {pipeline.map((p) => (
              <div key={p.label} className="flex items-center gap-2.5">
                <span className={`py-0.5 px-2 rounded-pill text-[11px] font-medium ${p.cls} w-[76px] text-center`}>
                  {p.label}
                </span>
                <div className="flex-1 h-1.5 bg-soft rounded-pill overflow-hidden">
                  <div
                    className="h-full bg-violet rounded-pill transition-all duration-700"
                    style={{ width: `${applications.length ? (p.value / applications.length) * 100 : 0}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-ink w-5 text-right [font-variant-numeric:tabular-nums]">
                  {p.value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-bordersubtle">
            <h3 className="font-sans font-medium text-xs text-ink mb-2.5">Upcoming Events</h3>
            {upcoming.length > 0 ? (
              <ul className="flex flex-col gap-2.5">
                {upcoming.map((e) => (
                  <li key={e.id} className="flex items-center justify-between gap-2 text-[13px]">
                    <span className="text-ink font-medium truncate">{e.title}</span>
                    <span className="text-muted whitespace-nowrap text-xs">{e.date}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-[13px] text-muted">No upcoming events scheduled.</p>
            )}
          </div>
        </div>

        {/* Applications by department */}
        <div className="bg-white border border-border rounded-panel p-6 lg:col-span-3">
          <h2 className="font-sans font-medium text-sm tracking-[-0.01em] text-ink mb-4">
            Applications by Department
          </h2>
          {deptEntries.length > 0 ? (
            <div className="flex flex-col gap-3">
              {deptEntries.map(([dept, count]) => (
                <div key={dept} className="flex items-center gap-2.5">
                  <span className="text-xs text-secondary w-36 shrink-0 truncate">{dept}</span>
                  <div className="flex-1 h-1.5 bg-soft rounded-pill overflow-hidden">
                    <div
                      className="h-full bg-violet rounded-pill transition-all duration-700 min-w-[8px]"
                      style={{ width: `${(count / maxDept) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-ink w-5 text-right [font-variant-numeric:tabular-nums]">
                    {count}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState text="No application data yet — department analytics appear after the first submission." />
          )}
        </div>
      </div>

      {/* Recent applications */}
      <div className="bg-white border border-border rounded-panel">
        <div className="px-5 py-3.5 border-b border-border flex items-center justify-between">
          <h2 className="font-sans font-medium text-sm tracking-[-0.015em] text-ink">Recent Applications</h2>
          <button
            type="button"
            onClick={() => onNavigate('applications')}
            className="text-[13px] font-medium text-ink border border-border py-1.5 px-4 rounded-pill hover:bg-ink hover:text-white hover:border-ink transition-colors duration-200"
          >
            View all
          </button>
        </div>
        {applications.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className={adminTh}>Name</th>
                  <th className={adminTh}>Department</th>
                  <th className={adminTh}>Branch &amp; Year</th>
                  <th className={adminTh}>Status</th>
                </tr>
              </thead>
              <tbody>
                {applications.slice(0, 5).map((app) => (
                  <tr key={app.id} className="transition-colors duration-150 hover:bg-soft/60">
                    <td className={adminTd}>
                      <div className="font-medium text-ink">{app.name}</div>
                      <div className="text-[11px] text-muted">{app.email}</div>
                    </td>
                    <td className={adminTd}>{app.deptInterest || app.deptinterest}</td>
                    <td className={adminTd}>{app.branchYear || app.branchyear}</td>
                    <td className={adminTd}>
                      <StatusBadge status={app.status || 'Pending'} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-4">
            <EmptyState text="No applications submitted yet." />
          </div>
        )}
      </div>
    </div>
  );
}
