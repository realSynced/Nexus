import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";

export default function Navbar2() {
  return (
    <div>
      <nav className="sticky bg-slate-400 ">
          <div>
            <Link href="/" className="text-white font-bold text-2xl p-4">Nexus</Link>
          </div>
      </nav>
    </div>
  );
}
