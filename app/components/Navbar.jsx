"use client"

import { useState } from "react"

export default function Navbar() {

  const [menu,setMenu] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md text-white">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-xl font-bold">
          SMLS
        </h1>

        <ul className="hidden md:flex gap-8 text-sm">

          <li className="cursor-pointer hover:text-gray-300">
            Home
          </li>

          <li className="cursor-pointer hover:text-gray-300">
            What We Do
          </li>

          <li className="cursor-pointer hover:text-gray-300">
            Gallery
          </li>

          <li className="cursor-pointer hover:text-gray-300">
            Reach Us
          </li>

        </ul>

      </div>
    </nav>
  )
}