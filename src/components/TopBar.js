import React, { useState } from 'react'
import profile from "@/assets/profile.png"
import Image from 'next/image'
function TopBar() {
    const [isOpen, setIsOpen] = useState(false)
    const handleSwitch = () =>{
        setIsOpen(!isOpen)
    }
  return (
    <div className='flex justify-between '>
      <p className='text-[#5141A4] py-2'>Home</p>
      <div className=" inline-block">
      <button className="flex items-center focus:outline-none bg-white rounded-full px-5 py-2 border" onClick={handleSwitch}> 
        <Image className="w-8 h-8 rounded-full mr-2" src={profile} alt="Profile" />
        <span className="text-gray-800">John Doe</span>
        <svg
          className="w-4 h-4 ml-1 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {/* Dropdown content */}
      {
        isOpen?<div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
        <ul className="py-1">
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Option 1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Option 2
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Option 3
            </a>
          </li>
        </ul>
      </div>:null
      }
      
    </div>
    </div>
  )
}

export default TopBar
