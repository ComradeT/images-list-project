import { combineReducers } from 'redux';

import * as photosSlice from './photos';

export const rootReducer = combineReducers({
  photos: photosSlice.reducer,
});

export const actions = {
  photos: photosSlice.actions,
};

export const selectors = {
  photos: photosSlice.selectors,
};
