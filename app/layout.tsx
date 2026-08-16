import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { DataProvider } from '@/context/DataProvider';
import { ToastProvider } from '@/context/ToastProvider';

export const metadata: Metadata = {
  title: {
    default: 'UIET E-Cell | Entrepreneurship Cell, MDU Rohtak',
    template: '%s | UIET E-Cell',
  },
  description:
    'Official Entrepreneurship Cell of Maharshi Dayanand University (MDU), Rohtak. Fostering student startups, innovation workshops, seed grants, and mentorship.',
  keywords: ['E-Cell', 'UIET', 'MDU', 'Rohtak', 'Entrepreneurship', 'Startups', 'Innovation'],
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <DataProvider>
          <ToastProvider>{children}</ToastProvider>
        </DataProvider>
      </body>
    </html>
  );
}
