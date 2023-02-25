import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { MdClose } from "react-icons/md";

import logo from '../assets/img/logo.png'
import { Nav } from './Nav'
import { Navmobile } from './Navmobile'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="mb-12  lg:mb-0 z-20 relative px-4 lg:px-0"
    data-aos='fade-down' data-aos-delay='1200' data-aos-duration='800'
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-[20px]">
          <div className="flex items-center gap-x-[120px]">
            <img src={logo} alt="" />
            <div className="hidden lg:flex ">
              <Nav />
            </div>
          </div>
          {isOpen ? (
            <div className="lg:hidden absolute top-20 bg-purple-400 min-w-[400px] right-20 md:mx-10 font-blod rounded transition-all max-h-54px overflow-hidden z-10">
              <Navmobile />
            </div>
          ) : (
            ""
          )}
          <button className="btn btn-quaternary flex item-center gap-x-[20px] justify-center group ">
            Request Demo
            <BsArrowRight className="text-2xl text-accent-primary group-hover:text-white transition" />
          </button>
          <div
            className="lg:hidden text-2xl text-primary cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <MdClose/> : <FaBars />}
          </div>
        </div>
      </div>
    </header>
  );
}
