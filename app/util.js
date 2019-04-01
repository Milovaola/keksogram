const ESC_KEYCODE = 27;

// Функция закрытия ноды
const closeElement = (childNode, element) => {
  const onEscRemoveElement = evt => {
    if (evt.keyCode === ESC_KEYCODE && childNode) {
      childNode.remove();
      removeEvent();
    }
  };
  const onButtonClickRemoveElement = () => {
    if (childNode) {
      childNode.remove();
      removeEvent();
    }
  };
  const removeEvent = () => {
    $(document).off('keydown', onEscRemoveElement);
    $(element).off('click', onButtonClickRemoveElement);
  };
  $(document).on('keydown', onEscRemoveElement);
  $(element).on('click', onButtonClickRemoveElement);
};

// Устранение дребезга
const debounce = cb => {
  let DEBOUNCE_INTERVAL = 500;
  let lastTimeout = null;
  return function() {
    let parameters = arguments;
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(() => {
      cb.apply(null, parameters);
    }, DEBOUNCE_INTERVAL);
  };
};

// Формирование сообщения об успешном/неудачном ответе сервера
const sendMessage = node => {
  $('.img-upload__overlay').addClass('hidden');
  $('.img-upload__form')[0].reset();
  const messageTemplate = $(node).html();
  const messageElement = $(messageTemplate).clone();
  const mainBlock = $('main');
  messageElement.insertAfter($(mainBlock));

  const removeEvent = () => {
    $(document).off('keydown', onEscRemoveNotify);
    $(document).off('click', onButtonClickRemoveNotify);
  };

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

  messageElement.removeClass('hidden');
  $(document).on('keydown', onEscRemoveNotify);
  $(document).on('click', onButtonClickRemoveNotify);
};

export { ESC_KEYCODE, closeElement, debounce, sendMessage };
