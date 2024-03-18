'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { oxanium } from "@/app/ui/fonts";
import { getServerSession } from "next-auth";
import Logout from "@/app/ui/logout";
import RegSign from "@/app/ui/reg-sign";
import styles from "@/app/ui/styles.module.css";

export default function Navbarr() {
  const [session, setSession] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const sessionData = await getServerSession();
      if(sessionData == null){
        setSession(false);
      }else {
        sessionData(true);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={`${oxanium.className} sticky top-4 z-50 px-12`}>
      <div className="">
        <nav className="rounded-full px-12 bg-white bg-opacity-70 border border-black">
          <div className="flex items-center">
            <div className="px-4 py-4">
              <Link href="/" className={`${styles.arrow} font-bold flex`}>
                Nexus
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-6 ml-0 duration-300 transition-transform ease-in-out"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>

            <div className="px-4 py-4 ml-auto">
              <Link href="/" className="font-bold">
                Nexus
              </Link>
            </div>

            <div className="px-4 py-4">
              <Link href="/" className="font-bold">
                Nexus
              </Link>
            </div>
            <div className="px-4 py-4">
              <Link href="/" className="font-bold">
                Nexus
              </Link>
            </div>
            <div className="px-4 py-4">
              <Link href="/" className="font-bold">
                Learn
              </Link>
            </div>

            {!session && <Logout />}
            {!!session && <RegSign />}
          </div>
        </nav>
      </div>
    </div>
  );
}
