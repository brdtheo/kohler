import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

import { AuthRootState } from '@libs/auth/types';

const initialState: AuthRootState = {
  email: '',
  isEmailConfirmed: false,
  isAuthenticated: false,
  accessToken: '',
  refreshToken: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentAuth: (state, { payload }: PayloadAction<AuthRootState>) => {
      state.email = payload.email;
      state.isEmailConfirmed = payload.isEmailConfirmed;
      state.isAuthenticated = payload.isAuthenticated;
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
    },
  },
});

export const { setCurrentAuth } = authSlice.actions;

export default authSlice.reducer;
