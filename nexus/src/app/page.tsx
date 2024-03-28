
"use client";
// import { Metadata } from "next";
import MainSection from "@/app/ui/landing-sections/section1";
import SecondarySection from "@/app/ui/landing-sections/section2";
import Footer from '@/app/ui/components/Footer';
import "animate.css/animate.min.css";
 
// export const metadata: Metadata = {
//   title: 'Nexus | Home',
// };
// Icons: https://icons8.com/icons
// Helpful: https://angrytools.com/gradient/

export default function Home() {

 
  return (
    <div className="flex flex-col bg slategray min-h-screen">
        <MainSection/>
        <SecondarySection/>
        <Footer/>
    </div>
  );
}
