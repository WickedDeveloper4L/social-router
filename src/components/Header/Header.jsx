import React from 'react'
import './header.scss'
import {IoLogoWhatsapp} from 'react-icons/io'
import {GrFacebook} from 'react-icons/gr'
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'
import {BsTelegram} from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='header'>
        <span className="title">SOCIAL ROUTER</span>
        <div className='nav-container'>
            <Link to='/' className="nav-item"><IoLogoWhatsapp className='whatsapp'/></Link>
            <Link to='/facebook' className="nav-item"><GrFacebook className='facebook'/></Link>
            <Link to='/instagram' className="nav-item"><AiFillInstagram className='instagram'/></Link>
            <Link to='/twitter' className="nav-item"><AiOutlineTwitter className='twitter'/></Link>
            <Link to='/telegram' className="nav-item"><BsTelegram className='telegram'/></Link>
        </div>
    </div>
  )
}

export default Header