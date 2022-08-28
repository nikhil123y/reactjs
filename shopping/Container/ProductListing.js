import React,{useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
// import axios from 'axios'
import '../Style.css'
import ProductComponent from './ProductComponent';
import  {fetchProducts}from '../redux/action/ProductActions'

const ProductListing = () => {
    const products=useSelector((state)=>state);

    const dispatch=useDispatch();

    // const fetchProducts=async()=>{
    //     const response=await axios.get(`https://fakestoreapi.com/products`)
    //     .catch((err)=>{
    //         console.log("Err",err)
    //     });
    //     dispatch(setProducts(response.data))
    //     console.log(response.data);
    // }
    // console.log("Products:",products)

    useEffect(()=>{
        dispatch(fetchProducts());
    },[])
  return (
    <div className='ui grid container' id='productlist'>
        <ProductComponent/>
    </div>
  )
}

export default ProductListing