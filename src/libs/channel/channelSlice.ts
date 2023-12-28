import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

import { Channel, ChannelRootState } from '@libs/channel/types';

const initialState: ChannelRootState = {
  selectedChannel: null,
};

export const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducers: {
    setSelectedChannel: (state, { payload }: PayloadAction<Channel | null>) => {
      state.selectedChannel = payload;
    },
  },
});

export const { setSelectedChannel } = channelSlice.actions;

export default channelSlice.reducer;
