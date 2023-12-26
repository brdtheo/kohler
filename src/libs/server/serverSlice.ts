import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

import { Server, ServerRootState } from '@/types/server';

const initialState: ServerRootState = {
  serverBrowserIndex: 0,
  selectedServer: null,
};

export const serverSlice = createSlice({
  name: 'server',
  initialState,
  reducers: {
    setSelectedBrowserIndex: (state, { payload }: PayloadAction<number>) => {
      state.serverBrowserIndex = payload;
    },
    setSelectedServer: (state, { payload }: PayloadAction<Server | null>) => {
      state.selectedServer = payload;
    },
  },
});

export const { setSelectedBrowserIndex, setSelectedServer } =
  serverSlice.actions;

export default serverSlice.reducer;
