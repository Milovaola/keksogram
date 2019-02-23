const ESC_KEYCODE = 27;

export const closeElement = (parentNode, childNode, element) => {
  const onEscRemoveElement = evt => {
    if (evt.keyCode === ESC_KEYCODE && childNode) {
      parentNode.removeChild(childNode);
      removeEvent();
    }
  };
  const onButtonClickRemoveElement = () => {
    if (childNode) {
      parentNode.removeChild(childNode);
      removeEvent();
    }
  };
  const removeEvent = () => {
    document.removeEventListener('keydown', onEscRemoveElement);
    element.removeEventListener('click', onButtonClickRemoveElement);
  };

  document.addEventListener('keydown', onEscRemoveElement);
  element.addEventListener('click', onButtonClickRemoveElement);
};
