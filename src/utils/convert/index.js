export const textToNumeral = (text, options = {}) => {
  const { numeral = 2, pad = false } = options || {};
  const numeralArr = [];

  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    const char = charCode.toString(numeral);
    const finalChar = pad ? char.padStart(8, '0') : char;

    numeralArr.push(finalChar);
  }

  return numeralArr.join(' ');
};

export const numeralToText = (digit, numeral = 2) => {
  let text = '';
  const _digit = digit.split(' ');

  for (let i = 0; i < _digit.length; i++) {
    const char = _digit[i];
    const charCode = parseInt(char, numeral);

    text += String.fromCharCode(charCode);
  }

  return text;
};

export const numeralConvertor = (value, from, to) => {
  return Number(parseInt(value, from)).toString(to);
}
