import React from 'react'
import Link from "next/link";
import Image from "next/image";
import SiteNav from "./site-nav";
import BackImg from "../app/assets/back.png"

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-7">
        <Link href="/">
            <Image src={BackImg} alt="logo" width="50" height="50" className='h-8.75 w-8.75'/>
        </Link>
        <SiteNav />
    </header>
  )
}
