import { closeElement } from './util';
import { initEffectIntensity } from './changeEffectIntensity';
import { initChangeSize } from './changeSize';
import { initEffectChange } from './addEffectOnImage';

const popupCreateFoto = $('.img-upload__overlay');
const closePopupUpladFoto = $('#upload-cancel');

export const popupUploadFoto = () => {
  $('#upload-file').on('change', () => {
    $(popupCreateFoto).removeClass('hidden');
  });
  $('.effect-level').addClass('hidden');
  initEffectIntensity();
  initChangeSize();
  initEffectChange();

  closeElement(popupCreateFoto, closePopupUpladFoto);
};
