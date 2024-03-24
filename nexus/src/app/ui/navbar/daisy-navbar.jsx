// 'use client'
import Link from "next/link";
import { getServerSession } from "next-auth";
import NavLinks from "@/app/dashboard/ui/nav-links";
import LoggedIn from "@/app/ui/user-session/logged-in"



export default async function Navbar() {
    const session = await getServerSession();
    return (
        <div className="z-20 navbar bg-base-100 flex justify-between space-x-5 sticky top-0 drop-shadow-md">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl" href="/">Nexus</a>
            </div>

            <div className="flex-none">
                <div className="">
                    <Link className="btn btn-ghost btn-md text-lg" href="/community">Learn</Link>
                </div>
                <div className="">
                    <Link className="btn btn-ghost btn-md text-lg" href="/marketplace">Communities</Link>
                </div>
                <div className="">
                    <Link className="btn btn-ghost btn-md text-lg" href="/jobs">Marketplace</Link>
                </div>
                <div className="">
                    <Link className="btn btn-ghost btn-md text-lg" href="/jobs">Jobs</Link>
                </div>
                <div className="">
                    <Link className="btn btn-ghost btn-md text-lg" href="/mission">Our Mission</Link>
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
