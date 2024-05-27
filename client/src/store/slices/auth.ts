/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuth, User } from "@/types/model";

interface AuthSliceState {
  isAuthenticated: boolean;
  isLoading: boolean;
  isAdmin: boolean;
  token?: string;
  user: User | null;
}

// const initialState: AuthSliceState = {
//   isAuthenticated: false,
//   isLoading: true,
//   isAdmin: false,
//   token: "",
//   user: null,
// };

const getUserFromLocalStorage = (): User | null => {
  const user = localStorage.getItem("user");
  if (user) {
    try {
      return JSON.parse(user);
    } catch (error) {
      console.error("Error parsing user from localStorage", error);
      localStorage.removeItem("user");
      return null;
    }
  }
  return null;
};

const initialState: AuthSliceState = {
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
  isLoading: false,
  isAdmin: localStorage.getItem("isAdmin") === "true",
  user: getUserFromLocalStorage(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onLoggedIn: (state, { payload }: PayloadAction<IAuth>) => {
      console.log("payload user", payload);
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(payload));
      localStorage.setItem("isAuthenticated", "true");
      state.user = payload;
      // state.token = payload.token; // If there's a token, set it
      state.isLoading = false;
      state.isAdmin = payload.role === "ADMIN"; // Determine if the user is an admin
    },
    onLoggedOut: (state) => {
      state.isAuthenticated = false;
      state.isLoading = false;
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("user");

      state.user = null;
    },
  },
});

export const { onLoggedIn, onLoggedOut } = authSlice.actions;

export default authSlice.reducer;
