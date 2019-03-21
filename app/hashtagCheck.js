const inputHashtag = $('.text__hashtags');

export const hashtagСheck = () => {
  const inputHashtagValue = inputHashtag.val();

  if (inputHashtagValue.length > 0) {
    let hashtag = inputHashtagValue.split(' ');
    Array.from(hashtag).forEach(hasgtagItem => {
      if (hasgtagItem.length === 1 && hasgtagItem === '#') {
        inputHashtag[0].setCustomValidity('хеш-тег не может состоять только из одной решётки');
      } else if (hasgtagItem.charAt(0) !== '#') {
        inputHashtag[0].setCustomValidity('хэш-тег начинается с символа # (решётка)');
      } else if (hashtag.length > 5) {
        inputHashtag[0].setCustomValidity('нельзя указать больше пяти хэш-тегов');
      } else if (hasgtagItem.length > 20) {
        inputHashtag[0].setCustomValidity('максимальная длина одного хэш-тега 20 символов, включая решётку');
      } else if (hasgtagItem.slice(1).includes('#')) {
        inputHashtag[0].setCustomValidity('хэш-теги разделяются пробелами');
      }
      hasDuplicates(inputHashtag[0], hashtag);
    });
  }
};

const hasDuplicates = (node, array) => {
  let valuesSoFar = [];
  Array.from(array).forEach(arrayItem => {
    let value = arrayItem;
    if (valuesSoFar.indexOf(value.toLowerCase()) !== -1) {
      return node.setCustomValidity('один и тот же хэш-тег не может быть использован дважды');
    }
    valuesSoFar.push(value.toLowerCase());
  });
};

inputHashtag.on('change', evt => {
  evt.target.setCustomValidity('');
});
