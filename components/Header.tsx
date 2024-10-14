import Link from "next/link"
import NavBar from "./NavBar"
import { Button } from "./ui/button"
import MobileNav from "./MobileNav"
import Image from "next/image"


function Header() {
  return (
    <header className='py-8 xl:py-12 text-white'>
        <div className="container mx-auto flex justify-between items-center">
            <Link href='/'>

            <Image
            src='/assets/images/isaac_logo.png' 
            alt='Logo'
            width={28}
            height={28}
            className="w-4 h-fit"
            />

            </Link>
            <div className="hidden lg:flex items-center gap-8">

            <NavBar />
            </div>
            
            <div className="lg:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header
