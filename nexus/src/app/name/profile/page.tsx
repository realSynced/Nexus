'use client'
import { oxanium } from "@/app/ui/fonts"
import { useState, useEffect } from "react";

export default function Profile() {


  return (
    <div className="min-h-screen">
      <section className={`${oxanium.className} flex h-dvh justify-center items-center text-center text-8xl`}>
          
          <div className={`mb-18`}>
            <h1>Nexus</h1>
            <p className="text-4xl">&lt;A center for developers/&gt;</p>
          </div>
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
