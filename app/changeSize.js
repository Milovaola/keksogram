const uploadImage = $('.img-upload__preview');

const scaleControlSmall = $('.scale__control--smaller');
const scaleControlBig = $('.scale__control--bigger');
const scaleControlValue = $('.scale__control--value');

// Изменение масштаба редактируемого изображения
const initChangeSize = () => {
  let defaultValue = 100;
  scaleControlValue.val(`${defaultValue}%`);

  $(scaleControlSmall).on('click', () => {
    if (defaultValue > 25) {
      defaultValue -= 25;
      scaleControlValue.val(`${defaultValue}%`);
      uploadImage.css('transform', `scale(0.${defaultValue})`);
    }
  });
  $(scaleControlBig).on('click', () => {
    if (defaultValue < 100) {
      defaultValue += 25;
      scaleControlValue.val(`${defaultValue}%`);
      uploadImage.css('transform', `scale(${defaultValue / 100})`);
    }
  });
};

export { scaleControlValue, uploadImage, initChangeSize };
