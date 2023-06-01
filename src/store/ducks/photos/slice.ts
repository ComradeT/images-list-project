import { createSlice } from '@reduxjs/toolkit';

import { getPhotosThunk } from './actions';
import { PhotoDto } from 'api/types';

interface PhotosSlice {
  photos: PhotoDto[] | null;
}

const initialState: PhotosSlice = {
  photos: null,
};

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPhotosThunk.pending, (state) => {
        state.photos = null;
      })
      .addCase(getPhotosThunk.fulfilled, (state, { payload }) => {
        state.photos = payload;
      });
  },
});

export const actions = {
  ...photosSlice.actions,
  getPhotos: getPhotosThunk,
};

export const { reducer } = photosSlice;
