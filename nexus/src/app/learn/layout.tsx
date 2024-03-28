import { Metadata } from "next";
import SideNav from "@/app/learn/ui/components/sidenav";


export const metadata: Metadata = {
    title: "Nexus | Learn",
    description: "A home for developers, market for recruiters. Whether you're a beginner, or senior level developer, you can find your place here at Nexus.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    
      {/* <Navbar/> */}
      <div className="flex h-full flex-col md:flex-row">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="grow pr-2">{children}</div>

      </div>
    
    </>
  );
}