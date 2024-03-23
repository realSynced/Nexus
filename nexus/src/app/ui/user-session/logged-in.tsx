'use client'
import { signOut } from "next-auth/react"
import React from "react"
import Link from "next/link"


export default function SignInOut() {
    const handleSignOut = () => {
        signOut();
    };
    return (
        <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-12 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                        <Link href="/profile" className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </Link>
                        </li>
                        <li><Link href="settings">Overview</Link></li>
                        <li><Link href="settings">Your Courses</Link></li>
                        <li><Link href="settings">Notifications</Link></li>
                        <li><Link href="settings">Settings</Link></li>
                        <li><Link href="" onClick={handleSignOut}>Logout</Link></li>
                    </ul>
                </div>
            </div>
    )
}
