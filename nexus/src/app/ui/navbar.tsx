import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import { oxanium } from "@/app/ui/fonts";

import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react"
import Logout from "@/app/ui/logout";
import RegSign from "@/app/ui/reg-sign";


export default async function Navbarr() {
  const session = await getServerSession();
  return (
    // <Navbar isBordered className="top-4 rounded-full bg-opacity-70 bg-white">
    //   <NavbarBrand>
    //     {/* <AcmeLogo /> */}
    //     <p className="font-bold text-inherit"><Link href="/">Nexus</Link></p>
    //   </NavbarBrand>

    //   <NavbarContent className="hidden sm:flex gap-4" justify="center">
    //     <NavbarItem>
    //       <Link color="foreground" href="#">
    //         Features
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem isActive>
    //       <Link href="#" aria-current="page" color="secondary">
    //         Customers
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem>
    //       <Link color="foreground" href="#">
    //         Integrations
    //       </Link>
    //     </NavbarItem>
    //   </NavbarContent>

    //   <NavbarContent as="div" justify="end">
    //     <Dropdown placement="bottom-end">
    //       <DropdownTrigger>
    //         <Avatar
    //           isBordered
    //           as="button"
    //           className="transition-transform"
    //           color="secondary"
    //           name="Jason Hughes"
    //           size="sm"
    //           src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
    //         />
    //       </DropdownTrigger>
    //       <DropdownMenu aria-label="Profile Actions" variant="flat">
    //         <DropdownItem className="h-14 gap-2">
    //           <p className="ifont-sembold">Signed in as</p>
    //           <p className="font-semibold">zoey@example.com</p>
    //         </DropdownItem>
    //         <DropdownItem key="settings">My Settings</DropdownItem>
    //         <DropdownItem key="team_settings">Team Settings</DropdownItem>
    //         <DropdownItem key="analytics">Analytics</DropdownItem>
    //         <DropdownItem key="system">System</DropdownItem>
    //         <DropdownItem key="configurations">Configurations</DropdownItem>
    //         <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
    //         <DropdownItem key="logout" color="danger">
    //           Log Out
    //         </DropdownItem>
    //       </DropdownMenu>
    //     </Dropdown>
    //   </NavbarContent>
    // </Navbar>
    <div className={`${oxanium.className} sticky top-4 z-50 px-12`}>
      <div className="">
        <nav className="rounded-full px-12 bg-white bg-opacity-70">
          <div className="flex  items-center ">
            <div className="px-4 py-4">
              <Link href="/" className="font-bold">Nexus</Link>
            </div>

            <div className="px-4 py-4 ml-auto">
              <Link href="/" className="font-bold">Nexus</Link>
            </div>
            
            <div className="px-4 py-4">
              <Link href="/" className="font-bold">Nexus</Link>
            </div>
            <div className="px-4 py-4">
              <Link href="/" className="font-bold">Nexus</Link>
            </div>
            <div className="px-4 py-4">
              <Link href="/" className="font-bold">Learn</Link>
            </div>
            
            {/* <nav> */}
            {!!session &&
              <Logout/>
            }
            {!session &&
              <RegSign/>
            }
          </div>
        </nav>
      </div>
    </div>


  );
}
