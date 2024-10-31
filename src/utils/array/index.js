import { prezero } from '../number';

export const getNumArray = (start, end, props = {}) => {
  const { prezero: _prezero = false } = props;

  return new Array(end - start + 1)
    .fill(0)
    .map((_, index) => (_prezero ? prezero(start + index) : start + index));
};

// Convert number array to array options, each element is { label: number, value: number }
export const transformNumArrayToArrayOptions = (arr) => {
  return arr.map((item) => ({
    label: item,
    value: item,
  }));
};
