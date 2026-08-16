import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

interface Faculty {
  name: string;
  designation: string;
  bio?: string;
  email?: string;
  photo?: string;
}

export default function FacultySection({ faculty }: { faculty: Faculty }) {
  if (!faculty) return null;

  return (
    <section className="py-[clamp(56px,7vw,80px)]">
      <div className="max-w-[1272px] mx-auto px-6">
        <div className="reveal bg-white border border-border rounded-panel p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-40 h-40 rounded-panel overflow-hidden shrink-0 bg-[#f8fafc]">
            <Image
              src={faculty.photo || '/gallery/page_28.jpg'}
              alt={faculty.name}
              width={160}
              height={160}
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <span className="text-[13px] font-medium text-secondary bg-soft py-1 px-3 rounded-pill">
              Faculty Advisor
            </span>
            <h3 className="font-sans font-medium text-2xl tracking-[-0.02em] text-ink">{faculty.name}</h3>
            <p className="text-[15px] text-secondary">{faculty.designation}</p>
            {faculty.bio && <p className="text-[15px] leading-[1.65] text-secondary max-w-[640px] mt-2">{faculty.bio}</p>}

            {faculty.email && (
              <div className="mt-4">
                <Button href={`mailto:${faculty.email}`} variant="primary" size="sm" arrow>
                  Contact Advisor
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
