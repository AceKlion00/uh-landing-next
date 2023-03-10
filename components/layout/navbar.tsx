import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '../ui-kit/icon';

export function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (<nav className="h-80 bg-secondary z-10 flex px-15 sticky text-white filter drop-shadow-lg">
    <div className="container px-0 mx-auto flex justify-between xl:justify-left">
      <Link href="/"><a className="flex items-center"><Image src="/assets/images/logo.svg" height={38} width={130} alt="UH logo" /></a></Link>
      <button className="xl:hidden px-10" onClick={() => setNavbarOpen(!navbarOpen)}><Icon name="menu" color="white" size={27} /></button>
      <div className={
        "fixed xl:relative duration-300 transition-all xl:transition-none h-screen xl:h-auto xl:flex flex-col xl:flex-row xl:flex-grow w-full md:w-365 bg-secondary xl:bg-opacity-0 top-0 ml-0 xl:ml-50 px-20 xl:px-0 justify-start xl:justify-between items-start xl:items-center drop-shadow-lg" +
        (navbarOpen ? " left-0 ease-out-in" : " -left-800 xl:left-0 ease-in-out")
      }>
        <div className="flex w-full xl:hidden justify-between py-30">
          <Link href="/"><a className="flex xl:hidden items-center"><Image src="/assets/images/logo.svg" height={44} width={152} alt="UH logo" /></a></Link>
          <button className="px-10" onClick={() => setNavbarOpen(false)}><Icon name="close" color="white" size={25} /></button>
        </div>
        <ul className="flex flex-col xl:flex-row font-medium text-16 xl:text-14 pl-30 xl:pl-0">
          <li className="py-15 nav-link"><Link href="/kits"><a className="relative xl:px-25 xl:py-10">Signature Kits</a></Link></li>
          <li className="py-15 nav-link"><Link href="/how-it-works"><a className="relative xl:px-25 xl:py-10">How It Works</a></Link></li>
          <li className="py-15 nav-link"><Link href="/our-story"><a className="relative xl:px-25 xl:py-10">Our Story</a></Link></li>
          <li className="py-15 nav-link"><Link href="/contact-us"><a className="relative xl:px-25 xl:py-10">Contact Us</a></Link></li>
        </ul>
        <Link href="/kits" passHref><button className="hidden xl:block px-5 btn-primary btn-mini">Get Started</button></Link>
      </div>
    </div>
  </nav>);
}
