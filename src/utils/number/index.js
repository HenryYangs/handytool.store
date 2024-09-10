export const prezero = (num, options = {}) => {
  const { processZero } = options;

  if (num < 0 || num > 9) {
    return String(num);
  }

  if (num === 0) {
    if (processZero === false) {
      return String(num);
    }
  }

  return `0${num}`;
};
