"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY])

  const handleBookNow = () => {
    window.location.href = "tel:+251911234567"
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  const NavLink = ({ to, children }) => (
    <Link 
      to={to} 
      className={`relative text-[#3a86ff] font-extralight transition-all duration-300 hover:text-[#2a76ff] group ${
        isActive(to) ? 'text-[#2a76ff]' : ''
      }`}
      style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.4)" }}
    >
      {children}
      <motion.div
        className={`absolute -bottom-1 left-0 h-0.5 bg-[#3a86ff] ${
          isActive(to) ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
        initial={{ width: 0 }}
        animate={{ width: isActive(to) ? '100%' : 0 }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  )

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#fdf0d5]/95 backdrop-blur-md shadow-xl border-b border-[#3a86ff]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="text-3xl font-extralight text-[#3a86ff] hover:text-[#2a76ff] transition-colors duration-300"
                  style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.5), 1px 1px 2px rgba(255,255,255,0.2)" }}>
              Saron Beauty
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <motion.button
              onClick={handleBookNow}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(58, 134, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#3a86ff] text-white px-6 py-3 rounded-xl font-extralight hover:bg-[#2a76ff] transition-all duration-300 shadow-lg"
              style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.3)" }}
            >
              Book Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-[#3a86ff] p-2 rounded-lg hover:bg-[#3a86ff]/10 transition-colors duration-300"
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
                      <div className="px-2 pt-2 pb-4 space-y-2 bg-[#fdf0d5]/95 backdrop-blur-md border-t border-[#3a86ff]/20">
            <Link 
              to="/" 
                              className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive('/') 
                    ? 'bg-[#3a86ff] text-white' 
                    : 'text-[#3a86ff] hover:bg-[#3a86ff]/10'
                }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
                              className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive('/about') 
                    ? 'bg-[#3a86ff] text-white' 
                    : 'text-[#3a86ff] hover:bg-[#3a86ff]/10'
                }`}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
                              className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive('/services') 
                    ? 'bg-[#3a86ff] text-white' 
                    : 'text-[#3a86ff] hover:bg-[#3a86ff]/10'
                }`}
            >
              Services
            </Link>
            <Link 
              to="/gallery" 
                              className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive('/gallery') 
                    ? 'bg-[#3a86ff] text-white' 
                    : 'text-[#3a86ff] hover:bg-[#3a86ff]/10'
                }`}
            >
              Gallery
            </Link>
            <Link 
              to="/contact" 
                              className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive('/contact') 
                    ? 'bg-[#3a86ff] text-white' 
                    : 'text-[#3a86ff] hover:bg-[#3a86ff]/10'
                }`}
            >
              Contact Us
            </Link>
            <motion.button
              onClick={handleBookNow}
              whileTap={{ scale: 0.95 }}
                             className="block w-full text-left bg-[#3a86ff] text-white px-4 py-3 rounded-lg hover:bg-[#2a76ff] transition-colors duration-300 font-extralight"
               style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.3)" }}
            >
              Book Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
