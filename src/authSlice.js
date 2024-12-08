import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  userRole: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userRole = action.payload.role;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userRole = null;
    },
    setUserRole: (state, action) => {
      state.userRole = action.payload;
    },
  },
});

export const { login, logout, setUserRole } = authSlice.actions;
export default authSlice.reducer;
