import Link from "next/link"
import { oxanium } from "@/app/ui/fonts";
// import { Icon } from '@iconify-icon/react';
import { motion } from "framer-motion"
import "animate.css/animate.min.css";
import "react-daisyui"


 
// export const metadata: Metadata = {
//   title: 'Nexus | Home',
// };
// Icons: https://icons8.com/icons

export default function MainSection() {

 
  return (
        <section className={`${oxanium.className} flex flex-col h-svh justify-center items-center text-center text-6xl`}>
          <div className="flex flex-col space-x-10">
            <div className="">
              <div className="flex px-80  ">
                  <h1 className="animate__fadeInUp animate__bounce font-bold  p-4 text-transparent bg-clip-text bg-gradient-to-b from-gray-600 to-black">A home for developers, market for recruiters</h1>
                </div>
              <div className="">
                <p className="text-2xl ">Learn. Create. Explore.</p>
              </div>
            </div>
          </div>

          <div className="mockup-browser border bg-base-300 ">
            <div className="mockup-browser-toolbar">
              <div className="input">
                  https://nexus.com/get-started
              </div>
            </div>
            <div className="flex justify-center px-4 py-16 bg-base-200 text-2xl"><Link href="/get-started">Get Started Today!</Link></div>
          </div>    
        </section>
  );
}
