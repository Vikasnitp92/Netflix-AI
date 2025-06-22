import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import moviesReduser from "./movieslice"

const AppStore = configureStore(
  {
    reducer: {
      user:UserSlice,
      movies:moviesReduser,
    } // Add your reducer here
  }
);

export default AppStore;