import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Nexus",
    description: "A home for developers, market for recruiters. Whether you're a beginner, or senior level developer, you can find your place here at Nexus.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    
      {/* <Navbar/> */}
      <div className="flex h-screen flex-col md:flex-row overflow-hidden">
        <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    
    </>
  );
}