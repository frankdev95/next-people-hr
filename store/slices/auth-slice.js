import { createSlice } from "@reduxjs/toolkit";

const dummyUser = {
  username: "frankdev95",
  firstName: "Frank",
  lastName: "Lockett",
  email: "frankdev95@protonmail.com",
};

const initialState = {
  isAuthenticated: true,
  user: null,
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
