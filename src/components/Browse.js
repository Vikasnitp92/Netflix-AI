import Header from "./Header";
import MainContainer from "./MainContainer"
import useNowPlayingMovies  from '../hooks/useNowPlayingMovies'
import BodyContainer from "./BodyContainer";
const Browser = ()=>{
  useNowPlayingMovies();
  return (

      <div>
        <Header />
        <MainContainer />
        <BodyContainer/>
        </div>
  )

};

export default Browser;