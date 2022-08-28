import React from 'react'
import Products from '../component/Products'

export const Home = () => {
  return (
    <div>
        <h2 className='heading'>Welcome to Redux tool store</h2>

        <section >
          <h3>Products</h3>
            <Products/>
        </section>
    </div>
  )
}
