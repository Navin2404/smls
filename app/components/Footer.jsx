import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function Footer() {

  return (

    <footer id="reachus" className="bg-gray-900 text-white py-16 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* Company Info */}

        <div>
          <h2 className="text-2xl font-bold mb-4">
            SMLS Laser Cutting
          </h2>

          <p className="text-gray-400">
            We provide high precision laser cutting solutions for
            industrial parts, fabrication works and custom metal designs.
          </p>
        </div>


        {/* Social Icons */}

          {/* Social Icons */}

        <div>
          <h3 className="text-xl text-center font-semibold mb-4">
            Follow Us
          </h3>

          <div className="flex justify-center space-x-8 text-2xl text-gray-400">

            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaInstagram />
            </a>

            <a 
              href="https://wa.me/919944736566"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaWhatsapp />
            </a>

          </div>
        </div>


        {/* Quick Links */}

        {/* <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">

            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">What We Do</li>
            <li className="hover:text-white cursor-pointer">Gallery</li>
            <li className="hover:text-white cursor-pointer">Contact</li>

          </ul>
        </div> */}


        {/* Contact Info */}

        <div>

          <h3 className="text-xl font-semibold mb-4">
            Contact Us
          </h3>

          <p className="text-gray-400 mb-2">
            📞 Phone: +91 99447 36566, +91 9566625272 
          </p>

          <p className="text-gray-400 mb-2">
            ✉ Email: smlslasercutting@gmail.com
          </p>

          <p className="text-gray-400">
            📍 Address:  
            Industrial Area,  
            kaverippatinam, Tamil Nadu, India
          </p>

        </div>

      </div>


      {/* Bottom Line */}

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">

        © 2026 SMLS Laser Cutting Enterprises. All Rights Reserved.

      </div>

    </footer>
  )
}