import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import MovieListHeading from './component/MovieListHeading';
import MovieListing from './component/MovieListing';
import SearchBox from './component/SearchBox';
import AddFavourite from './component/AddFavourite';
import RemoveFavourites from './component/RemoveFavourites';


function App() {
  const [movies,setMovies]=useState([]);
  const [searchValue,setSearchValue]=useState('');
  const [favourites,setFavourites]=useState([]);


  const getMovieRequest=async()=>{
    const url=`https://www.omdbapi.com/?s=${searchValue}&apikey=93d12f5d`

    const response=await fetch(url);
    const responseJson =await response.json();

    if(responseJson.Search){
      setMovies(responseJson.Search);
    }
    
  };

  useEffect(()=>{
    getMovieRequest(searchValue);
  },[searchValue]);
  // useEffect(()=>{
  //   const movieFavourites=JSON.parse(
  //     localStorage.getItem('eact-movie-app-favourites'))
      
  //     setFavourites(movieFavourites)
  // },[]);

  // const saveToLocalStorage=(items)={
  //   localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
  // };

  const addFavouriteMovie=(movie)=>{
    const newFavouriteList=[...favourites,movie];
    setFavourites(newFavouriteList);
    // saveToLocalStorage(newFavouriteList);
  }
  const removeFavouriteMovie=(movie)=>{
    const newFavouriteList=favourites.filter(
      (favourite)=>favourite.imdbID!== movie.imdbID
    );

    setFavourites(newFavouriteList)
    
  }


  return (
    <div className='conatiner-fulid w-99 h-99 movie-app'>
      <div className='row d-flex align-item-center mt-4 mb-4'>
        <MovieListHeading heading='Movies Now' />
        <SearchBox setSearchValue={setSearchValue} style={{marginRight:'10'}}/>
      </div>
      <div className='row'>
        <MovieListing movies={movies} 
        handleFavouritesClick={addFavouriteMovie}
        favouriteComponent={AddFavourite}/>
      </div> 
      <div className='row d-flex align-item-center mt-4 mb-4'>
        <MovieListHeading heading='Favourites' /> 
      </div> 
      <div className='row'>
        <MovieListing movies={favourites} 
        handleFavouritesClick={removeFavouriteMovie}
        favouriteComponent={RemoveFavourites}/>
      </div>
    </div>
  );
}

export default App;
