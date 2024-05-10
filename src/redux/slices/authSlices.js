import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const authSlices = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    token: Cookies.get("token") || null,
  },
  reducers: {
    setUser: (state, action) => {
      Cookies.set("token", action.payload);
      state.token = action.payload.token;
      state.isAuth = true;
    },
    logoutUser: (state) => {
      Cookies.remove("token");
      state.name = null;
      state.token = null;
      state.isAuth = false;
    },
  },
});

export const { setUser, logoutUser } = authSlices.actions;

export default authSlices.reducer;
