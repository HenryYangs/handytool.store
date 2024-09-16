import { stringCaseTransform } from '../../utils/string/transform';


const COLOR = {
  RED: '#E24841',
  YELLOW: '#E2C740',
  ORANGE: '#FF7919',
  WATHET: '#10D0D5',
  PURPLE: '#624BD8',
  BLUE: '#3D99F5',
  GREEN: '#79DC47',
};
const THEME = {
  RED: '#FBE6E5',
  YELLOW: '#FEF9E2',
  ORANGE: '#FFEDE0',
  WATHET: '#E3FCFD',
  PURPLE: '#E9E6F9',
  BLUE: '#E2F0FE',
  GREEN: '#ECFAE5',
};

const CATEGORY = {
  CONVERTOR: 'convertor',
  PROGRAMMING: 'programming',
  CODEC: 'codec',
  VALIDATOR: 'validator',
  TIMER: 'timer'
};

export const TOOL_CONVERTOR_ID = {
  NUMERAL_SYSTEM: 'numeral-system',
  TEXT_BINARY: 'text-binary',
  TEXT_DECIMAL: 'text-decimal',
  TEXT_HEX: 'text-hex',
  LENGTH_UNIT: 'length-unit',
  CASE: 'case',
}

export const CONVERTOR = [
  {
    id: TOOL_CONVERTOR_ID.NUMERAL_SYSTEM,
    text: 'Numeral System',
    category: CATEGORY.CONVERTOR,
    icon: 'convertor',
    color: COLOR.ORANGE,
    iconTheme: THEME.ORANGE,
    description: 'Convert Number Between Different Numeral System',
  },
  {
    id: TOOL_CONVERTOR_ID.TEXT_BINARY,
    text: 'Text-Binary',
    category: CATEGORY.CONVERTOR,
    icon: 'text',
    color: COLOR.YELLOW,
    iconTheme: THEME.YELLOW,
    description: 'Convert Text to Binary and vice-versa',
  },
  {
    id: TOOL_CONVERTOR_ID.TEXT_DECIMAL,
    text: 'Text-Decimal',
    category: CATEGORY.CONVERTOR,
    icon: 'text',
    color: COLOR.RED,
    iconTheme: THEME.RED,
    description: 'Convert Text to Decimal and vice-versa',
  },
  {
    id: TOOL_CONVERTOR_ID.TEXT_HEX,
    text: 'Text-Hex',
    category: CATEGORY.CONVERTOR,
    icon: 'text',
    color: COLOR.GREEN,
    iconTheme: THEME.GREEN,
    description: 'Convert Text to Hex and vice-versa',
  },
  // TODO
  // {
  //   id: 'domain-ip',
  //   text: 'Domain to IP',
  //   category: CATEGORY.CONVERTOR,
  //   icon: 'ip-domain',
  //   color: COLOR.WATHET,
  //   iconTheme: THEME.WATHET,
  //   isWIP: true,
  // },
  {
    id: TOOL_CONVERTOR_ID.LENGTH_UNIT,
    text: 'Length Unit Converter',
    category: CATEGORY.CONVERTOR,
    icon: 'length-unit',
    color: COLOR.ORANGE,
    iconTheme: THEME.ORANGE,
    description: 'Converting Units of Length and Distance',
  },
  {
    id: TOOL_CONVERTOR_ID.CASE,
    text: 'Case Convertor',
    category: CATEGORY.CONVERTOR,
    icon: 'case',
    color: COLOR.BLUE,
    iconTheme: THEME.BLUE,
    description: 'Convert text to naming conventions such as lower case, upper case, camel case, pascal case, etc.',
  },
];

export const TOOL_PROGRAMMING_ID = {
  CSS_COMPRESSION: 'css-compression',
  CSS_FORMAT: 'css-format',
  JSON_COMPRESSION: 'json-compression',
  JSON_FORMAT: 'json-format',
  SQL_COMPRESSION: 'sql-compression',
  SQL_FORMAT: 'sql-format',
}

