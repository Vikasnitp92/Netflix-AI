import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import moviesReduser from "./movieslice";
import GptSlice from "./GptSlice";
import ConfigSlice from "./ConfigSlice"


const AppStore = configureStore(
  {
    reducer: {
      user:UserSlice,
      movies:moviesReduser,
      gpt:GptSlice,
      config:ConfigSlice,

    } // Add your reducer here
  }
);

export default AppStore;