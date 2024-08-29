import { alternatingCase, camelCase, capitalizedCase, constantCase, dotCase, headerCase, hyphenCase, inverseCase, pascalCase, pathCase, snakeCase, spaceCase } from '../../../../../utils/string/operation';

export const CONVERTOR_CASE = [
  {
    text: 'lower case',
    callback: value => {
      return value.toLocaleLowerCase();
    },
  },
  {
    text: 'UPPER CASE',
    callback: value => {
      return value.toLocaleUpperCase();
    },
  },
  {
    text: 'Capitalized Case',
    callback: capitalizedCase,
  },
  {
    text: 'aLtErNaTiNg cAsE',
    callback: alternatingCase,
  },
  {
    text: 'Header Case',
    callback: headerCase,
  },
  {
    text: 'InVeRsE CaSe',
    callback: inverseCase,
  },
  {
    text: 'camelCase',
    callback: camelCase,
  },
  {
    text: 'Space Case',
    callback: spaceCase,
  },
  {
    text: 'CONSTANT_CASE',
    callback: constantCase,
  },
  {
    text: 'dot.case',
    callback: dotCase,
  },
  {
    text: 'hyphen-case',
    callback: hyphenCase,
  },
  {
    text: 'PascalCase',
    callback: pascalCase,
  },
  {
    text: 'path/case',
    callback: pathCase,
  },
  {
    text: 'snake_case',
    callback: snakeCase,
  }
];
