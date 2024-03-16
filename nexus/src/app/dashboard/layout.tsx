import SideNav from '@/app/dashboard/ui/sidenav';
import Navbar from "@/app/components/Navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Navbar/>
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
    </>
  );
}