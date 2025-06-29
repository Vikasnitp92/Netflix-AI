import { createSlice } from "@reduxjs/toolkit";

const  ConfigSlice = createSlice(
  {
    name:'config',
    initialState:{
      usedLanguage:'en'
    },
    reducers:{
      getCurrentLanguage:(state,action)=>{
      state.usedLanguage= action.payload;
      }
    }

  }
);

export const {getCurrentLanguage} = ConfigSlice.actions;
export default ConfigSlice.reducer;