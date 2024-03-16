'use client'

import { signOut } from "next-auth/react"
import Link from "next/link";

export default function Logout() {
    return (
        <div className="px-4 py-4 ml-auto">
              <button className="bg-black p-2 rounded-xl" onClick={() => { signOut() }}><Link href="" className="font-semi-bold text-white">Sign out</Link></button>
        </div>
    )
}