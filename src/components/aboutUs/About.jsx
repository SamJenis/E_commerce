import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='mmtop'>
           <div
        className='abtimg'
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(imagess/flash/blog-04.jpg)',
        }}
      >
        <div className='abttxt'>
       <p className='abtp'>WHERE TRENDS COMES TO LIFE</p>
       
       <Link to='about'><button>About Us</button></Link>
       </div>
      </div>
    </div>
  )
}

export default About