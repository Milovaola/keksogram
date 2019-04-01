import { uploadImage } from './changeSize';
import { resetFiltersOnPhoto } from './changeEffectIntensity';

const EFFECTS = {
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};
// Переключение эффекта при редактировании изображения
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
    resetFiltersOnPhoto();
    handleChangeEffect(e.target.value);
  });
};

export { initEffectChange };
