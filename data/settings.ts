import type { SiteSettings } from '@/lib/types';

export const settings: SiteSettings = {
  announcementBanner: {
    enabled: false,
    text: 'Applications Open for Batch 2026-27',
    linkText: 'Apply Now ↗',
    linkUrl: '/contact',
  },
  web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'ca0b970d-2396-4be4-96d0-f4f2697acddc',
  siteInfo: {
    email: 'ecelluietfs@gmail.com',
    phone: '+91 9812345678',
    address: 'MDU Campus, UIET Building, Rohtak, Haryana - 124001',
    instagram: 'https://instagram.com/ecell_mdu',
    linkedin: 'https://linkedin.com/company/mdu-ecell',
    twitter: 'https://x.com/ecell_mdu',
    youtube: 'https://youtube.com/@ecellmdu',
  },
  emailTemplates: {
    received: {
      subject: 'Application Received — UIET E-Cell Batch 2026-27',
      body: 'Dear {{applicant_name}},\n\nThank you for applying to join UIET E-Cell ({{department}} Department). We have received your application and our leadership team is currently reviewing it.\n\nWe will update you shortly.\n\nBest regards,\nUIET E-Cell Team\n{{ecell_email}}',
    },
    shortlisted: {
      subject: 'Interview Call — Shortlisted for UIET E-Cell ({{department}})',
      body: 'Dear {{applicant_name}},\n\nCongratulations! Your application for the {{department}} Department at UIET E-Cell has been SHORTLISTED FOR AN INTERVIEW!\n\nPlease reply to this email or contact us if you need to reschedule.\n\nBest of luck!\nUIET E-Cell Recruitment Team\n{{ecell_email}}',
    },
    accepted: {
      subject: 'Congratulations! Welcome to UIET E-Cell Batch 2026-27 🎉',
      body: 'Dear {{applicant_name}},\n\nWe are thrilled to inform you that your application for the {{department}} Department at UIET E-Cell has been ACCEPTED!\n\nPlease join our onboarding session this Saturday at 4:00 PM.\n\nWelcome aboard!\nUIET E-Cell Leadership',
    },
    rejected: {
      subject: 'Update regarding your UIET E-Cell Application',
      body: 'Dear {{applicant_name}},\n\nThank you for taking the time to apply for UIET E-Cell. While we were impressed by your background, we are unable to offer you a position in the {{department}} Department for this batch.\n\nWe encourage you to participate in our upcoming workshops and reapply next batch!\n\nWarm regards,\nUIET E-Cell Team',
    },
  },
};
