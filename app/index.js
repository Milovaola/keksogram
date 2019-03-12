import { kekstagramService } from './load';
import { renderPictures } from './renderPictures';
import { popupUploadFoto } from './uploadFile';

kekstagramService.getPosts().then(data => renderPictures(data));

popupUploadFoto();
