import React from 'react'
import User from '../../images/user.png'
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>Movie Now</div>
      <div className='user-image'>
        <img src={User} alt='user'/>
      </div>
    </div>
  )
}

export default Header