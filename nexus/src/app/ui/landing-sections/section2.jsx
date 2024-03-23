
import { oxanium, roboto } from "@/app/ui/fonts";


import Link from "next/link"



export default function SecondarySection() {
    

    return ( 
        <section className={`${roboto.className} flex flex-col h-svh`}>
          <div className="flex flex-col">
            
            <div className="flex justify-center pb-4 text-4xl">
                  <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-600 to-black">What is Nexus?</h1>
                </div>
            </div>

            <div className="flex flex-row px-4">

              <div className={` rounded-lg bg-neutral-200 p-4 text-3xl`}>
                <h1>Market</h1>
                <p className="text-2xl">It's a Market.</p>
              </div>


            </div>
          
        </section>
    );

}

// As a developer taking on the work of a client, there are moments where you need to explain something, or show the process in how 
//                   you got to the final product, or simply a timeline. This can be very tedious, as sometimes your language may be too complicated for
//                   the client to understand.