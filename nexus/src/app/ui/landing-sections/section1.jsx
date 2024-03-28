import Link from "next/link"
import { roboto, inter } from "@/app/ui/fonts";
import FadeInWhenVisible from "@/app/ui/components/FadeIn"
import styles from "@/app/ui/styles.module.css"
// import { Icon } from '@iconify-icon/react';
import { motion } from "framer-motion"
import "animate.css/animate.min.css";
import "react-daisyui"


 
// export const metadata: Metadata = {
//   title: 'Nexus | Home',
// };
// Icons: https://icons8.com/icons

export default function MainSection() {

 
  return (
        <section className={`${inter.className} ${styles.rbg} bg-gradient-to-b to-transparent from-gray-400 flex flex-col h-svh justify-center items-center text-center text-6xl`}>
            <FadeInWhenVisible>
              <div className="flex flex-col space-x-10">
                <div className="">
                    <div className="flex px-60  ">
                        <h1 className="font-bold drop-shadow-sm p-4 text-transparent bg-clip-text bg-gradient-to-b from-gray-600 to-black">A home for developers, market for recruiters</h1>
                      </div>
                    <div className="">
                      <p className="text-2xl ">Learn. Create. Explore.</p>
                    </div>
                </div>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <div className="mockup-browser border bg-base-300 ">
                <div className="mockup-browser-toolbar">
                  <div className="input">
                      https://nexus.com/get-started
                  </div>
                </div>
                <div className="flex justify-center px-4 py-16 bg-base-200 text-2xl"><Link href="/get-started">Get Started Today!</Link></div>
              </div>
            </FadeInWhenVisible>
          
        </section>
  );
}
