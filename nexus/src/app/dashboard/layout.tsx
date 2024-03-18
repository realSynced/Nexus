'use client'
import { Metadata } from 'next';
import { SessionProvider } from "next-auth/react";
import Navbar from "@/app/ui/navbar"
import SideNav from '@/app/dashboard/ui/sidenav';



export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <SessionProvider>
      {/* <Navbar/> */}
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    </SessionProvider>
    </>
  );
}