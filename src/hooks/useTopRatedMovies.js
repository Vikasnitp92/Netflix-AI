import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {API_OPTIONS} from "../utils/constant";
import {getTopRatedMovies} from "../utils/movieslice";

const useTopRatedMovies =  ()=>{
  const dispatch = useDispatch();
  const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';


  const fetchTopRatedMovies = async ()=>{
  
 const res= await  fetch(url, API_OPTIONS);
 const jsonData = await res.json();
 console.log(jsonData.results);
   dispatch(getTopRatedMovies(jsonData.results));
  }

  useEffect(()=>{
    fetchTopRatedMovies();
  },[]);
}



export default useTopRatedMovies;