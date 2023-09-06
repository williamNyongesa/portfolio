import React from 'react'
import "../styles/Footer.css"
import { Email, Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Link to="https://www.instagram.com/"><Instagram/></Link>
            <Twitter/>
            <Facebook/>
            <Email/>
        </div>
        <p>&copy; 2023</p>
    </div>
  )
}

export default Footer