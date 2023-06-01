import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'api';
import { PhotoDto } from 'api/types';

import { DefaultRejectValue, ExtraParamsThunkType } from 'types';

export const getPhotosThunk = createAsyncThunk<
  PhotoDto[],
  undefined,
  ExtraParamsThunkType<DefaultRejectValue>
>('photos/getPhotos', async (_, { rejectWithValue }) => {
  try {
    const { data, status } = await api.getPhotos();

    if (status > 399) {
      throw data;
    }

    return data;
  } catch (error) {
    return rejectWithValue(error as DefaultRejectValue);
  }
});
