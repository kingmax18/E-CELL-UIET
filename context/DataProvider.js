'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { events as defaultEvents } from '@/data/events';
import { team as defaultTeam, founders as defaultFounders } from '@/data/team';
import { sponsors as defaultSponsors } from '@/data/sponsors';
import { stats as defaultStats } from '@/data/stats';
import { gallery as defaultGallery } from '@/data/gallery';
import { faculty as defaultFaculty } from '@/data/faculty';
import { settings as defaultSettings } from '@/data/settings';
import { supabase } from '@/lib/supabase';

const DataContext = createContext({
  events: defaultEvents,
  team: defaultTeam,
  founders: defaultFounders,
  sponsors: defaultSponsors,
  stats: defaultStats,
  gallery: defaultGallery,
  faculty: defaultFaculty,
  settings: defaultSettings,
  applications: [],
  isLoading: false,
  refreshData: () => {},
});

export function DataProvider({ children }) {
  const [events, setEvents] = useState(defaultEvents);
  const [team, setTeam] = useState(defaultTeam);
  const [founders, setFounders] = useState(defaultFounders);
  const [sponsors, setSponsors] = useState(defaultSponsors);
  const [stats, setStats] = useState(defaultStats);
  const [gallery, setGallery] = useState(defaultGallery);
  const [faculty, setFaculty] = useState(defaultFaculty);
  const [settings, setSettings] = useState(defaultSettings);
  const [applications, setApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchLiveSupabase = async () => {
    if (!supabase) return;
    try {
      setIsLoading(true);

      // 1. Team
      const { data: teamData, error: teamErr } = await supabase
        .from('team')
        .select('*')
        .order('order', { ascending: true });
      if (!teamErr && teamData && teamData.length > 0) {
        setTeam(teamData);
      }

      // 2. Events
      const { data: eventsData, error: eventsErr } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: false });
      if (!eventsErr && eventsData && eventsData.length > 0) {
        setEvents(eventsData);
      }

      // 3. Sponsors
      const { data: sponsorsData, error: sponsorsErr } = await supabase
        .from('sponsors')
        .select('*');
      if (!sponsorsErr && sponsorsData && sponsorsData.length > 0) {
        setSponsors(sponsorsData);
      }

      // 4. Stats
      const { data: statsData, error: statsErr } = await supabase
        .from('stats')
        .select('*')
        .limit(1)
        .single();
      if (!statsErr && statsData) {
        setStats({
          members: { value: statsData.members || 15, label: 'Active Student Members', suffix: '+' },
          events: { value: statsData.events || 5, label: 'Events & Workshops', suffix: '+' },
          startups: { value: statsData.startups || 2, label: 'Student Startups', suffix: '+' },
          years: { value: statsData.years || 2, label: 'Years of Activity', suffix: '+' },
        });
      }

      // 5. Applications
      const { data: appsData, error: appsErr } = await supabase
        .from('applications')
        .select('*')
        .order('id', { ascending: false });
      if (!appsErr && appsData) {
        setApplications(appsData);
      }
    } catch (err) {
      console.warn('[DataProvider] Supabase fetch fallback to static:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLiveSupabase();
  }, []);

  return (
    <DataContext.Provider
      value={{
        events,
        setEvents,
        team,
        setTeam,
        founders,
        setFounders,
        sponsors,
        setSponsors,
        stats,
        setStats,
        gallery,
        setGallery,
        faculty,
        setFaculty,
        settings,
        setSettings,
        applications,
        setApplications,
        isLoading,
        refreshData: fetchLiveSupabase,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
