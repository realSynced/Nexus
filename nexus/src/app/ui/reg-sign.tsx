'use client'

import { signOut } from "next-auth/react"
import Link from "next/link";

export default function Logout() {
    return (
        <>
            <div className="px-4 py-4 ml-auto">
                <button className="bg-black p-2 rounded-xl"><Link href="/accounts/signup" className="font-semi-bold text-white">Sign Up</Link></button>
            </div>
            <div className="px-4 py-4 ">
                <button className="bg-black p-2 rounded-xl"><Link href="/accounts/login" className="font-semi-bold text-white">Sign In</Link></button>
            </div>
        </>
    )
}