'use client';

import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { supabase } from '@/lib/supabase';
import type { AdminUser } from '@/lib/types';

interface LoginResult {
  success: boolean;
  error?: string;
}

interface AdminAuthContextValue {
  user: AdminUser | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<LoginResult>;
  logout: () => void;
}

const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL?.trim().toLowerCase();
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
const IS_DEV_FALLBACK_ENABLED =
  process.env.NODE_ENV === 'development' && Boolean(ADMIN_EMAIL) && Boolean(ADMIN_PASSWORD);

const AdminAuthContext = createContext<AdminAuthContextValue>({
  user: null,
  isAuthenticated: false,
  login: async () => ({ success: false }),
  logout: () => {},
});

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('ECELL_ADMIN_SESSION');
      if (saved) {
        const parsed = JSON.parse(saved) as AdminUser;
        if (parsed?.email) {
          setUser(parsed);
        }
      }
    } catch (e) {
      console.warn('[AdminAuth] LocalStorage parse warning:', e);
    }
  }, []);

  const login = async (email: string, password: string): Promise<LoginResult> => {
    const cleanEmail = email.trim().toLowerCase();

    if (supabase) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: cleanEmail,
          password,
        });

        if (!error && data?.user) {
          const authUser: AdminUser = {
            email: data.user.email || cleanEmail,
            name: data.user.email?.split('@')[0] || 'Admin',
            role: 'Super Admin',
          };

          setUser(authUser);
          localStorage.setItem('ECELL_ADMIN_SESSION', JSON.stringify(authUser));
          return { success: true };
        }

        if (error) {
          console.warn('[AdminAuth] Supabase auth failed:', error.message);
        }
      } catch (err) {
        console.warn('[AdminAuth] Supabase auth attempt failed:', err);
      }
    }

    if (
      IS_DEV_FALLBACK_ENABLED &&
      cleanEmail === ADMIN_EMAIL &&
      password === ADMIN_PASSWORD
    ) {
      const authUser: AdminUser = {
        email: ADMIN_EMAIL,
        name: 'Local Admin',
        role: 'Developer',
      };
      setUser(authUser);
      localStorage.setItem('ECELL_ADMIN_SESSION', JSON.stringify(authUser));
      return { success: true };
    }

    return {
      success: false,
      error: supabase
        ? 'Invalid credentials. Please verify your admin email and password.'
        : 'Admin authentication is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your environment.',
    };
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem('ECELL_ADMIN_SESSION');
      if (supabase) {
        void supabase.auth.signOut();
      }
    } catch (e) {
      console.warn('[AdminAuth] Logout warning:', e);
    }
  };

  return (
    <AdminAuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  return useContext(AdminAuthContext);
}
