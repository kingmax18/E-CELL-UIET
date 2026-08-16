import React from 'react';

export default function VisionMission() {
  return (
    <section className="py-[clamp(56px,7vw,80px)]">
      <div className="max-w-[1272px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vision Card */}
          <div className="reveal bg-white border border-border rounded-panel p-8 md:p-10 transition-all duration-200 hover:-translate-y-1 hover:border-borderstrong">
            <span className="text-[13px] font-medium text-secondary uppercase tracking-[0.06em]">
              Vision Statement
            </span>
            <h3 className="font-sans font-medium text-[clamp(22px,2.6vw,30px)] leading-[1.2] tracking-[-0.03em] text-ink my-4">
              &ldquo;Inspiring a Generation of{' '}
              <span className="font-serif italic font-normal text-[1.05em]">Changemakers</span>&rdquo;
            </h3>
            <ul className="flex flex-col gap-4 text-[15px] leading-[1.65] text-secondary">
              <li>
                <strong className="text-ink font-medium">1. Inspire Innovation:</strong> Encouraging every
                student on campus to think differently and explore bold ideas beyond traditional paths.
              </li>
              <li>
                <strong className="text-ink font-medium">2. Empower Future Founders:</strong> Giving students
                practical skills, frameworks, and confidence to build real startups.
              </li>
              <li>
                <strong className="text-ink font-medium">3. Create Meaningful Impact:</strong> Turning raw
                student concepts into sustainable, scalable solutions for society.
              </li>
            </ul>
          </div>

          {/* Mission Card */}
          <div className="reveal bg-white border border-border rounded-panel p-8 md:p-10 transition-all duration-200 hover:-translate-y-1 hover:border-borderstrong">
            <span className="text-[13px] font-medium text-secondary uppercase tracking-[0.06em]">
              Mission Statement
            </span>
            <h3 className="font-sans font-medium text-[clamp(22px,2.6vw,30px)] leading-[1.2] tracking-[-0.03em] text-ink my-4">
              &ldquo;Empowering Students to{' '}
              <span className="font-serif italic font-normal text-[1.05em]">Learn. Collaborate. Succeed.</span>&rdquo;
            </h3>
            <ul className="flex flex-col gap-4 text-[15px] leading-[1.65] text-secondary">
              <li>
                <strong className="text-ink font-medium">• Entrepreneurial Mindset:</strong> Fostering
                creative thinking and problem-solving across all engineering &amp; management streams.
              </li>
              <li>
                <strong className="text-ink font-medium">• Knowledge Sharing:</strong> Hosting practical
                masterclasses, workshops, and speaker series with industry leaders.
              </li>
              <li>
                <strong className="text-ink font-medium">• Student Ideathons:</strong> Creating opportunities
                to present ideas, receive faculty mentorship, and secure seed support.
              </li>
              <li>
                <strong className="text-ink font-medium">• Diverse Community:</strong> Uniting students across
                CSE, ECE, Mechanical, Biotech, MBA, and Commerce.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
