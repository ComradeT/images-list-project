import { ConfigureStoreOptions, configureStore } from '@reduxjs/toolkit';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { actions, rootReducer, selectors } from './ducks';

export { actions, selectors };

export const createStore = (options?: ConfigureStoreOptions['preloadedState']) =>
  configureStore({
    reducer: rootReducer,
    ...options,
  });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
