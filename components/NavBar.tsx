"use client"


import Link from "next/link";
import { usePathname } from "next/navigation"




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



function NavBar() {
    const pathname = usePathname();
  return (
   <nav className="flex gap-8">{
    links.map((link, index) => {
        return (
            <Link 
            key={index} 
            href={link.path}
            className={`${link.path === pathname && 'text-accent'} capitalize font-medium hover:text-accent ease-in duration-500`}
            >{link.name}</Link>
        )
  
    })
   }</nav>
  )
}

export default NavBar
