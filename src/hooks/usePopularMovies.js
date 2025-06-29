import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {API_OPTIONS} from "../utils/constant";
import {getPopularMovies} from "../utils/movieslice";

const usePopularMovies =  ()=>{
  const dispatch = useDispatch();
  const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';


  const fetchPopularMovies = async ()=>{
  
 const res= await  fetch(url, API_OPTIONS);
 const jsonData = await res.json();
 console.log(jsonData.results);
   dispatch(getPopularMovies(jsonData.results));
  }

  useEffect(()=>{
    fetchPopularMovies();
  },[]);
}



export default usePopularMovies;