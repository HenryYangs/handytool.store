export const stringCaseTransform = (raw, options) => {
  if (typeof raw !== 'string') {
    return '';
  }

  const { target = 'CamelCase', split = '_' } = options || {};
  let result = '';

  switch (target) {
    case 'CamelCase':
      result = raw
        .split(split)
        .map((word) => word.replace(/^\w/, (v) => v.toUpperCase()))
        .join('');
      break;
    default:
      break;
  }

  return result;
}