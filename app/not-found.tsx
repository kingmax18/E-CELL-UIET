import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] flex items-center justify-center py-40 px-6">
        <div className="text-center max-w-[640px]">
          {/* Selection box around 404 — Awake style */}
          <div className="relative inline-block mb-10 px-16 py-8 border border-border rounded-panel">
            <span className="absolute -top-[5px] -left-[5px] h-2.5 w-2.5 rounded-full bg-ink" />
            <span className="absolute -top-[5px] -right-[5px] h-2.5 w-2.5 rounded-full bg-ink" />
            <span className="absolute -bottom-[5px] -left-[5px] h-2.5 w-2.5 rounded-full bg-ink" />
            <span className="absolute -bottom-[5px] -right-[5px] h-2.5 w-2.5 rounded-full bg-ink" />
            <span className="font-sans font-medium text-[clamp(72px,10vw,120px)] leading-none tracking-[-0.045em] text-ink">
              404
            </span>
          </div>

          <h1 className="font-sans font-medium text-[clamp(28px,4vw,44px)] leading-[1.12] tracking-[-0.035em] text-ink mb-4 [text-wrap:balance]">
            Oops! The page you are looking for{' '}
            <span className="font-serif italic font-normal text-[1.05em]">doesn&apos;t exist</span>
          </h1>

          <p className="text-[16px] leading-[1.6] text-secondary mb-8">
            The URL may have been moved, deleted, or entered incorrectly.
          </p>

          <div className="flex justify-center">
            <Button href="/" variant="primary" size="lg" arrow>
              Back To Home
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
