'use client';

import React, { useState } from 'react';
import { useAdminAuth } from '@/context/AdminAuthProvider';
import { useData } from '@/context/DataProvider';
import AdminLogin from '@/components/admin/AdminLogin';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminDashboard from '@/components/admin/AdminDashboard';
import ApplicationsManager from '@/components/admin/ApplicationsManager';
import EventsManager from '@/components/admin/EventsManager';
import TeamManager from '@/components/admin/TeamManager';
import GalleryManager from '@/components/admin/GalleryManager';
import StatsManager from '@/components/admin/StatsManager';
import PartnersManager from '@/components/admin/PartnersManager';
import SettingsManager from '@/components/admin/SettingsManager';

export default function AdminPage() {
  const { isAuthenticated } = useAdminAuth();
  const {
    events,
    setEvents,
    team,
    setTeam,
    sponsors,
    setSponsors,
    stats,
    setStats,
    gallery,
    setGallery,
    applications,
    setApplications,
    settings,
    setSettings,
  } = useData();

  const [activeTab, setActiveTab] = useState('dashboard');

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  const pendingCount = applications.filter((a: { status?: string }) => (a.status || 'Pending') === 'Pending').length;

  return (
    <div className="flex min-h-screen bg-[#f6f6f7]">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} pendingCount={pendingCount} />
      <main className="flex-1 min-w-0 px-5 md:px-7 py-6 overflow-x-hidden">
        {activeTab === 'dashboard' && (
          <AdminDashboard
            events={events}
            team={team}
            applications={applications}
            stats={stats}
            onNavigate={setActiveTab}
          />
        )}
        {activeTab === 'applications' && (
          <ApplicationsManager applications={applications} setApplications={setApplications} />
        )}
        {activeTab === 'events' && <EventsManager events={events} setEvents={setEvents} />}
        {activeTab === 'team' && <TeamManager team={team} setTeam={setTeam} />}
        {activeTab === 'gallery' && <GalleryManager gallery={gallery} setGallery={setGallery} />}
        {activeTab === 'stats' && <StatsManager stats={stats} setStats={setStats} />}
        {activeTab === 'partners' && <PartnersManager sponsors={sponsors} setSponsors={setSponsors} />}
        {activeTab === 'settings' && <SettingsManager settings={settings} setSettings={setSettings} />}
      </main>
    </div>
  );
}
