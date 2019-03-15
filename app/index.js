import { kekstagramService } from './load';
import { renderPictures } from './renderPictures';
import { popupUploadFoto } from './uploadFile';
import { getFilteredPhotos } from './filter';

kekstagramService
  .getPosts()
  .then(data => renderPictures(data))
  .then(getFilteredPhotos());

popupUploadFoto();
