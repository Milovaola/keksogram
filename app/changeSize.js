const uploadImage = $('.img-upload__preview');

const scaleControlSmall = $('.scale__control--smaller');
const scaleControlBig = $('.scale__control--bigger');
let defaultValue = 100;

const scaleControlValue = $('.scale__control--value').val(`${defaultValue}%`);

const imageReduction = () => {
  if (defaultValue > 25) {
    defaultValue -= 25;
    scaleControlValue.val(`${defaultValue}%`);
    uploadImage.css('transform', `scale(0.${defaultValue})`);
  }
};

const imageZoom = () => {
  if (defaultValue < 100) {
    defaultValue += 25;
    scaleControlValue.val(`${defaultValue}%`);
    uploadImage.css('transform', `scale(${defaultValue / 100})`);
  }
};

const initChangeSize = () => {
  $(scaleControlSmall).on('click', imageReduction);
  $(scaleControlBig).on('click', imageZoom);
};

export { uploadImage, initChangeSize };
