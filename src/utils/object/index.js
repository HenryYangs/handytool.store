export const parseJSON = (raw) => {
  let result;

  try {
    result = JSON.parse(raw);
  } catch {
    result = {};
  }

  return result;
};

export const queryStringify = (obj) => {
  const arr = [];

  Object.keys(obj).forEach((key) => {
    arr.push(`${key}=${obj[key]}`);
  });

  return arr.join('&');
};
