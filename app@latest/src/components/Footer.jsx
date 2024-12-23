import { IoShield } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 px-8">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold flex gap-2 items-center">
            <IoShield/>
            Brimbolo
            </div>
          <nav className="flex gap-8">
            <a href="/" className="hover:text-gray-700">Home</a>
            <a href="/services" className="hover:text-gray-700">Services</a>
            <a href="/about" className="hover:text-gray-700">About us</a>
            <a href="/contact" className="hover:text-gray-700">Contact</a>
          </nav>
          <div className="flex gap-4">
            <FaFacebook/>
            <FaInstagram/>
            <FaTwitter/>
          </div>
        </div>
        <div className="text-center text-gray-600 text-sm mt-4">
          © 2024 Berimbolo Security. All rights reserved. Privacy Policy Terms of Service
        </div>
      </footer>
  )
}

export default Footer