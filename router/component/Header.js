import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <h1>Header react</h1>
        <ul className='nav'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/profile'>Profile</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header;