// 'use client'
import Link from "next/link";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react"
import LoggedIn from "@/app/ui/user-session/logged-in"



export default async function Navbar() {
    const session = await getServerSession();
    return (
    // <Theme dataTheme='corporate'>
        <div className="z-20 navbar bg-base-100 flex space-x-5 sticky top-0 drop-shadow-md">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl" href="/">Nexus</a>
            </div>
            {!session && <>
            <div className="flex-none">
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
    // </Theme>
    )
}