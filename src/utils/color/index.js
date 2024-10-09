import { numeralConvertor } from '../convert';

const transformTone = (hexNum = '') => {
  const decimal = 255 - Number(parseInt(String(hexNum), 16));

  return parseInt(String(decimal)).toString(16);
}

export const getOppositeColor = (raw) => {
  let result = '';

  if (raw.startsWith('#')) {
    const _color = raw.match(/^#(.{2})(.{2})(.{2})$/);

    if (!_color) {
      return result;
    }

    const [_, r, g, b] = _color;

    result = `#${transformTone(r)}${transformTone(g)}${transformTone(b)}`;
  } else {
    const rawWithoutSpace = raw.replace(/\s/g, '');
    const rgbRegExp = /^\(([0-9]{1,3}),([0-9]{1,3}),([0-9]{1,3})\)$/;
  
    if (rgbRegExp.test(rawWithoutSpace)) {
      const _color = rawWithoutSpace.match(rgbRegExp);
  
      if (!_color) {
        return result;
      }
  
      const [_, r, g, b] = _color;
  
      result = `(${255 - r}, ${255 - g}, ${255 - b})`;
    }
  }

  return result;
}

export const colorHexToRgb = (raw) => {
  const isCorrect = raw.match(/^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/);

  if (!isCorrect) {
    return '';
  }

  let red = '';
  let green = '';
  let blue = '';
  let hex = raw.replace('#', '');

  if (hex.length === 3) {
    const [r, g, b] = hex.split('');

    red = `${r}${r}` || '00';
    green = `${g}${g}` || '00';
    blue = `${b}${b}` || '00';
  } else if (hex.length === 6) {
    red = hex.slice(0, 2) || '00';
    green = hex.slice(2, 4) || '00';
    blue = hex.slice(4, 6) || '00';
  }

  if (!red && !green && !blue) {
    return '';
  }

  return `${numeralConvertor(red, 16, 10)},${numeralConvertor(green, 16, 10)},${numeralConvertor(blue, 16, 10)}`;
};

const isHexColorNumber = (raw) => {
  const color = Number(raw);

  return color >= 0 && color <= 255;
}

export const colorRgbToHex = (raw, withHashTag) => {
  let rgb = raw.replace(/\s/g, '');

  if (!rgb) {
    return '';
  }

  if (rgb.startsWith('rgb')) {
    rgb = rgb.match(/^rgb\((.*)\)$/)[1];
  }

  if (!rgb) {
    return '';
  }

  const matchResult = rgb.match(/^(\d{0,3})\,(\d{0,3})\,(\d{0,3})$/);

  if (!matchResult) {
    return '';
  }

  const [_, red, green, blue] = matchResult;

  if (!isHexColorNumber(red) || !isHexColorNumber(green) || !isHexColorNumber(blue)) {
    return '';
  }

  const hex = `${numeralConvertor(red, 10, 16).padStart(2, '0')}${numeralConvertor(green, 10, 16).padStart(2, '0')}${numeralConvertor(blue, 10, 16).padStart(2, '0')}`;

  return `${withHashTag ? '#' : ''}${hex}`;
};
