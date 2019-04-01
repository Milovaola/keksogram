import axios from 'axios';

import { sendMessage } from './util';
import { resetFiltersOnPhoto } from './changeEffectIntensity';

const getPosts = () =>
  axios
    .get('https://js.dump.academy/kekstagram/data')
    .then(({ data }) => data)
    .catch(() => sendMessage('#error'));

const sendPost = data =>
  axios
    .post('https://js.dump.academy/kekstagram', data)
    .then(() => {
      sendMessage('#success');
      resetFiltersOnPhoto();
    })
    .catch(() => {
      sendMessage('#error');
      resetFiltersOnPhoto();
    });

export const kekstagramService = {
  getPosts,
  sendPost
};
