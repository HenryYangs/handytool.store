export const parseJSON = (raw) => {
  let result;

  try {
    result = JSON.parse(raw);
  } catch {
    result = {};
  }

  return result;
};
