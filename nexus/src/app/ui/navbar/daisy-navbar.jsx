// 'use client'
import Link from "next/link";
import { getServerSession } from "next-auth";
import { inter, roboto } from "@/app/ui/fonts"
// import NavLinks from "@/app/dashboard/ui/nav-links";
import LoggedIn from "@/app/ui/user-session/logged-in"



export default async function Navbar() {
    const session = await getServerSession();
    return (
        <div className={`${inter.className} z-20 navbar bg-base-100 flex  space-x-5 sticky top-0 drop-shadow-md`}>
            <div className="flex-0">
                <a className="btn bg-transparent hover:bg-transparent border-0 drop-shadow-none hover:border-0 text-xl font-bold" href="/">Nexus<span className="ml-6 text-4xl text-neutral-content font-extralight">/</span></a>
            </div>

            <div className="flex-1 space-x-5 text-neutral-500">
                <div className="">
                    <Link className="text-sm" href="/learn">Learn</Link>
                </div>
                <div className="">
                    <Link className="text-sm" href="/community">Communities</Link>
                </div>
                {/* <div className="">
                    <Link className="text-sm" href="/jobs">Marketplace</Link>
                </div> */}
                <div className="">
                    <Link className="text-sm" href="/jobs">Jobs</Link>
                </div>
                <div className="">
                    <Link className="text-sm" href="/mission">Our Mission</Link>
                </div>
            </div>

            {!session && <>
            <div className="ml-auto">
                <Link className="btn btn-ghost btn-md text-lg" href="/accounts/signup">Sign Up</Link>
            </div>
            <div className="flex-none ml-2 ">
                <Link className="btn btn-success btn-md text-lg" href="/accounts/login">Sign In</Link>
            </div></>
            }
            
            {!!session && <>
                <LoggedIn/>
            </>
            }
        </div>
    )
}
