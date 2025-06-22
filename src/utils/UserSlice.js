import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice(
  {
    name: "user",
    initialState:null,
    reducers: {
      login: (state, action) => {
       
       return  action.payload;
      },
      logout: (state,action) => {
        return null;
      },
    },
  }
);

export const { login, logout } = UserSlice.actions;

export default UserSlice.reducer;