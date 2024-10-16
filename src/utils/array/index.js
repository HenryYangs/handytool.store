import { prezero } from '../number';

export const getNumArray = (start, end, props = {}) => {
  const { prezero: _prezero = false } = props;

  return new Array(end - start + 1)
    .fill(0)
    .map((_, index) => (_prezero ? prezero(start + index) : start + index));
};
