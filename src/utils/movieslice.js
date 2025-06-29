import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
  name:'movies',
  initialState:{
    nowPlayingMovies :null,
    popularMoviesList:null,
    topRatedMovies:null,
    upcomingMovies:null,
    trailerVideo:null
  },
  reducers:{
    addNowPlayingMovies :(state,action)=>{
       state.nowPlayingMovies =action.payload;
    },
    addTrailerVideo:(state,action) =>{
      state.trailerVideo=action.payload;
    },
    getPopularMovies:(state,action)=>{
     state.popularMoviesList =action.payload;
    },
    getTopRatedMovies:(state,action)=>{
     state.topRatedMovies=action.payload;
    },
    getUpcomingMovies:(state,action)=>{
     state.upcomingMovies=action.payload;
    }

  }
});

export const {addNowPlayingMovies,addTrailerVideo,getPopularMovies,getTopRatedMovies,getUpcomingMovies} = movieSlice.actions
export default movieSlice.reducer;
