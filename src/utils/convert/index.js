export const textToBinary = (text) => {
  const binary = [];

  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    let binaryChar = charCode.toString(2).padStart(8, '0');

    binary.push(binaryChar);
  }

  return binary.join(' ');
};

export const binaryToText = (binary) => {
  let text = '';
  const _binary = binary.replaceAll(' ', '');

  for (let i = 0; i < _binary.length; i += 8) {
    const binaryChar = _binary.substr(i, 8);
    const charCode = parseInt(binaryChar, 2);

    text += String.fromCharCode(charCode);
  }

  return text;
};
