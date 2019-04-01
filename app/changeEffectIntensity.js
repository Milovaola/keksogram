import { uploadImage, scaleControlValue } from './changeSize';

const effectLine = $('.effect-level__line');
const effectLevelPin = $(effectLine).find('.effect-level__pin');
const lineDepthEffect = $('.effect-level__depth');
const effectLevelValue = $('input.effect-level__value');

// Передвижение ползунка на слайдере
const moveAt = evt => {
  const Limits = {
    left: effectLine.offset().left,
    right: effectLine.offset().left + effectLine.width()
  };
  const newLocation = {
    x: Limits.left
  };

  const pinOffsetX = effectLevelPin.width() / 2;

  if (evt.clientX + pinOffsetX > Limits.right) {
    newLocation.x = Limits.right - effectLine.offset().left;
  } else if (evt.clientX - pinOffsetX < Limits.left) {
    newLocation.x = Limits.left - effectLine.offset().left;
  } else {
    newLocation.x = evt.clientX - effectLine.offset().left - pinOffsetX;
  }
  handleChangeSaturationEffect(newLocation);
};

const onChangeValueEffect = newLocation => {
  const value = Math.round((newLocation.x * 100) / effectLine.width());
  effectLevelPin.css('left', `${value}%`);
  lineDepthEffect.css('width', `${value}%`);
  return value;
};

// Зависимость положения ползунка от уровня насыщенности эффекта
const handleChangeSaturationEffect = locationPin => {
  let effectValue = onChangeValueEffect(locationPin);
  effectLevelValue.attr('value', effectValue);

  if ($('.img-upload__preview').hasClass('effects__preview--chrome')) {
    $('.img-upload__preview').css('filter', `grayscale(${effectValue / 100})`);
  } else if ($('.img-upload__preview').hasClass('effects__preview--sepia')) {
    $('.img-upload__preview').css('filter', `sepia(${effectValue / 100})`);
  } else if ($('.img-upload__preview').hasClass('effects__preview--marvin')) {
    $('.img-upload__preview').css('filter', `invert(${effectValue}%)`);
  } else if ($('.img-upload__preview').hasClass('effects__preview--phobos')) {
    $('.img-upload__preview').css('filter', `blur(${(effectValue / 100) * 5}px)`);
  } else if ($('.img-upload__preview').hasClass('effects__preview--heat')) {
    $('.img-upload__preview').css('filter', `brightness(${(effectValue / 100) * 2 + 1} )`);
  }
};

const onMouseUp = () => {
  $(document).off('mousemove', moveAt);
  $(document).off('mouseup', onMouseUp);
};

//Сброс всех значений и эффектов
const resetFiltersOnPhoto = () => {
  scaleControlValue.val('100%');
  scaleControlValue.attr('value', '100%');
  lineDepthEffect.css('width', '100%');
  effectLevelPin.css('left', '100%');
  uploadImage.removeAttr('style').attr('class', 'img-upload__preview');
  $('.effect-level').addClass('hidden');
};

const initEffectIntensity = () => {
  $(effectLevelPin).on('mousedown', evt => {
    moveAt(evt);

    $(document).on('mousemove', moveAt);
    $(document).on('mouseup', onMouseUp);
  });
};

export { initEffectIntensity, resetFiltersOnPhoto };
