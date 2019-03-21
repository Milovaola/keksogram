const ESC_KEYCODE = 27;

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

export { ESC_KEYCODE, closeElement, debounce };
