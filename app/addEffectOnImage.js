import { uploadImage } from './changeSize';
import { effectLevelPin } from './changeEffectIntensity';
import { lineDepthEffect } from './changeEffectIntensity';

const EFFECTS = {
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

const handleChangeEffect = newEffect => {
  uploadImage.attr('class', 'img-upload__preview');
  $('.effect-level').addClass('hidden');

  switch (newEffect) {
    case EFFECTS.CHROME:
      uploadImage.addClass('effects__preview--chrome');
      $('.effect-level').removeClass('hidden');
      break;
    case EFFECTS.SEPIA:
      uploadImage.addClass('effects__preview--sepia');
      $('.effect-level').removeClass('hidden');
      break;
    case EFFECTS.MARVIN:
      uploadImage.addClass('effects__preview--marvin');
      $('.effect-level').removeClass('hidden');
      break;
    case EFFECTS.PHOBOS:
      uploadImage.addClass('effects__preview--phobos');
      $('.effect-level').removeClass('hidden');
      break;
    case EFFECTS.HEAT:
      uploadImage.addClass('effects__preview--heat');
      $('.effect-level').removeClass('hidden');
      break;
    default:
      break;
  }
};

const initEffectChange = () => {
  const effectsFields = $('.effects :input');

  effectsFields.on('click', e => {
    lineDepthEffect.css('width', '100%');
    effectLevelPin.css('left', '100%');
    handleChangeEffect(e.target.value);
    uploadImage.removeAttr('style');
  });
};

export { initEffectChange };
