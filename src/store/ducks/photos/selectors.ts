import { RootState } from 'store';

export const selectors = {
  selectPhotos: (state: RootState) => state.photos.photos,
};
