import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const  BodyContainer = ()=>{
  const movies = useSelector((store)=> store.movies) ;
  return (
   movies.nowPlayingMovies &&(<div className="">
    
     
     <MovieList title={"Now Playing"} movies ={movies.nowPlayingMovies} />
     <MovieList title={"Popular"} movies ={movies.popularMoviesList} />
     <MovieList title={"Top Rated"} movies ={movies.topRatedMovies} />
     <MovieList title={"Upcoming"} movies ={movies.upcomingMovies} />
    </div>
   )
  )
}

export  default BodyContainer;