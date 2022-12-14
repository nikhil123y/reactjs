import React from 'react'
import { Link } from 'react-router-dom'
import ProductListing from './ProductListing'

const Header = () => {
  return (
    <div className='ui fixed menu'>
        <div className='ui container center'>
            <Link to='/'>
                <h1>ShoppingCart</h1>
            </Link>
        </div>
    </div>
  )
}

export default Header