import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Terms & Conditions',
};

const sectionClass = 'font-sans font-medium text-lg tracking-[-0.015em] text-ink mb-3';
const textClass = 'text-[15px] leading-[1.7] text-secondary';

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[150px] pb-20 px-6">
        <div className="max-w-[800px] mx-auto">
          <h1 className="font-sans font-medium text-[clamp(30px,4vw,44px)] tracking-[-0.035em] text-ink mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-[15px] text-secondary mb-10">
            Last updated: August 2026 · UIET E-Cell, Maharshi Dayanand University, Rohtak
          </p>

          <div className="flex flex-col gap-8">
            <section>
              <h2 className={sectionClass}>1. Acceptance of Terms</h2>
              <p className={textClass}>
                By accessing or using the UIET E-Cell website (ecellmdu.in) and participating in our
                competitions, workshops, and membership programs, you agree to comply with these terms.
              </p>
            </section>

            <section>
              <h2 className={sectionClass}>2. Student Conduct &amp; Intellectual Property</h2>
              <p className={textClass}>
                All startup ideas, project submissions, and pitch materials presented by students remain the
                intellectual property of their respective creators. Participants agree not to plagiarize,
                misrepresent, or copy other teams&apos; work during hackathons and pitching events.
              </p>
            </section>

            <section>
              <h2 className={sectionClass}>3. Event Participation &amp; Certificates</h2>
              <p className={textClass}>
                Certificates of participation, merit awards, and seed grants are awarded based on attendance
                and faculty jury evaluations. The decisions of the judging panel and executive board are final.
              </p>
            </section>

            <section>
              <h2 className={sectionClass}>4. Platform Modifications</h2>
              <p className={textClass}>
                UIET E-Cell reserves the right to modify event schedules, registration deadlines, and portal
                features without prior notice.
              </p>
            </section>

            <section>
              <h2 className={sectionClass}>5. Contact &amp; Grievances</h2>
              <p className={textClass}>
                For official correspondence, please email{' '}
                <a href="mailto:ecelluietfs@gmail.com" className="text-ink font-medium hover:underline">
                  ecelluietfs@gmail.com
                </a>{' '}
                or visit the UIET E-Cell room on the MDU Rohtak campus.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
