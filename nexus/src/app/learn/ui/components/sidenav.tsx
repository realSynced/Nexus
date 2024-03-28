'use client'
import Link from 'next/link';
import NavLinks from '@/app/learn/ui/components/nav-links';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 md:px-2">
      <div className="flex grow flex-row justify-between md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        {/* <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div> */}
      </div>
    </div>
  );
}