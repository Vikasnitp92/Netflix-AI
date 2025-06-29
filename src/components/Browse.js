import Header from "./Header";
import MainContainer from "./MainContainer"
import useNowPlayingMovies  from '../hooks/useNowPlayingMovies'
import BodyContainer from "./BodyContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
const Browser = ()=>{
   const showGptflag = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (

      <div className="w-screen">
        <Header />
        { showGptflag ? <GptSearch/>:
          <>
          <MainContainer />
          <BodyContainer/>
          </>
        }
        
        </div>
  )

};

export default Browser;