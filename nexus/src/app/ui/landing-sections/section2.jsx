
import { roboto, inter } from "@/app/ui/fonts";
import Image from "next/image"
import Community from "../../../../public/assets-image/icons8-user-groups.gif"
import FadeInWhenVisible from "@/app/ui/components/FadeIn"

import Link from "next/link"


export default function SecondarySection() {
    
  // const scrollRef = useRef(null)




    return ( 
        <section className={`${inter.className} flex flex-col h-svh`}>
          <div className="flex flex-col">
              <FadeInWhenVisible>
                <div className="flex justify-center pb-8 text-4xl">
                      <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-600 to-black">What is Nexus?</h1>
                </div>
              </FadeInWhenVisible>

            </div>

            <div className="grid grid-cols-3 justify-items gap-4 px-8">
              
              
              <FadeInWhenVisible>
                <div className={`rounded-lg p-4 drop-shadow-sm border border-gray`} >
                  <div className="flex justify-center pb-4">
                    <Image src={Community} width={'60'} height={'60'} alt="gif" unoptimized/>
                  </div>
                  <h1 className="text-xl font-semibold">Courses</h1>
                  <p className="text-lg text-neutral-400">
                    Homemade courses, catered to your needs. Providing endless opportunities for growth and 'aha' moments.
                  </p>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible>
                <div className={`rounded-lg p-4 drop-shadow-sm border border-gray`}>
                  <div className="flex justify-center pb-4">
                    <Image src={Community} width={'60'} height={'60'} alt="gif" unoptimized/>
                  </div>
                  <h1 className="text-xl font-semibold">Communities</h1>
                  <p className="text-lg text-neutral-400">
                    Various amount of groups for you to join. Want to create one yourself? Go ahead!
                    The possibilities are endless.
                  </p>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible>
                <div className={`rounded-lg p-4 drop-shadow-sm border border-gray`}>
                  <div className="flex justify-center pb-4">
                    <Image src={Community} width={'60'} height={'60'} alt="gif" unoptimized/>
                  </div>
                  <h1 className="text-xl font-semibold">Finding Gigs and Jobs</h1>
                  <p className="text-lg text-neutral-400">
                    The market has never been so demanding for your work! With our job finding algorithm, say goodbye to boredom and joblessness.
                  </p>
                </div>
              </FadeInWhenVisible>


            </div>
          
        </section>
    );

}

// As a developer taking on the work of a client, there are moments where you need to explain something, or show the process in how 
//                   you got to the final product, or simply a timeline. This can be very tedious, as sometimes your language may be too complicated for
//                   the client to understand.