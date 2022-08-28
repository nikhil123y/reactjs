import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:'flex',alignItem:'center',justifyContent:'space-between'}}>
        <span className='logo'>Redux Store</span>

        <div>
            <Link className='navLink' to='/'>Home</Link>

            <Link className='navLink' to='/cart'>Cart</Link>

            <span className='cartCount'>
                Cart item:0
            </span>

        </div>


    </div>
  )
}

export default Navbar