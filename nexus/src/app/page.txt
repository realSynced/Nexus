// "use client";
import { Metadata } from "next";
import Navbar from "@/app/ui/navbar";
import { oxanium } from "@/app/ui/fonts";
import { Icon } from '@iconify-icon/react';
import Link from "next/link"
import styles from "@/app/ui/styles.module.css";

 
export const metadata: Metadata = {
  title: 'Nexus | Home',
};
// Icons: https://icons8.com/icons

export default function Home() {
  return (
    <div className="flex flex-col bg slategray min-h-screen">
      {/* <Navbar/> */}
      <section className={`${oxanium.className} flex flex-col h-svh justify-center items-center text-center text-8xl`}>
        <div className="flex flex-col space-x-10  ">
          <div className="">
            <div className="flex border border-gray-600 border-dashed border-opacity-50 border-x-0">
                
                <h1 className="font-bold  p-4 text-transparent bg-clip-text bg-gradient-to-b from-gray-600 to-black">A home for developers, market for recruiters</h1>
              </div>
            <div className="border border-gray-600 border-dashed border-t-0 border-x-0 border-opacity-50"><p className="text-2xl ">Learn. Create. Explore.</p></div>
          </div>
        </div>        
      </section>
      
      <section className={`${oxanium.className} bg-gradient-to-b from-transparent to-blue-500 bg-opacity-50 flex h-auto md:h-svh justify-center text-center text-3xl`}>
          <div className="flex flex-col md:flex-col space-y-20 md:space-y-20 md:space-x-10 ">
            <div className="flex flex-col md:flex-col space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start items-center">
              <h1 className="font-bold">What is Nexus?</h1>
              <p className="text-2xl mt-1 ml-2">A market and learning center all in 1 place.</p>
            </div>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 px-6 md:box-sizing md:pr-8 ">
              
              <div className="flex w-full md:w-2/5 border-2 border-gray-600 bg-gradient-to-b from-slate-200 to-gray-300 rounded-lg justify-center items-center drop-shadow-2xl">
                <div className="w-4/5">
                  <Icon icon="ci:folder-code" width="5rem" height="5rem" />
                  <h1 className="">Don't know where to start?</h1>
                  <p className="text-xl text-gray-600">Let us be the light at the end of the tunnel. With our comprehensive courses and dynamic pathways, you'll be on track in no time!</p>
                </div>
              </div>

              <div className="flex w-full md:w-2/5 border-2 border-gray-600 bg-gradient-to-b from-slate-200 to-gray-300 rounded-lg text-center justify-center items-center mt-4 md:mt-0 drop-shadow-2xl">
                <div className="w-4/5">
                  <Icon icon="icon-park-outline:code-computer" width="5rem" height="5rem" />
                  <h1>Need a job/gig?</h1>
                  <p className="text-xl text-gray-600">Check out our marketplace. Never be jobless again with our simple job finding algorithm.</p>
                </div>
              </div>

              <div className="flex w-full md:mr-0 md:w-2/5 border-2 border-gray-600 bg-gradient-to-b from-slate-200 to-gray-300 rounded-lg text-center justify-center items-center mt-4 md:mt-0 drop-shadow-2xl">
                <div className="w-4/5">
                  <Icon icon="icon-park-solid:brain" width="5rem" height="5rem" />
                  <h1>Ready to start?</h1>
                  <p className="text-xl text-gray-600">Click below to get started.</p>
                  <button className="my-2 p-2 rounded-2xl border-2 border-gray-400 bg-slate-200 text-xl transition-all duration-200 hover:scale-105 hover:bg-slate-300"><Link href="">Get Started</Link></button>
                </div>
              </div>
              
            </div>
            <div>
              <p>Well you've come to the right place.</p>
            </div>
          </div>
        </section>


    </div>
  );
}
