'use client'
import Navbar from "@/app/ui/navbar"
import { oxanium } from "@/app/ui/fonts"

export default function Home() {


  return (
    <div className="min-h-screen">
      <section className={`${oxanium.className} flex h-svh justify-normal items-center text-center text-8xl`}>
          <div className={`top-4 px-36 mr-auto justify-start`}>
            <h1>Nexus</h1>
            <p className="text-2xl">A point of connection</p>
            <p className="text-2xl">where creativity begins.</p>
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
