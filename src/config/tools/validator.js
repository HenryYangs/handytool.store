import { CATEGORY, COLOR, THEME } from './base';

const TOOL_VALIDATOR_ID = {
  REG_EXP: 'reg-exp',
  EMAIL: 'email',
  JSON: 'json',
};

export const VALIDATOR = [
  // TODO
  // {
  //   id: 'mysql',
  //   text: 'MySQL Validator',
  //   category: CATEGORY.VALIDATOR,
  //   categoryId: CATEGORY.VALIDATOR,
  //   icon: 'mysql',
  //   color: COLOR.WATHET,
  //   iconTheme: THEME.WATHET,
  //   isWIP: true,
  // },
  {
    id: TOOL_VALIDATOR_ID.REG_EXP,
    text: 'Regular Expression Validator',
    category: CATEGORY.VALIDATOR,
    categoryId: CATEGORY.VALIDATOR,
    icon: 'regular-expression',
    color: COLOR.YELLOW,
    iconTheme: THEME.YELLOW,
    description: 'regExpDesc',
  },
  {
    id: TOOL_VALIDATOR_ID.EMAIL,
    text: 'Email Validator',
    category: CATEGORY.VALIDATOR,
    categoryId: CATEGORY.VALIDATOR,
    icon: 'email',
    color: COLOR.PURPLE,
    iconTheme: THEME.PURPLE,
    description: 'emailDesc',
  },
  {
    id: TOOL_VALIDATOR_ID.JSON,
    text: 'JSON Validator',
    category: CATEGORY.VALIDATOR,
    categoryId: CATEGORY.VALIDATOR,
    icon: 'json',
    color: COLOR.PURPLE,
    iconTheme: THEME.PURPLE,
    description: 'jsonDesc',
  },
];
