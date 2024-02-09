import React from 'react'
import "../styles/Footer.css"
import { Email, Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Link to="https://www.instagram.com/"><Instagram/></Link>

            <Link to="https://twitter.com/home?utm_source=homescreen&utm_medium=shortcut"><Twitter/></Link>

            <Link to="https://web.facebook.com/?_rdc=1&_rdr"><Facebook/></Link>

            <Link to="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=GTvVlcSDXmZzpcmzQqWFBzlgMVGFjJQcMsrNnCtPnmTWHllXlmMWPBFRvQBjjzLFJdBLZhPGfpZlV"><Email/></Link>
        </div>
        <p>&copy; 2023 <Link to="https://portfolio-williamnyongesa.vercel.app/">Iam-William.com</Link></p>
    </div>
  )
}

export default Footer