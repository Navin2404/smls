"use client"

import { useState } from "react"

export default function Navbar() {

  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md text-white z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* <h1 className="text-xl font-bold">SMLS</h1> */}
        <a href="#home" className="hover:text-gray-300">SMLS</a>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-8 text-sm">

          <li><a href="#home" className="hover:text-gray-300">Home</a></li>

          <li><a href="#whatwedo" className="hover:text-gray-300">What We Do</a></li>

          <li><a href="#gallery" className="hover:text-gray-300">Gallery</a></li>

          <li><a href="#reachus" className="hover:text-gray-300">Reach Us</a></li>

        </ul>

        {/* Mobile Hamburger */}

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="md:hidden bg-black text-center pb-6">

          <a
            href="#home"
            className="block py-3 border-b border-gray-700"
            onClick={() => setOpen(false)}
          >
            Home
          </a>

          <a
            href="#whatwedo"
            className="block py-3 border-b border-gray-700"
            onClick={() => setOpen(false)}
          >
            What We Do
          </a>

          <a
            href="#gallery"
            className="block py-3 border-b border-gray-700"
            onClick={() => setOpen(false)}
          >
            Gallery
          </a>

          <a
            href="#reachus"
            className="block py-3"
            onClick={() => setOpen(false)}
          >
            Reach Us
          </a>

        </div>

      )}

    </nav>
  )
}