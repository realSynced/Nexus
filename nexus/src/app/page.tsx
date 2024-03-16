'use client'
import Navbar from "@/app/ui/navbar"
import { oxanium } from "@/app/ui/fonts"
import styles from "@/app/ui/styles.module.css";

export default function Home() {


  return (
    <div className="min-h-screen">
      <section className={`${oxanium.className} flex h-svh justify-center items-center text-center text-8xl`}>
          <div className="flex flex-row space-x-10 ">
              <div className={``}>
                <h1>Nexus</h1>
                {/* <p className="text-2xl">A point of connection</p> */}
                <p className="text-2xl">Where creativity begins.</p>
              </div>
              <div className={`${styles.inf}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                  className="w-32 h-32 ml-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
              <div className="-translate-y-4 top-10">
                <div className="border-4 border-black rounded-full p-8 text-xl ">
                    <p>Learn to <span className="font-bold underline">code</span></p>
                    <p>Become a developer</p>
                    <p>Find <span className="font-bold underline">work</span></p>
                    <p className="font-bold text-2xl">Get Started.</p>
                </div>
              </div>
          </div>
          {/* &lt; < left  &gt; > right */}
      </section>
      <section className={`${oxanium.className} flex h-dvh justify-center items-center text-center text-8xl`}>
          
          <div className={`mb-24`}>
            <h1>Nexus</h1>
            <p className="text-4xl">&lt;A center for developers/&gt;</p>
          </div>
      </section>
      
    </div>
  );
}
