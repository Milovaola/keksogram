import { renderPictures } from './renderPictures';
import { kekstagramService } from './load';
import { debounce } from './util';

$('.img-filters').removeClass('img-filters--inactive');

const MAX_NEW_PHOTOS = 10;
const popularPhotos = $('#filter-popular');
const newPhotos = $('#filter-new');
const filterDiscussed = $('#filter-discussed');

const getRandomPhotos = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.slice(0, MAX_NEW_PHOTOS);
};

const handlerActiveButton = (targetButton, node) => {
  $('.img-filters__form button').removeClass('img-filters__button--active');
  if (targetButton) {
    node.addClass('img-filters__button--active');
  }
};

const getPopularPhotos = debounce(e => {
  e.preventDefault();
  handlerActiveButton(e.target, popularPhotos);
  const picturesContainer = $('.picture');

  picturesContainer.html('').remove();
  kekstagramService.getPosts().then(data => renderPictures(data));
});

const getNewPhotos = debounce(e => {
  e.preventDefault();
  handlerActiveButton(e.target, newPhotos);
  const picturesContainer = $('.picture');

  picturesContainer.html('').remove();
  kekstagramService.getPosts().then(data => renderPictures(getRandomPhotos(data)));
});

const getMoreDiscussed = debounce(e => {
  e.preventDefault();
  handlerActiveButton(e.target, filterDiscussed);

  kekstagramService.getPosts().then(arr => {
    const picturesContainer = $('.picture');
    const getSortPhotos = arr.sort((a, b) => {
      return b.comments.length - a.comments.length;
    });
    picturesContainer.html('').remove();
    renderPictures(getSortPhotos);
  });
});

export const getFilteredPhotos = () => {
  popularPhotos.on('click', getPopularPhotos);
  newPhotos.on('click', getNewPhotos);
  filterDiscussed.on('click', getMoreDiscussed);
};
