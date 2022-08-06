import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import Gallery from './Gallery'
import Feedback from './Feedback'
import Navbar from './Navbar'
import ServiceDetails from './ServiceDetails'

function Routers() {
  return (
      <Router>
          
          <Navbar />

          <Routes >
              

              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
           
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/feedback" element={<Feedback />} />
            <Route path="/services/:id" element={<ServiceDetails />} />

              

          </Routes>
          
        </Router>
          
          


  )
}

export default Routers