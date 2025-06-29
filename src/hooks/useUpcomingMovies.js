import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {API_OPTIONS} from "../utils/constant";
import {getUpcomingMovies} from "../utils/movieslice";

const useUpcomingMovies =  ()=>{
  const dispatch = useDispatch();
  const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';


  const fetchUpcomingrMovies = async ()=>{
  
 const res= await  fetch(url, API_OPTIONS);
 const jsonData = await res.json();
 console.log(jsonData.results);
   dispatch(getUpcomingMovies(jsonData.results));
  }

  useEffect(()=>{
    fetchUpcomingrMovies();
  },[]);
}



export default useUpcomingMovies;