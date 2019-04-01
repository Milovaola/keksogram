import { kekstagramService } from './load';
import { renderPictures } from './renderPictures';
import { popupUploadFoto } from './uploadFile';
import { getFilteredPhotos } from './filter';

kekstagramService
  .getPosts()
  .then(data => renderPictures(data))
  .then(getFilteredPhotos());

popupUploadFoto();

const adForm = document.querySelector('#upload-select-image');

adForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  let formData = new FormData(adForm);
  formData.append('file', document.querySelector('#upload-file').files[0]);
  kekstagramService.sendPost(formData);
});
