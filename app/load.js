import { renderPictures } from './renderPictures';

const onError = errorMessage => {
  let node = document.createElement('div');
  node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
  node.style.position = 'absolute';
  node.style.left = 0;
  node.style.right = 0;
  node.style.fontSize = '30px';

  node.textContent = errorMessage;
  document.body.insertAdjacentElement('afterbegin', node);
};

const axios = require('axios');

axios
  .get('https://js.dump.academy/kekstagram/data')
  .then(response => response.json())
  .then(data => renderPictures(data))
  .catch(onError);
