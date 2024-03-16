'use client'
import React, { useState } from 'react';
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react"
import Link from "next/link";
import {Avatar, Dropdown, DropdownTrigger} from "@nextui-org/react";


export default function Logout() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleAvatarClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const handleSignOut = () => {
        signOut();
    };


    return (
        <>
        <div className="px-4 py-4 ml-auto relative">
            <Avatar
                isBordered
                radius="full"
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                className="hover:cursor-pointer"
                onClick={handleAvatarClick}
            />
            
            {isDropdownOpen && (
                <div className="absolute -right-2 mt-2 bg-white border rounded-lg shadow-lg">
                    <div className='flex flex-col'>

                        <div className=''>
                            <button className="w-full py-2 px-4 rounded-lg text-gray-800 hover:bg-gray-200" >
                                <Link href="/profile"> Profile </Link>
                            </button>  
                        </div>
                        <div className=''>
                            <button className="w-full py-2 px-4 rounded-lg text-gray-800 hover:bg-gray-200">
                                <Link href="/dashboard"> Dashboard </Link>
                            </button>  
                        </div>
                        <div className=''>
                            <button className="w-full py-2 px-4 rounded-lg text-gray-800 hover:bg-gray-200" onClick={handleSignOut}>
                                Sign Out
                            </button>  
                        </div>

                    </div>
                </div>
            )}
    </div>
        </>
        
    )
}
