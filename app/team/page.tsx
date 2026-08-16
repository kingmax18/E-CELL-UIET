'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TeamCard from '@/components/team/TeamCard';
import FounderCard from '@/components/team/FounderCard';
import FacultySection from '@/components/team/FacultySection';
import SectionHeader from '@/components/ui/SectionHeader';
import CTABanner from '@/components/home/CTABanner';
import { useData } from '@/context/DataProvider';
import { departments } from '@/data/team';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function TeamPage() {
  const { team, founders, faculty } = useData();
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        {/* Page Hero */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none overflow-hidden bg-[linear-gradient(71deg,rgba(217,243,252,0.38)_11%,rgba(235,248,253,0.45)_45.7%,rgba(255,255,255,0.54)_64.5%,rgba(253,241,211,0.66)_100%)] [mask-image:linear-gradient(to_bottom,black_55%,transparent_92%)] [-webkit-mask-image:linear-gradient(to_bottom,black_55%,transparent_92%)]">
            <img
              src="/assets/images/ntUDPbezGATca4W8ayYcVbeQbM.svg"
              alt=""
              className="w-full h-full object-cover opacity-90"
            />
          </div>
          <div className="relative max-w-[1272px] mx-auto px-6 pt-[160px] pb-[72px] text-center">
            <div className="inline-flex py-1.5 px-4 bg-white border border-border rounded-pill text-xs font-medium uppercase tracking-[0.08em] text-secondary mb-5">
              UIET E-Cell · Team &amp; Founders
            </div>
            <h1 className="font-sans font-medium text-[clamp(36px,5.5vw,64px)] leading-[1.08] tracking-[-0.04em] text-ink mb-5 [text-wrap:balance]">
              The drivers behind{' '}
              <span className="font-serif italic font-normal text-[1.05em]">our ecosystem</span>
            </h1>
            <p className="text-[clamp(16px,1.8vw,18px)] leading-[1.6] text-secondary max-w-[720px] mx-auto">
              Meet the student leaders, department heads, and founding pioneers building UIET E-Cell at MDU
              Rohtak.
            </p>
          </div>
        </section>

        {/* Founding Members Section */}
        <section className="py-[clamp(56px,7vw,80px)]">
          <div className="max-w-[1272px] mx-auto px-6">
            <SectionHeader
              badge="Founding Pioneers"
              title="Honoring the architects of"
              italicTitle="UIET E-Cell"
              subtitle="The visionaries who founded the Entrepreneurship Cell and laid the foundations of student-led innovation."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {founders.map((f: { id: number }) => (
                <FounderCard key={f.id} founder={f} />
              ))}
            </div>
          </div>
        </section>

        {/* Core Team by Department */}
        <section className="py-[clamp(56px,7vw,80px)]">
          <div className="max-w-[1272px] mx-auto px-6">
            <SectionHeader
              badge="Current Executive Board"
              title="Active student leadership by"
              italicTitle="department"
              subtitle="Organized across 6 core functional areas to deliver campus-wide impact."
            />

            {departments.map((dept: string) => {
              const deptMembers = team
                .filter((m: { department: string; order?: number }) => m.department === dept)
                .sort((a: { order?: number }, b: { order?: number }) => (a.order || 99) - (b.order || 99));

              if (deptMembers.length === 0) return null;

              return (
                <div key={dept} className="mb-12 last:mb-0">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="h-[7px] w-[7px] rounded-full bg-ink" />
                    <h3 className="font-sans font-medium text-[clamp(19px,2.2vw,24px)] tracking-[-0.02em] text-ink">
                      {dept}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {deptMembers.map((member: { id: number }) => (
                      <TeamCard key={member.id} member={member} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Faculty Advisor Section */}
        <FacultySection faculty={faculty} />

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