export const PROGRAMMING = [
  {
    id: TOOL_PROGRAMMING_ID.CSS_COMPRESSION,
    text: 'CSS Compression',
    category: CATEGORY.PROGRAMMING,
    icon: 'css',
    color: COLOR.ORANGE,
    iconTheme: THEME.ORANGE,
    description: 'Minify CSS Source Code',
  },
  {
    id: TOOL_PROGRAMMING_ID.CSS_FORMAT,
    text: 'CSS Formatter',
    category: CATEGORY.PROGRAMMING,
    icon: 'css',
    color: COLOR.RED,
    iconTheme: THEME.RED,
    description: 'Format CSS Source Code',
  },
  {
    id: TOOL_PROGRAMMING_ID.JSON_COMPRESSION,
    text: 'JSON Compression',
    category: CATEGORY.PROGRAMMING,
    icon: 'json',
    color: COLOR.PURPLE,
    iconTheme: THEME.PURPLE,
    description: 'Minify JSON Structure',
  },
  {
    id: TOOL_PROGRAMMING_ID.JSON_FORMAT,
    text: 'JSON Formatter',
    category: CATEGORY.PROGRAMMING,
    icon: 'json',
    color: COLOR.GREEN,
    iconTheme: THEME.GREEN,
    description: 'Format JSON Structure',
  },
  {
    id: TOOL_PROGRAMMING_ID.SQL_COMPRESSION,
    text: 'SQL Compression',
    category: CATEGORY.PROGRAMMING,
    icon: 'sql',
    color: COLOR.WATHET,
    iconTheme: THEME.WATHET,
    description: 'Minify SQL Statement',
  },
  {
    id: TOOL_PROGRAMMING_ID.SQL_FORMAT,
    text: 'SQL Formatter',
    category: CATEGORY.PROGRAMMING,
    icon: 'sql',
    color: COLOR.YELLOW,
    iconTheme: THEME.YELLOW,
    description: 'Format SQL Statement',
  },
];

export const TOOL_CODEC_ID = {
  BASE64: 'base64',
  URL: 'url',
};

export const CODEC = [
  {
    id: TOOL_CODEC_ID.BASE64,
    text: 'Base64',
    category: CATEGORY.CODEC,
    icon: 'base64',
    color: COLOR.BLUE,
    iconTheme: THEME.BLUE,
    description: 'Encode and Decode of Base64',
  },
  {
    id: TOOL_CODEC_ID.URL,
    text: 'URL',
    category: CATEGORY.CODEC,
    icon: 'url',
    color: COLOR.ORANGE,
    iconTheme: THEME.ORANGE,
    description: 'Encode and Decode of URL'
  },
];

export const TOOL_VALIDATOR_ID = {
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
  //   icon: 'mysql',
  //   color: COLOR.WATHET,
  //   iconTheme: THEME.WATHET,
  //   isWIP: true,
  // },
  {
    id: TOOL_VALIDATOR_ID.REG_EXP,
    text: 'Regular Expression Validator',
    category: CATEGORY.VALIDATOR,
    icon: 'regular-expression',
    color: COLOR.YELLOW,
    iconTheme: THEME.YELLOW,
    description: 'Validate Your Regular Expression',
  },
  {
    id: TOOL_VALIDATOR_ID.EMAIL,
    text: 'Email Validator',
    category: CATEGORY.VALIDATOR,
    icon: 'email',
    color: COLOR.PURPLE,
    iconTheme: THEME.PURPLE,
    description: 'Validate Your Email Address',
  },
  {
    id: TOOL_VALIDATOR_ID.JSON,
    text: 'JSON Validator',
    category: CATEGORY.VALIDATOR,
    icon: 'json',
    color: COLOR.PURPLE,
    iconTheme: THEME.PURPLE,
    description: 'Validate Your JSON Structure',
  },
];

