export const validateNumeralText = (text, numeral, options = { showAlert: true }) => {
  const result = isNaN(parseInt(text, numeral));

  if (result && options.showAlert) {
    alert('input is invalid');
  }

  return !result;
};

export const isBinary = (binary) => {
  const regExp = /^[01\s]*$/;

  return regExp.test(binary);
};

export const isDecimal = (decimal) => {
  const regExp = /^[0-9]*$/;

  return regExp.test(decimal);
}

export const isHex = (hex) => {
  const regExp = /^[0-9a-fA-F]*$/;

  return regExp.test(hex);
}

export const isAlphabet = (alphabet) => {
  const regExp = /^[a-zA-Z]$/;

  return regExp.test(alphabet);
};

export const isUpperCase = (alphabet) => {
  const regExp = /[A-Z]/;

  return regExp.test(alphabet);
};

export const isLowerCase = (alphabet) => {
  const regExp = /[a-z]/;

  return regExp.test(alphabet);
};
