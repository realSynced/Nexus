import { Metadata } from "next";
import SideNav from "@/app/learn/ui/components/sidenav";
import Footer from "@/app/ui/components/Footer"


export const metadata: Metadata = {
    title: "Nexus | Learn",
    description: "A home for developers, market for recruiters. Whether you're a beginner, or senior level developer, you can find your place here at Nexus.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    
      {/* <Navbar/> */}
      <div className="flex flex-col md:flex-row overflow-y-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="grow pr-2">{children}</div>
      </div>
      <Footer></Footer>
    </>
  );
}