import { IMG_URL_CDN } from "../utils/constant";


const MovieCard = ({posterPath}) =>{

  return (
    <div className="mx-2 w-36 rounded-md">
       <img alt="Movies "src={IMG_URL_CDN+posterPath}/>

      
    </div>
  )
};

export default MovieCard;