import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'

export function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (<nav className="navbar relative flex items-center sticky bg-secondary text-white filter drop-shadow-lg py-5">
    <div className="container mx-auto flex justify-between xl:justify-left">
      <Link href="/"><a className="flex items-center"><Image src="/assets/images/logo.svg" height={38} width={130} alt="UH logo" /></a></Link>
      <button className="xl:hidden" onClick={() => setNavbarOpen(!navbarOpen)}><Image src="/assets/images/icons/menu.svg" width={27} height={25} alt="Menu" /></button>
      <div className={
        "fixed xl:relative duration-300 transition-all xl:transition-none h-screen xl:h-auto xl:flex flex-col xl:flex-row xl:flex-grow w-full md:w-96 bg-secondary top-0 xl:bg-transparent ml-0 xl:ml-8 px-5 xl:px-0 justify-start xl:justify-between items-start xl:items-center" +
        (navbarOpen ? " left-0 ease-out-in visible" : " -left-full xl:left-0 ease-in-out invisible xl:visible")
      }>
        <div className="flex w-full xl:hidden justify-between py-8">
          <Link href="/"><a className="flex xl:hidden items-center"><Image src="/assets/images/logo.svg" height={44} width={152} alt="UH logo" /></a></Link>
          <button onClick={() => setNavbarOpen(false)}><Image src="/assets/images/icons/close.svg" width={19} height={18} alt="Close" /></button>
        </div>
        <ul className="flex flex-col xl:flex-row font-medium text-lg xl:text-base pl-8 xl:pl-0">
          <li className="py-5 nav-link"><Link href="/kits"><a className="relative xl:px-7 xl:py-4">Hardscape Kits</a></Link></li>
          <li className="py-5 nav-link"><Link href="/how-it-works"><a className="relative xl:px-7 xl:py-4">How It Works</a></Link></li>
          <li className="py-5 nav-link"><Link href="/our-story"><a className="relative xl:px-7 xl:py-4">Our Story</a></Link></li>
          <li className="py-5 nav-link"><Link href="/contact-us"><a className="relative xl:px-7 xl:py-4">Contact Us</a></Link></li>
        </ul>
        <button className="hidden xl:block px-5 btn-primary btn-mini">Get Started</button>
      </div>
    </div>
  </nav>);
}
