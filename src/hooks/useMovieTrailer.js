import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import {addTrailerVideo} from "../utils/movieslice"


const useMovieTrailer= (movieId) =>{

  const dispatch = useDispatch();
  

  const getMoviesTrailer = async () =>{
     const trailerResp = await fetch('https://api.themoviedb.org/3/movie/'+
                          movieId+'/videos?language=en-US',
                          API_OPTIONS);
     const data = await trailerResp.json();
     const filterData = data.results.filter((video)=> video.type === "Trailer")
    const trailer = filterData[0];
    dispatch(addTrailerVideo(trailer));

  }

  useEffect(()=>{
    getMoviesTrailer();
    
  } ,[]);
}

export default useMovieTrailer;