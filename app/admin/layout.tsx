import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { AdminAuthProvider } from '@/context/AdminAuthProvider';

export const metadata: Metadata = {
  title: 'Admin Board | UIET E-Cell',
  description: 'Protected Administration Board for UIET E-Cell',
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <AdminAuthProvider>{children}</AdminAuthProvider>;
}
