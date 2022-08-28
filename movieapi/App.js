
import './App.css';
import MovieDetails from './MovieDetails';
import React,{useEffect,useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'




function App() {

  const[movies,setMovies]=useState([]);
  const[tollywoodMovies,setTollywoodMovies]=useState([]);
  const[hollywoodMovies,setHollywoodMovies]=useState([]);
  const[bollywoodMovies,setBollywoodMovies]=useState([]);

  useEffect(()=>{
    getMovieDetailsFromServer();

  },[]);

  const getMovieDetailsFromServer=async()=>{

    let rawMovieDetails=await fetch(`https://services.brninfotech.com/tws/MovieDetails.php?mediaType=movies`);
    let convertedMovieDetails=await rawMovieDetails.json();

    setMovies(convertedMovieDetails);

    setTollywoodMovies(categeroseMovies(convertedMovieDetails,"Tollywood"))

    setHollywoodMovies(categeroseMovies(convertedMovieDetails,"Hollywood"))

    setBollywoodMovies(categeroseMovies(convertedMovieDetails,"Bollywood"))

    console.log(convertedMovieDetails);
  
  }

  let categeroseMovies=(allMoviesArr,wood)=>{

    let woodMoviesArr=allMoviesArr.filter((movieObj)=>{
      if(movieObj.industry == wood){
        return true;
      }
    })

    return woodMoviesArr;
  }


    return (
    <div>
      {/* {
      movies.map((movieObj)=>{
        console.log(movieObj);

        
        return <MovieDetails details={movieObj}/>
      })
    } */}
    {
      hollywoodMovies.map((movieObj)=>{
        console.log(movieObj);

        
        return <MovieDetails details={movieObj}/>
      })
    }
    {
      tollywoodMovies.map((movieObj)=>{
        console.log(movieObj);

        
        return <MovieDetails details={movieObj}/>
      })
    }
    {
      bollywoodMovies.map((movieObj)=>{
        console.log(movieObj);

        
        return <MovieDetails details={movieObj}/>
      })
    }
      
    </div>
  );
}

export default App;
