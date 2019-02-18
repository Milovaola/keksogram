import { kekstagramService } from './load';
import { renderPictures } from './renderPictures';

kekstagramService.getPosts().then(data => renderPictures(data));
