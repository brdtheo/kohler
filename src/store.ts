import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authSlice from '@libs/auth/authSlice';
import { channelApi } from '@libs/channel/api';
import channelSlice from '@libs/channel/channelSlice';
import { memberApi } from '@libs/member/api';
import { messageApi } from '@libs/message/api';
import { serverApi } from '@libs/server/api';
import serverSlice from '@libs/server/serverSlice';

const authPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const reducers = combineReducers({
  auth: authSlice,
  [serverApi.reducerPath]: serverApi.reducer,
  server: serverSlice,
  [channelApi.reducerPath]: channelApi.reducer,
  channel: channelSlice,
  [memberApi.reducerPath]: memberApi.reducer,
  [messageApi.reducerPath]: messageApi.reducer,
});

const persistedReducer = persistReducer(authPersistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(serverApi.middleware)
      .concat(channelApi.middleware)
      .concat(memberApi.middleware)
      .concat(messageApi.middleware),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
