import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {API_OPTIONS} from "../utils/constant";
import {addNowPlayingMovies} from "../utils/movieslice";

const useNowPlayingMovies =  ()=>{
  const dispatch = useDispatch();
  const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';


  const nowPlayingMovies = async ()=>{
  
 const res= await  fetch(url, API_OPTIONS);
 const jsonData = await res.json();
   dispatch(addNowPlayingMovies(jsonData.results));
  }

  useEffect(()=>{
    nowPlayingMovies();
  },[]);
}



export default useNowPlayingMovies;