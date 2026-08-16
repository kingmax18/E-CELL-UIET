export const SITE = {
  name: 'UIET E-Cell',
  fullName: 'Entrepreneurship Cell, UIET, Maharshi Dayanand University',
  tagline: 'Ideas Into Impact',
  vision: 'Inspiring a Generation of Changemakers',
  mission: 'Learn. Collaborate. Showcase.',
  email: 'ecelluietfs@gmail.com',
  url: 'https://ecellmdu.in',
  address: 'MDU Campus, UIET Building, Rohtak, Haryana - 124001',
};

import type { NavLink, Pillar, CoreValue, FAQItem } from './types';

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Join Us' },
];

export const PILLARS: Pillar[] = [
  {
    number: '01',
    title: 'Entrepreneurial Mindset',
    description: 'Inspiring students to think creatively, embrace innovation, and explore new ideas beyond traditional paths.',
    image: '/gallery/page_32.jpg',
  },
  {
    number: '02',
    title: 'Skill-Building & Workshops',
    description: 'Hands-on workshops, technical masterclasses, and practical learning to build skills on campus.',
    image: '/gallery/page_43.jpg',
  },
  {
    number: '03',
    title: 'Events & Ideathons',
    description: 'Student pitch showcases, ideathons, and interactive guest sessions to share knowledge and inspire.',
    image: '/gallery/page_3.jpg',
  },
  {
    number: '04',
    title: 'Student Community',
    description: 'Bringing together students across engineering, management, and science departments to collaborate.',
    image: '/gallery/page_20.jpg',
  },
];

export const CORE_VALUES: CoreValue[] = [
  { number: '01', label: 'Execution', title: 'Bias Toward Action', description: 'We value working code and real customer feedback over lengthy pitch decks.' },
  { number: '02', label: 'Community', title: 'Founders Help Founders', description: 'Great companies are built in packs. We share leads, introductions, and technical solutions freely.' },
  { number: '03', label: 'Ambition', title: 'Uncompromising Quality', description: 'We build for national scale. Every workshop, event, and product meets studio-grade standards.' },
];

export const FAQ_ITEMS: FAQItem[] = [
  { question: 'What is UIET E-Cell?', answer: 'UIET E-Cell is the official Entrepreneurship Cell of UIET, Maharshi Dayanand University, Rohtak. We foster student startups, innovation workshops, ideathons, and mentorship programs.' },
  { question: 'Who can join UIET E-Cell?', answer: 'Any student enrolled at MDU Rohtak across any department — engineering, management, commerce, science — can apply to join. We welcome diverse backgrounds.' },
  { question: 'How do I apply to become a member?', answer: 'Visit our Join Us page and fill out the membership application form. The E-Cell executive board reviews applications within 5-7 days.' },
  { question: 'What departments can I join?', answer: 'We have 5 core departments: Social Media, Design & Tech, Research & Content, Event Management, and Documentation. Choose the one that matches your skills and interests.' },
  { question: 'Are there any fees to join?', answer: 'No, UIET E-Cell membership is completely free. We are a student-run initiative supported by the university.' },
  { question: 'How often do you organize events?', answer: 'We organize events and workshops throughout the academic year — typically 1-2 per month, plus our annual E-Summit flagship event.' },
];
