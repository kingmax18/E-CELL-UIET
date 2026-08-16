import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Privacy Policy',
};

const sectionClass = 'font-sans font-medium text-lg tracking-[-0.015em] text-ink mb-3';
const textClass = 'text-[15px] leading-[1.7] text-secondary';

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[150px] pb-20 px-6">
        <div className="max-w-[800px] mx-auto">
          <h1 className="font-sans font-medium text-[clamp(30px,4vw,44px)] tracking-[-0.035em] text-ink mb-4">
            Privacy Policy
          </h1>
          <p className="text-[15px] text-secondary mb-10">
            Last updated: August 2026 · UIET E-Cell, Maharshi Dayanand University, Rohtak
          </p>

          <div className="flex flex-col gap-8">
            <section>
              <h2 className={sectionClass}>1. Overview</h2>
              <p className={textClass}>
                UIET E-Cell (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates the official website for the
                Entrepreneurship Cell of UIET, Maharshi Dayanand University (MDU), Rohtak. This Privacy
                Policy explains how we collect, use, and protect your information when you interact with
                our platform, register for events, or apply for membership.
              </p>
            </section>

            <section>
              <h2 className={sectionClass}>2. Information We Collect</h2>
              <p className={textClass}>
                When you submit a membership application or register for an event, we may collect your full
                name, student enrollment number, college email address, phone number, branch/year of study,
                department preferences, and LinkedIn profile URL.
              </p>
            </section>

            <section>
              <h2 className={sectionClass}>3. How We Use Your Information</h2>
              <p className={textClass}>
                The collected information is solely used to process membership recruitment, communicate
                event updates, dispatch certificates of participation, and evaluate student applications.
                We do NOT sell, rent, or share student data with third-party advertisers.
              </p>
            </section>

            <section>
              <h2 className={sectionClass}>4. Data Security &amp; Storage</h2>
              <p className={textClass}>
                Student data is stored securely using encrypted cloud databases (Supabase). Access is
                restricted strictly to authorized members of the E-Cell Executive Board and Faculty Advisors.
              </p>
            </section>

            <section>
              <h2 className={sectionClass}>5. Contact Us</h2>
              <p className={textClass}>
                If you have questions regarding this Privacy Policy or wish to request removal of your
                submitted data, please contact the Tech Team at{' '}
                <a href="mailto:ecelluietfs@gmail.com" className="text-ink font-medium hover:underline">
                  ecelluietfs@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
