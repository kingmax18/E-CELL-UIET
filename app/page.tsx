'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import LogoStrip from '@/components/home/LogoStrip';
import StatsSection from '@/components/home/StatsSection';
import ServicesSection from '@/components/home/ServicesSection';
import EventsPreview from '@/components/home/EventsPreview';
import TeamPreview from '@/components/home/TeamPreview';
import TestimonialSection from '@/components/home/TestimonialSection';
import AccoladesSection from '@/components/home/AccoladesSection';
import FAQSection from '@/components/home/FAQSection';
import CTABanner from '@/components/home/CTABanner';
import { useData } from '@/context/DataProvider';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function HomePage() {
  const { faculty, stats } = useData();
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogoStrip />
        <StatsSection stats={stats} />
        <ServicesSection />
        <EventsPreview />
        <TeamPreview />
        <TestimonialSection faculty={faculty} />
        <AccoladesSection />
        <FAQSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
