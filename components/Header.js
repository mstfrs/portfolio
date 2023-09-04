import Image from 'next/image'
import React from 'react'
import logo from "@/public/images/logo.svg"
import { BsMoonStarsFill } from 'react-icons/bs'

const Header = () => {
  return (
    <header className='flex flex-row justify-between mt-6 items-center'>
        <div className='basis-1/4'>
            <Image alt="logo" width={60} height={60} src={logo} />
        </div>
        <nav className='md:flex gap-10 hidden'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Qualification</li>
            <li>Contact</li>
            <li>
                <BsMoonStarsFill onClick={()=>setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white" />
              </li>
        </nav>
       
    </header>
  )
}

export default Header