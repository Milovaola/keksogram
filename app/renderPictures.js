const similarPictureTemplate = document.querySelector('#picture').content;
const otherPictures = document.querySelector('.pictures');

const renderPicture = picture => {
  let pictureElement = similarPictureTemplate.cloneNode(true);
  let mainPicture = pictureElement.querySelector('img');
  pictureElement.innerHTML = '';
  mainPicture.src = picture.url;
  pictureElement.querySelector('.likes - count').textContent = picture.likes;
  pictureElement.querySelector('.comments-count').textContent = picture.comments;
  pictureElement.appendChild(mainPicture);

  return pictureElement;
};

export const renderPictures = data => {
  let pictureList = document.createDocumentFragment();
  for (let i of data) {
    let pictureNode = renderPicture(data[i]);
    pictureList.appendChild(pictureNode);
  }
  otherPictures.appendChild(pictureList);
};
