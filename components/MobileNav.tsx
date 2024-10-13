'use client'

import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from 'react-icons/ci'
import Link from "next/link";
import { useState } from "react";



const links = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'services',
        path: '/services',
    },
    {
        name: 'resume',
        path: '/resume',
    },
    {
        name: 'work',
        path: '/work',
    },
    {
        name: 'contact',
        path: '/contact',
    },
    
]

function MobileNav() {

     const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const handleLinkClick = () => {
        setIsOpen(false);
      };
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="flex justify-center items-center" asChild>
        <button
          className="flex justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <CiMenuFries className="text-[32px] text-accent" />
        </button>
        </SheetTrigger>
        <SheetContent side='left' className='flex flex-col'>
            <div className='mt-24 mb-28 text-center text-2xl'> Isaac </div>

            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index) => {
                    return (
                        <Link 
                        href={link.path}
                        key={index}
                        className={`${link.path === pathname && 'text-accent'} text-xl capitalize hover:text-accent ease-in duration-500`}
                        onClick={handleLinkClick}
                        >
                        {link.name}
                        </Link>
                    )
                })}
            </nav>

        </SheetContent>
    </Sheet>
  )
}

export default MobileNav
