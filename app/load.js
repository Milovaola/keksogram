import axios from 'axios';
import { ESC_KEYCODE } from './util';

const sendMessage = node => {
  const messageTemplate = $(node).html();
  const messageElement = $(messageTemplate).clone();
  const mainBlock = $('main');
  messageElement.insertAfter($(mainBlock));

  const onEscRemoveNotify = evt => {
    if (evt.keyCode === ESC_KEYCODE && messageElement) {
      messageElement.remove();
      removeEvent();
    }
  };

  const onButtonClickRemoveNotify = () => {
    if (messageElement) {
      messageElement.remove();
      removeEvent();
    }
  };

  const removeEvent = () => {
    $(document).off('keydown', onEscRemoveNotify);
    $(document).off('click', onButtonClickRemoveNotify);
  };

  messageElement.removeClass('hidden');
  $(document).on('keydown', onEscRemoveNotify);
  $(document).on('click', onButtonClickRemoveNotify);
};

const getPosts = () =>
  axios
    .get('https://js.dump.academy/kekstagram/data')
    .then(({ data }) => data)
    .catch(() => sendMessage('#error'));

const sendPost = () =>
  axios
    .post('https://js.dump.academy/kekstagram')
    .then(data => data)
    .then(() => sendMessage('#success'))
    .catch(() => sendMessage('#error'));

export const kekstagramService = {
  getPosts
};
