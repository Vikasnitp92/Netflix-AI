import MovieCard from "./MovieCard";

const MovieList = ({title ,movies })=>{
 
  return (
    <div className="px-6 bg-black">
      <h1 className="text-2xl py-2 font-bold text-white"> {title}</h1>
      <div className="flex overflow-x-auto  "> 
         
         <div className="flex "> 
          {movies?.map(movie =>(<MovieCard  key={movie.id} posterPath={movie.poster_path}/>))}
           
         </div>
      </div>
      
        
    
    </div>
  )
};

export default MovieList;