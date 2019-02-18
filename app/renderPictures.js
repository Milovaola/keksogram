const similarPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const otherPictures = document.querySelector('.pictures');

const renderPicture = picture => {
  let pictureElement = similarPictureTemplate.cloneNode(true);
  let mainPicture = pictureElement.querySelector('img');
  mainPicture.src = `src/${picture.url}`;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
  pictureElement.appendChild(mainPicture);

  return pictureElement;
};

export const renderPictures = data => {
  let pictureList = document.createDocumentFragment();
  for (let i in data) {
    let pictureNode = renderPicture(data[i]);
    pictureList.appendChild(pictureNode);
  }
  otherPictures.appendChild(pictureList);
};
