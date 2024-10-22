
// const Header = () =>{
//   return(
//     <>
//       <div className="absolute bg-white">

//       </div>
//     </>
//   )

// }

// export default Header;

'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaYoutube, FaEnvelope, FaPhone, FaBars } from 'react-icons/fa';
import Image from 'next/image';
// import { images } from '../lib/images';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" absolute z-50 mx-4 max-sm:mt-6 sm:mx-24 top-5 left-0 right-0">
      {/* Top bar (hidden on small screens) */}
      <div className="hidden md:flex bg-transparent p-4 items-center justify-between">
        <div className="flex justify-between w-[30%] text-xl">
          <div className="flex items-center text-white">
            <FaEnvelope />
            <p className="ml-3 text-lg">exemple@gmail.com</p>
          </div>
          <div className="flex items-center text-white">
            <FaPhone />
            <p className="ml-3 text-lg">xxx xxx xxx</p>
          </div>
        </div>

        <div className="flex justify-between w-[15%] text-white text-xl">
          <FaFacebook />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>

      {/* Main navigation */}
      <div className="w-full bg-white shadow-md rounded-md p-2">
        <div className="container mx-auto md:px-6 md:py-1 flex items-center justify-between ">
          {/* Burger menu for mobile */}
          <button
            className="md:hidden text-black text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>

          {/* Desktop Menu */}
          <nav className="hidden  md:flex">
            <ul className="flex space-x-4 uppercase text-black font-semibold ">
              <li><Link href="/" className="text-[#cc1616] underline">Home</Link></li>
              <li><Link href="#about" className="hover:text-[#cc1616]">About</Link></li>
              <li><Link href="#features" className="hover:text-[#cc1616]">Features</Link></li>
            </ul>
          </nav>

          {/* Logo */}
          <Link href="/">
            <div className="max-sm:w-28 absolute max-sm:top-[-10px] top-0 transform md:translate-y-1/2 left-1/2 md:w-44 md:left-[37rem] bg-white py-6 px-3 shadow-xl rounded-md -translate-x-1/2">
              <Image src='/images/logoIpercash.png' alt="Logo" width={500} height={300} />
            </div>
          </Link>
          <button className='bg-[#cc1616] p-2 rounded-md text-white text-sm uppercase md:hidden'>download</button>


          {/* Download button */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-4 uppercase text-black font-semibold pr-6">
              <li><Link href="/screenshot" className="hover:text-gray-900">Screenshot</Link></li>
              <li><Link href="/contact" className="hover:text-gray-900">Contact</Link></li>
            </ul>
            <button className="bg-[#cc1616] py-2 px-6 rounded-md text-white uppercase font-semibold">
              Download
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu (visible on small screens when menuOpen is true) */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md rounded-md mt-2">
          <ul className="flex flex-col space-y-2 p-4 uppercase text-black font-semibold">
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="#about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link href="#features" onClick={() => setMenuOpen(false)}>Features</Link></li>
            <li><Link href="/screenshot" onClick={() => setMenuOpen(false)}>Screenshot</Link></li>
            <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
