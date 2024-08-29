import { isAlphabet, isUpperCase } from '../validate';

export const spaceCase = (value) => {
  return value.replace(/[^0-9|a-z|A-Z]/g, ' ').replace(/\s+/g, ' ').trim();
};

export const capitalizedCase = (value) => {
  return value.replace(/\s*(\S*)\s*/g, (v) => {
    const [_, first = '', rest = ''] = v.match(/^(\w)(.*)$/) || [];

    return `${first.toLocaleUpperCase()}${rest.toLocaleLowerCase()}`;
  });
};

export const alternatingCase = (value) => {
  const lowerCase = String.prototype.toLocaleLowerCase.call(value);

  return lowerCase.replace(/\s*(\S*)\s*/g, (v) => {
    let result = '';
    // flag
    let isLastChanged = false;

    for (let i = 0; i < v.length; i++) {
      const cur = v[i];

      if (!/^[a-zA-Z]$/.test(cur) || i === 0) {
        result += cur;
      } else {
        if (isLastChanged) {
          result += cur.toLocaleLowerCase();
          isLastChanged = false;
        } else {
          result += cur.toLocaleUpperCase();
          isLastChanged = true;
        }
      }
    }

    return result;
  });
};

export const headerCase = (value) => {
  return capitalizedCase(spaceCase(value));
};

export const inverseCase = (value) => {
  let result = '';

  for (let i = 0; i < value.length; i++) {
    const cur = value[i];

    if (isAlphabet(cur)) {
      result += (isUpperCase(cur) ? cur.toLocaleLowerCase() : cur.toLocaleUpperCase());
    } else {
      result += cur;
    }
  }

  return result;
};

export const camelCase = (value) => {
  const tmp = value.replace(/([^0-9a-zA-Z])(.{1})/g, (v, k, m) => {
    return m.toLocaleUpperCase();
  });
  return tmp.replace(/^([A-Z])/, v => v.toLocaleLowerCase());
};

export const constantCase = (value) => {
  return splitCaseEntry(value, '_', 'Upper');
};

export const dotCase = (value) => {
  return splitCaseEntry(value, '.');
};

export const hyphenCase = (value) => {
  return splitCaseEntry(value, '-');
};

export const pascalCase = (value) => {
  return spaceCase(value).split(' ').map(item => capitalizedCase(item)).join('');
};

export const pathCase = (value) => {
  return splitCaseEntry(value, '/');
};

export const snakeCase = (value) => {
  return splitCaseEntry(value, '_');
}

function splitCaseEntry(value, splitter, targetCase = 'Lower') {
  return spaceCase(value)[`toLocale${targetCase}Case`]().replaceAll(' ', splitter);
}

export const randomCase = () => {
  
}
