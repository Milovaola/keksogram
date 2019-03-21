import { initEffectIntensity, resetFiltersOnPhoto } from './changeEffectIntensity';
import { initChangeSize } from './changeSize';
import { initEffectChange } from './addEffectOnImage';
import { ESC_KEYCODE } from './util';
import { hashtagСheck } from './hashtagCheck';

const popupCreateFoto = $('.img-upload__overlay');
const closePopupUpladFoto = $('#upload-cancel');
// const submitForm = $('#upload-submit');

export const popupUploadFoto = () => {
  $('#upload-file').on('change', () => {
    $(popupCreateFoto).removeClass('hidden');
    $('.effect-level').addClass('hidden');
    initEffectIntensity();
    initChangeSize();
    initEffectChange();
    $('#upload-submit').on('click', () => {
      hashtagСheck();
    });
  });

  hidePopup();
};

const hidePopup = () => {
  const onEscRemoveElement = evt => {
    const textNodes = $('.img-upload__text').children();

    const focused = $(textNodes).is(':focus');

    if (evt.keyCode === ESC_KEYCODE && popupCreateFoto && !focused) {
      resetFiltersOnPhoto();
      popupCreateFoto.addClass('hidden');
    }
  };
  const onButtonClickRemoveElement = () => {
    if (popupCreateFoto) {
      resetFiltersOnPhoto();
      popupCreateFoto.addClass('hidden');
    }
  };

  $(document).on('keydown', onEscRemoveElement);
  $(closePopupUpladFoto).on('click', onButtonClickRemoveElement);
};
