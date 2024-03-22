'use client'
import SideNav from '@/app/profile/ui/socials';
import { SessionProvider } from 'next-auth/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <div className="flex h-screen flex-col md:flex-row">
      <SessionProvider>
        <div className="grow p-6 md:overflow-y-auto md:p-12 ">{children}</div>
      </SessionProvider>
    </div>
    </>
  );
}