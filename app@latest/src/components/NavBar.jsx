import React from 'react'
import { Link } from 'react-router-dom'
import { IoShield } from "react-icons/io5";
const NavBar = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-md bg-green-200">
     <div className="text-lg font-bold flex gap-2 items-center">
            <IoShield size={24}/>
            Brimbolo
            </div>
    <nav className="flex gap-8">
      <a href="/" className="hover:text-gray-700">Home</a>
      <a href="/services" className="hover:text-gray-700">Services</a>
      <a href="/about" className="hover:text-gray-700">About us</a>
      <a href="/contact" className="hover:text-gray-700">Contact</a>
    </nav>
    <button className="bg-gray-800 text-white px-4 py-2 rounded">Call now</button>
  </header>
  )
}

export default NavBar