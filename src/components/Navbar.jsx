import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-6 py-3">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-3xl font-bold text-primary flex items-center gap-3 p-6">
          <img src={logo} alt="CraftFolio Logo" className="w-18 h-18 object-contain" />
          CraftFolio
        </Link>
      </div>
    </div>
  )
}

export default Navbar