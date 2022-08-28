import React from 'react'

const MovieListing = (props) => {
  const FavouriteComponent=props.favouriteComponent;
  return (
    <>
      {props.movies.map((movie,index)=>
        
      <div className='image-container d-flex row m-2  justify-content-start p-2'>
          <img src={movie.Poster} alt='movie'/>
          <div 
          onClick={()=>props.handleFavouritesClick(movie)}
          className='overlay d-flex row align-items-center justify-content-center'>
          <FavouriteComponent/>
          </div>
          
        
      </div>
      
      )}
    </>
  )
}

export default MovieListing