const ESC_KEYCODE = 27;

export const closeElement = (childNode, element) => {
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
