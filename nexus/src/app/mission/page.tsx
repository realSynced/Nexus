'use client'
import type { Metadata } from "next";
import { oxanium, roboto } from "../ui/fonts";


import Link from "next/link"

// export const metadata: Metadata = {
//     title: "Nexus | Our Mission",
//     // description: "A home for developers, market for recruiters. Whether you're a beginner, or senior level developer, you can find your place here at Nexus.",
//   };



export default function Mission() {
    

    return ( 
        <section className={`${oxanium.className} flex flex-col h-svh  text-6xl`}>
          <div className="flex flex-col">
            
            <div className="flex pt-24 justify-center pb-4">
                  <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-600 to-black">Our Mission</h1>
                </div>
            </div>
            <div id="why" className={`${roboto.className} justify-center p-12`}>
                <h1 className=" text-4xl">Why?</h1>
                <p className="ml-2 pl-2 border-4 border-spacing-2 border-gray-400 border-y-0 border-r-0 border-opacity-50 text-2xl font-normal">
                  Because why not? Honestly. Whether you're a developer or just learning, there must've come a time where you thought about where <br/>
                  or how will you find work. How can you use your amazing knowledge and talent to generate you can income worth working for?
                </p>
            </div>
            <div id="mission" className={`${roboto.className} justify-center p-12`}>
                <h1 className=" text-4xl">Our mission</h1>
                <p className="ml-2 pl-2 border-4 border-spacing-2 border-gray-400 border-y-0 border-r-0 border-opacity-50 text-2xl font-normal">
                  Now finally, the section you've all been waiting for. Why did we create this? What's the purpose? Let me give you a second to think about it.
                  Can you guess? Nexus was made to provide a central point for the client and developer to connect. A collaborative experience.
                  A place where you can find work despite experience level. Whether you're a junior programmer or a senior working at Google, this
                  is a place for all. <br/>
                  The mission is to provide a common ground for everyone of all backgrounds to <span className="underline">Learn</span>, <span className="underline">Create</span> and <span className="underline">Explore</span>.
                </p>
            </div>
          
        </section>
    );

}

// As a developer taking on the work of a client, there are moments where you need to explain something, or show the process in how 
//                   you got to the final product, or simply a timeline. This can be very tedious, as sometimes your language may be too complicated for
//                   the client to understand.