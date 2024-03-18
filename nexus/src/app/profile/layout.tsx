import SideNav from '@/app/profile/ui/socials';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <div className="flex h-screen flex-col md:flex-row">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12 ">{children}</div>
    </div>
    </>
  );
}