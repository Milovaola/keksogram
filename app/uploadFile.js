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
  // hashtagСheck();
  closeElement(popupCreateFoto, closePopupUpladFoto);
};

// const hashtagСheck = hashtag => {
//   const inputHashtag = $('.text__hashtags');
//   if (inputHashtag.length > 0) {
//     const charMatch = new RegExp('/(?:^|s)(?:#)([a-zA-Zd]+)/i');
//     if (hashtag.length < 2) {
//       return inputHashtag.setCustomValidity('Поле не может содержать только хештег');
//     }
//     if (hashtag.length > 12) return false;
//     if (!charMatch.test(hashtag)) return false;
//     return true;
//   }
// };
