import { CATEGORY } from './base';
import { CODEC } from './codec';
import { CONVERTOR } from './convertor';
import { GENERATOR } from './generator';
import { PROGRAMMING } from './programming';
import { TIMER } from './timer';
import { VALIDATOR } from './validator';

export const PURE_TOOLS = [
  {
    id: CATEGORY.GENERATOR,
    text: CATEGORY.GENERATOR,
    list: GENERATOR,
  },
  {
    id: CATEGORY.CONVERTOR,
    text: CATEGORY.CONVERTOR,
    list: CONVERTOR,
  },
  {
    id: CATEGORY.PROGRAMMING,
    text: CATEGORY.PROGRAMMING,
    list: PROGRAMMING,
  },
  {
    id: CATEGORY.CODEC,
    text: CATEGORY.CODEC,
    list: CODEC,
  },
  {
    id: CATEGORY.VALIDATOR,
    text: CATEGORY.VALIDATOR,
    list: VALIDATOR,
  },
  {
    id: CATEGORY.TIMER,
    text: CATEGORY.TIMER,
    list: TIMER,
  },
];

const getAllTab = () => {
  const maxCount = 16;
  const totalCateCount = PURE_TOOLS.length;
  const avgCount = Math.ceil(maxCount / totalCateCount);

  return {
    id: 'all',
    text: 'All Tools',
    list: []
      .concat(
        ...PURE_TOOLS.map((tab) => {
          return tab.list.slice(0, avgCount);
        })
      )
      .slice(0, maxCount),
  };
};

export const FULL_TOOLS = [
  getAllTab(),
  ...PURE_TOOLS,
];

export const ALL_TOOLS = PURE_TOOLS.reduce((prev, next) => {
  return prev.concat(next.list);
}, []);
