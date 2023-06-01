import { http } from '../service/http';
import { PhotoDto } from './types';

export const api = {
  async getPhotos() {
    const response = await http.get<PhotoDto[]>('albums/1/photos');
    return response;
  },
};
