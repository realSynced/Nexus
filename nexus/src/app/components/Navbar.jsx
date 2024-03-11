import React from "react";
import Link from "next/link";
import { Icon } from '@iconify-icon/react';

export default function Nav() {
    return (
        <div className="laptop:pl-20 tablet:pl-20 laptop:pr-20 tablet:pr-20 pl-5 pr-5 pt-5 ">
            <div className="nav drop-shadow-xl">
                    <nav className=" flex justify-between items-center p-4 bg-gradient-to-r from-black to-d-red text-white rounded-lg">
                        <div>
                            <Link href="/" className="hidden laptop:contents tablet:contents">
                                Dakidd Fuego
                            </Link>
                            <Link href="/" className="laptop:hidden tablet:hidden">
                                Fuego
                            </Link>
                        </div>
                        <div>
                            <ul className="flex space-x-4">
                                <li>
                                    <Link href="/music" className=" inline-flex laptop:mr-12 tablet:mr-12 transition ease-in-ease-out duration-300 hover:scale-110 hover:cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25"></path></svg>
                                        Music
                                    </Link>
                                    <Link href="/about" className="inline-flex transition ease-in-ease-out duration-300 hover:scale-110">
                                    <svg width="1.2em" height="1.5em" viewBox=""><path fill="currentColor" d=""></path></svg>
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
            </div>
        </div>
    );
}