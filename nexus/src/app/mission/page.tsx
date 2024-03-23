import type { Metadata } from "next";
import { oxanium } from "../ui/fonts";
import Link from "next/link"

export const metadata: Metadata = {
    title: "Nexus | Our Mission",
    // description: "A home for developers, market for recruiters. Whether you're a beginner, or senior level developer, you can find your place here at Nexus.",
  };



export default function Mission() {
    

    return ( 
        <section className={`${oxanium.className} flex flex-col h-svh  text-6xl`}>
          <div className="flex flex-col">
            
            <div className="flex pt-4 justify-center">
                  <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-600 to-black">Our Mission</h1>
                </div>
            </div>
            <div id="why" className="">
                <h1 className=" text-4xl">Why</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, temporibus ut dicta odit magnam ipsa ullam doloremque quisquam modi quos velit sequi molestias voluptates dolore hic repellendus ad, quibusdam in!</p>
            </div>
          
        </section>
    );

}