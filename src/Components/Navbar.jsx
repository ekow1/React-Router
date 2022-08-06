import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
      <nav>
        
         <ul>
            <li><Link className="active" to="/">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="services">Services</Link></li>
            <li><Link to="gallery">Gallery</Link></li>
            <li><Link to="feedback">Feedback</Link></li>
         </ul>
      </nav>
  )
}

export default Navbar