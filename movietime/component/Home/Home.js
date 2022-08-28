import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import {APIKey} from '../../common/apis/MovieApiKey'
import MovieApi from '../../common/apis/MovieApi'
const Home = () => {

  useEffect(()=>{

    const movieText="harry"
    const fetchMovies=async()=>{
      const response=await MovieApi.get(`
      ?apikey=${APIKey}&s=${movieText}&type=movie`).catch((err)=>{
        console.log("ERR",err)
        console.log("the response ",response);
      });
      console.log("the response ",response);
    };
    fetchMovies();
  },[]);
  return (
    <div className='banner-img'>
      <MovieListing/>
    </div>
  )
}

export default Home