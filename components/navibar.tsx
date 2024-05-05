"use client";
import { useEffect } from "react";
import { NAVI_LINKS } from "@/constants"
import Link from "next/link"

const NaviBar = () => {
  useEffect(() => {
    const keyHandler = (event:any) => {
      if(event.ctrlKey && event.key == " ") {
        event.preventDefault();
        if (window.location.pathname == '/things-to-read') {
          window.open("/","_self")
        } else {
          window.open("/things-to-read","_self")
        }
      }
    };

    window.addEventListener('keydown', keyHandler);

    return()=> {
      window.removeEventListener('keydown', keyHandler);
    }
  });

  return (
    <nav className="flex items-center justify-between flex-wrap bg-yellow-500">
      <ul className="hidden h-full gap-12 w-full flex-grow lg:flex lg:items-center lg:w-auto items-stretch">
        {NAVI_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-20 font-medium text-[#362312] flexCenter cursor-pointer transition-all hover:bg-yellow-400 p-6">
            {link.label}
          </Link>
        ))}
        <p className="regular-20 font-medium text-[#362312] flexCenter p-6">
          (Use Ctrl + Space to switch between tabs)
        </p>
      </ul>
    </nav>
  )
}

export default NaviBar