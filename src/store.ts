import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { channelApi } from '@libs/channel/api';
import channelSlice from '@libs/channel/channelSlice';
import { memberApi } from '@libs/member/api';
import { messageApi } from '@libs/message/api';
import { serverApi } from '@libs/server/api';
import serverSlice from '@libs/server/serverSlice';

export const store = configureStore({
  reducer: {
    [serverApi.reducerPath]: serverApi.reducer,
    server: serverSlice,
    [channelApi.reducerPath]: channelApi.reducer,
    channel: channelSlice,
    [memberApi.reducerPath]: memberApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(serverApi.middleware)
      .concat(channelApi.middleware)
      .concat(memberApi.middleware)
      .concat(messageApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
