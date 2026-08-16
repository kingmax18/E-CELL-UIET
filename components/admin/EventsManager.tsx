'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { useToast } from '@/context/ToastProvider';
import { supabase } from '@/lib/supabase';
import { formatDate } from '@/lib/utils';
import { PageHeader, Modal, StatusBadge, EmptyState, adminInput, adminLabel, adminCard, adminTd, adminTh } from './ui';

export interface AdminEvent {
  id: number;
  title: string;
  tagline?: string;
  description?: string;
  date: string;
  time?: string;
  venue?: string;
  mode?: string;
  status?: string;
  category?: string;
  registrationUrl?: string | null;
  tags?: string[];
}

const BLANK: Omit<AdminEvent, 'id'> = {
  title: '',
  tagline: '',
  description: '',
  date: '',
  time: '10:00 AM – 5:00 PM',
  venue: 'UIET MDU Main Auditorium, Rohtak',
  mode: 'Offline',
  status: 'upcoming',
  category: 'orange',
  registrationUrl: '',
};

export default function EventsManager({
  events,
  setEvents,
}: {
  events: AdminEvent[];
  setEvents?: (e: AdminEvent[]) => void;
}) {
  const { showToast } = useToast();
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<AdminEvent | null>(null);
  const [form, setForm] = useState<Omit<AdminEvent, 'id'>>(BLANK);

  const openCreate = () => {
    setEditing(null);
    setForm(BLANK);
    setModalOpen(true);
  };

  const openEdit = (ev: AdminEvent) => {
    setEditing(ev);
    setForm({ ...BLANK, ...ev });
    setModalOpen(true);
  };

  const persist = async (row: AdminEvent, upsert: boolean) => {
    if (!supabase) return;
    try {
      const { id, ...fields } = row;
      if (upsert) await supabase.from('events').upsert({ id, ...fields });
      else await supabase.from('events').insert([fields]);
    } catch (e) {
      console.warn('[Admin] Supabase events persist warning:', e);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.date) {
      showToast('Please fill in required fields', 'error');
      return;
    }

    if (editing) {
      const updated = events.map((ev) => (ev.id === editing.id ? { ...ev, ...form } : ev));
      if (setEvents) setEvents(updated);
      persist({ ...editing, ...form }, true);
      showToast('Event updated successfully!', 'success');
    } else {
      const created: AdminEvent = {
        ...form,
        id: Date.now(),
        tags: form.tagline ? form.tagline.split(',').map((t) => t.trim()).filter(Boolean).slice(0, 3) : ['Event', 'UIET'],
      };
      if (setEvents) setEvents([created, ...events]);
      persist(created, false);
      showToast('Event created successfully!', 'success');
    }
    setModalOpen(false);
  };

  const toggleStatus = (ev: AdminEvent) => {
    const newStatus = ev.status === 'upcoming' ? 'past' : 'upcoming';
    if (setEvents) setEvents(events.map((x) => (x.id === ev.id ? { ...x, status: newStatus } : x)));
    persist({ ...ev, status: newStatus }, true);
    showToast(`Marked as ${newStatus}`, 'info');
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this event?')) {
      if (setEvents) setEvents(events.filter((e) => e.id !== id));
      if (supabase) supabase.from('events').delete().eq('id', id).catch(() => {});
      showToast('Event deleted', 'info');
    }
  };

  return (
    <div>
      <PageHeader
        title="Events Management"
        subtitle="Create, update, and manage campus events and workshops."
        action={
          <Button onClick={openCreate} variant="primary" size="sm" arrow>
            Add New Event
          </Button>
        }
      />

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? 'Edit Event' : 'Create New Event'} wide>
        <form onSubmit={handleSave} className="flex flex-col gap-5">
          <div>
            <label className={adminLabel}>Event Title *</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="e.g. Eureka Pitching 2026"
              className={adminInput}
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={adminLabel}>Date *</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className={adminInput}
                required
              />
            </div>
            <div>
              <label className={adminLabel}>Mode</label>
              <select
                value={form.mode}
                onChange={(e) => setForm({ ...form, mode: e.target.value })}
                className={adminInput}
              >
                <option value="Offline">Offline</option>
                <option value="Online">Online</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={adminLabel}>Venue</label>
              <input
                type="text"
                value={form.venue}
                onChange={(e) => setForm({ ...form, venue: e.target.value })}
                className={adminInput}
              />
            </div>
            <div>
              <label className={adminLabel}>Status</label>
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                className={adminInput}
              >
                <option value="upcoming">Upcoming</option>
                <option value="past">Past</option>
              </select>
            </div>
          </div>

          <div>
            <label className={adminLabel}>Registration URL (optional)</label>
            <input
              type="url"
              value={form.registrationUrl || ''}
              onChange={(e) => setForm({ ...form, registrationUrl: e.target.value })}
              placeholder="https://forms.google.com/…"
              className={adminInput}
            />
          </div>

          <div>
            <label className={adminLabel}>Short Tagline</label>
            <input
              type="text"
              value={form.tagline}
              onChange={(e) => setForm({ ...form, tagline: e.target.value })}
              placeholder="e.g. Pitch Your Startup Idea"
              className={adminInput}
            />
          </div>

          <div>
            <label className={adminLabel}>Description</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="Details about the competition or workshop…"
              rows={3}
              className={`${adminInput} resize-none`}
            />
          </div>

          <Button type="submit" variant="primary" size="md" arrow className="justify-center">
            {editing ? 'Save Changes' : 'Publish Event'}
          </Button>
        </form>
      </Modal>

      <div className={adminCard}>
        {events.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className={adminTh}>Title</th>
                  <th className={adminTh}>Date</th>
                  <th className={adminTh}>Mode</th>
                  <th className={adminTh}>Status</th>
                  <th className={adminTh}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map((ev) => (
                  <tr key={ev.id}>
                    <td className={adminTd}>
                      <div className="font-medium text-ink">{ev.title}</div>
                      {ev.tagline && <div className="text-xs text-muted">{ev.tagline}</div>}
                    </td>
                    <td className={adminTd}>{formatDate(ev.date)}</td>
                    <td className={adminTd}>{ev.mode}</td>
                    <td className={adminTd}>
                      <button type="button" onClick={() => toggleStatus(ev)} title="Toggle status">
                        <StatusBadge status={ev.status || 'upcoming'} />
                      </button>
                    </td>
                    <td className={adminTd}>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => openEdit(ev)}
                          className="text-[13px] font-medium text-ink underline underline-offset-2 decoration-[rgba(27,29,30,0.3)] hover:decoration-ink"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(ev.id)}
                          className="text-[13px] font-medium text-[#c74a62] underline underline-offset-2 decoration-[#f4889a]/50 hover:decoration-[#c74a62]"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-5">
            <EmptyState text="No events yet — create your first campus event." />
          </div>
        )}
      </div>
    </div>
  );
}
