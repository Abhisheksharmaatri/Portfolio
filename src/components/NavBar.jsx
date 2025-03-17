import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import '../App.css' // Importing the external CSS file

const NavBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className='navbar-section'>
      <h1 className='hero-logo'>PortFolio</h1>
      {/* <button className='hero-toggle' onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </button> */}
      <ul className='hero-links'>
        {['Home', 'About', 'Projects', 'Contact'].map(link => (
          <li key={link} className='hero-item'>
            <a href={`#${link.toLowerCase()}`} className='hero-navbar-link'>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
