import { createSlice } from "@reduxjs/toolkit";


 const GptSlice = createSlice(
  {
    name:'gpt',
    initialState:{
     showGptSearch:false
    },
    reducers:{
      getGptSearchStatus:(state)=>{
        state.showGptSearch = !state.showGptSearch;
      }
    }

  }
 );

 export const {getGptSearchStatus} =GptSlice.actions
 export default GptSlice.reducer ;