import React, { useEffect, useState } from 'react'
import '../App.css'

const Products = () => {
    const [Products,setProducts]=useState([])

    useEffect(()=>{
        const fetchProducts=async()=>{
            const res =await fetch('https://fakestoreapi.com/products')

            const convertedData= await res.json()

            console.log(convertedData);

            setProducts(convertedData)
        }

        fetchProducts()
    },[])
  return (
    <div className='productsWrapper'>
        {
            Products.map((product)=>{
                return(
                <div className='card' key={product.id}>
                    <img src={product.image} alt='products'/>
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button className='btn'>Add to Cart</button>
                </div>
                );
            })
        }
    </div>
  )
}

export default Products