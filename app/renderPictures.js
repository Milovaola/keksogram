import { getBigPicture, mainContainer } from './showBigPicture';

const similarPictureTemplate = $('#picture').html();

const otherPictures = $('.pictures');

//Создание миниатюры фото
const createPictureElement = picture => {
  let pictureElement = $(similarPictureTemplate).clone();
  let mainPicture = $(pictureElement).find('img');
  $(mainPicture).attr({ src: `src/${picture.url}` });
  $(pictureElement)
    .find('.picture__likes')
    .text(picture.likes);
  $(pictureElement)
    .find('.picture__comments')
    .text(picture.comments.length);
  $(pictureElement).append(mainPicture);

  return pictureElement;
};

// Рендер пользовательских фото с сервера
export const renderPictures = data => {
  let pictureList = document.createDocumentFragment();

  for (let i in data) {
    let pictureNode = createPictureElement(data[i]);

    $(pictureList).append(pictureNode);

    $(pictureNode).on('click', () => {
      $(mainContainer).append(getBigPicture(data[i]));
    });
  }
  $(otherPictures).append(pictureList);
};
