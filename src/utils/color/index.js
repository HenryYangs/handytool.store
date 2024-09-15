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