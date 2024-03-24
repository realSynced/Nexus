
import { oxanium, roboto, inter } from "@/app/ui/fonts";
import Image from "next/image"
import Community from "../../../../public/assets-image/icons8-user-groups.gif"


import Link from "next/link"



export default function SecondarySection() {
    

    return ( 
        <section className={`${inter.className} flex flex-col h-svh`}>
          <div className="flex flex-col">
            
              <div className="flex justify-center pb-8 text-4xl">
                    <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-600 to-black">What is Nexus?</h1>
              </div>

            </div>

            <div className="grid grid-cols-3 justify-items gap-4 px-8">

              

              <div className={`rounded-lg p-4 drop-shadow-sm border border-gray`}>
                <div className="flex justify-center pb-4">
                  <Image src={Community} width={'60'} height={'60'} />
                </div>
                <h1 className="text-xl font-semibold">Communities</h1>
                <p className="text-lg text-neutral-400">Various amount of groups.</p>
              </div>

              <div className={`rounded-lg p-4 drop-shadow-sm border border-gray`}>
                <div className="flex justify-center pb-4">
                  <Image src={Community} width={'60'} height={'60'} />
                </div>
                <h1 className="text-xl font-semibold">Communities</h1>
                <p className="text-lg text-neutral-400">Various amount of groups.</p>
              </div>

              <div className={`rounded-lg p-4 drop-shadow-sm border border-gray`}>
                <div className="flex justify-center pb-4">
                  <Image src={Community} width={'60'} height={'60'} />
                </div>
                <h1 className="text-xl font-semibold">Communities</h1>
                <p className="text-lg text-neutral-400">Various amount of groups.</p>
              </div>


            </div>
          
        </section>
    );

}

// As a developer taking on the work of a client, there are moments where you need to explain something, or show the process in how 
//                   you got to the final product, or simply a timeline. This can be very tedious, as sometimes your language may be too complicated for
//                   the client to understand.