export const TOOL_TIMER_ID = {
  COUNTDOWN: 'countdown',
  COUNT_TIMER: 'count-timer',
  ONLINE_CLOCK: 'online-clock',
  WORLD_CLOCK: 'world-clock',
  TIMESTAMP: 'timestamp',
  CHRONOGRAPH: 'chronograph',
  ALARM: 'alarm',
}

export const TIMER = [
  {
    id: TOOL_TIMER_ID.COUNTDOWN,
    text: 'Countdown',
    category: CATEGORY.TIMER,
    icon: 'countdown',
    color: COLOR.RED,
    iconTheme: THEME.RED,
    description: 'Create your countdown timer',
  },
  {
    id: TOOL_TIMER_ID.COUNT_TIMER,
    text: 'Count Timer',
    category: CATEGORY.TIMER,
    icon: 'count-timer',
    color: COLOR.ORANGE,
    iconTheme: THEME.ORANGE,
    description: 'Create your count up timer online',
  },
  {
    id: TOOL_TIMER_ID.ONLINE_CLOCK,
    text: 'Online Clock',
    category: CATEGORY.TIMER,
    icon: 'clock',
    color: COLOR.GREEN,
    iconTheme: THEME.GREEN,
    description: 'Show the Current Time',
  },
  // TODO
  // {
  //   id: TOOL_TIMER_ID.WORLD_CLOCK,
  //   text: 'World Clock',
  //   category: CATEGORY.TIMER,
  //   icon: 'world-clock',
  //   color: COLOR.YELLOW,
  //   iconTheme: THEME.YELLOW,
  //   isWIP: true,
  // },
  {
    id: TOOL_TIMER_ID.TIMESTAMP,
    text: 'TimeStamp',
    category: CATEGORY.TIMER,
    icon: 'timestamp',
    color: COLOR.WATHET,
    iconTheme: THEME.WATHET,
    description: 'Convert dates to timestamps and vice-versa',
  },
  {
    id: TOOL_TIMER_ID.CHRONOGRAPH,
    text: 'Chronograph',
    category: CATEGORY.TIMER,
    icon: 'chronograph',
    color: COLOR.PURPLE,
    iconTheme: THEME.PURPLE,
    isWIP: true,
  },
  {
    id: TOOL_TIMER_ID.ALARM,
    text: 'Alarm Clock',
    category: CATEGORY.TIMER,
    icon: 'alarm',
    color: COLOR.BLUE,
    iconTheme: THEME.BLUE,
    description: 'Create your alarm clock',
  },
];

export const PURE_TOOLS = [
  {
    id: CATEGORY.CONVERTOR,
    text: stringCaseTransform(CATEGORY.CONVERTOR),
    list: CONVERTOR,
  },
  {
    id: CATEGORY.PROGRAMMING,
    text: stringCaseTransform(CATEGORY.PROGRAMMING),
    list: PROGRAMMING,
    isWIP: true,
  },
  {
    id: CATEGORY.CODEC,
    text: stringCaseTransform(CATEGORY.CODEC),
    list: CODEC,
    isWIP: true,
  },
  {
    id: CATEGORY.VALIDATOR,
    text: stringCaseTransform(CATEGORY.VALIDATOR),
    list: VALIDATOR,
    isWIP: true,
  },
  {
    id: CATEGORY.TIMER,
    text: stringCaseTransform(CATEGORY.TIMER),
    list: TIMER,
    isWIP: true,
  },
];

const getAllTab = () => {
  const maxCount = 16;
  const totalCateCount = PURE_TOOLS.length;
  const avgCount = Math.ceil(maxCount / totalCateCount);

  return {
    id: 'all',
    text: 'All Tools',
    list: [].concat(...PURE_TOOLS.map(tab => {
      return tab.list.slice(0, avgCount);
    })).slice(0, maxCount),
    isWIP: true
  }
}

export const FULL_TOOLS = [
  getAllTab(),
  ...PURE_TOOLS,
];
