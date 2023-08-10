import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  user: {
    email: string;
    displayName: string | null;
    token: string;
  } | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = {
        email: action.payload.email,
        displayName: action.payload.displayName,
        token: action.payload.token,
      };
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectLogin = (state: { auth: AuthState }) => state.auth.user;

export default authSlice.reducer;
