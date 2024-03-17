"use client";
import Navbar from "@/app/ui/navbar";
import { oxanium } from "@/app/ui/fonts";
import styles from "@/app/ui/styles.module.css";

// Icons: https://icons8.com/icons

export default function Home() {
  return (
    <div className={` slategray min-h-screen`}>
      <section className={`${oxanium.className} flex h-svh justify-center items-center text-center text-8xl`}>
        <div className="flex flex-row space-x-10 ">
          <div className={`px-96`}>
            <h1>A home for developers.</h1>
            {/* <p className="text-2xl">A point of connection</p> */}
            <p className="text-2xl">Learn. Create. Explore.</p>
          </div>
        </div>
        {/* &lt; < left  &gt; > right */}
      </section>
      
      <section className={`${oxanium.className} bg-gradient-to-b from-transparent to-blue-500 bg-opacity-50 flex h-svh justify-center text-center text-3xl`}>
        <div className="flex flex-col space-y-20 space-x-10 ">
          
          <div className="flex flex-row space-x-4 justify-center">
            <h1 className="font-bold">What is Nexus?</h1>
            <p className="text-2xl mt-1 ml-2">A market and learning center all in 1 place.</p>
          </div>

          <div className="flex flex-row space-x-10">

            
            <div className="flex bg-gradient-to-b from-slate-200 to-gray-300 rounded-lg p-4 text-center justify-center items-center">
              <div className="w-3/4">
                <h1>Don't know where to start?</h1>
              </div>
            </div>
            <div className="flex bg-gradient-to-b from-slate-200 to-gray-300 rounded-lg p-4 text-center justify-center items-center">
              <h1>Need a job?</h1>
            </div>
            <div className="flex bg-gradient-to-b from-slate-200 to-gray-300 rounded-lg p-4 text-center justify-center items-center">
              <h1>Need a Gig?</h1>
            </div>

          </div>

        </div>
        {/* &lt; < left  &gt; > right */}
      </section>
    </div>
  );
}
