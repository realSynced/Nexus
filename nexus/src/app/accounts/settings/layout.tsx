import { Metadata } from "next";
import SideNav from "@/app/accounts/settings/components/Sidenav";


export const metadata: Metadata = {
    title: "Nexus | Settings",
    description: "A home for developers, market for recruiters. Whether you're a beginner, or senior level developer, you can find your place here at Nexus.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    
      {/* <Navbar/> */}
      <div className="flex h-screen flex-col md:flex-row ">
        <div className="w-full flex-none md:w-64 ">
          <SideNav/>
        </div>
        <div className="grow p-6 md:overflow-y-hidden md:p-12">{children}</div>

      </div>
    
    </>
  );
}