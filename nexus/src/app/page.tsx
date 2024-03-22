
"use client";
// import { Metadata } from "next";
import { Theme, Button } from 'react-daisyui'
import Navbar from "@/app/ui/navbar";
import { oxanium } from "@/app/ui/fonts";
import MainSection from "@/app/ui/landing-sections/section1";
import SecondarySection from "@/app/ui/landing-sections/section2";
import "animate.css/animate.min.css";
import "react-daisyui"


 
// export const metadata: Metadata = {
//   title: 'Nexus | Home',
// };
// Icons: https://icons8.com/icons

export default function Home() {

 
  return (
    <div className="flex flex-col bg slategray min-h-screen">
        <MainSection/>
        <SecondarySection/>
    </div>
  );
}
