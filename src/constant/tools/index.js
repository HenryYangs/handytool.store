import { stringCaseTransform } from '../../utils/string';


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
  CONVERTER: 'converter',
  PROGRAMMING: 'programming',
  CODEC: 'codec',
  VALIDATOR: 'validator',
  TIMER: 'timer'
};

export const CONVERTER = [
  {
    id: 'numeral-system',
    text: 'Numeral System',
    category: CATEGORY.CONVERTER,
    icon: '',
    color: COLOR.ORANGE,
    iconTheme: THEME.ORANGE
  },
  {
    id: 'text-binary',
    text: 'Text-Binary',
    category: CATEGORY.CONVERTER,
    icon: 'text',
    color: COLOR.YELLOW,
    iconTheme: THEME.YELLOW
  },
  {
    id: 'text-decimal',
    text: 'Text-Decimal',
    category: CATEGORY.CONVERTER,
    icon: 'text',
    color: COLOR.RED,
    iconTheme: THEME.RED
  },
  {
    id: 'text-hex',
    text: 'Text-Hex',
    category: CATEGORY.CONVERTER,
    icon: 'text',
    color: COLOR.GREEN,
    iconTheme: THEME.GREEN
  },
  {
    id: 'domain-ip',
    text: 'Domain to IP',
    category: CATEGORY.CONVERTER,
    icon: 'ip-domain',
    color: COLOR.WATHET,
    iconTheme: THEME.WATHET
  },
  {
    id: 'unit',
    text: 'Unit Converter',
    category: CATEGORY.CONVERTER,
    icon: 'unit',
    color: COLOR.ORANGE,
    iconTheme: THEME.ORANGE
  }
];

export const PROGRAMMING = [
  {
    id: 'js-compression',
    text: 'JavaScript Compression',
    category: CATEGORY.PROGRAMMING,
    icon: 'js',
    color: COLOR.RED,
    iconTheme: THEME.RED
  },
  {
    id: 'js-formatter',
    text: 'JavaScript Formatter',
    category: CATEGORY.PROGRAMMING,
    icon: 'js',
    color: COLOR.PURPLE,
    iconTheme: THEME.PURPLE
  },
  {
    id: 'css-compression',
    text: 'CSS Compression',
    category: CATEGORY.PROGRAMMING,
    icon: 'css',
    color: COLOR.ORANGE,
    iconTheme: THEME.ORANGE
  },
  {
    id: 'css-formatter',
    text: 'CSS Formatter',
    category: CATEGORY.PROGRAMMING,
    icon: 'css',
    color: COLOR.GREEN,
    iconTheme: THEME.GREEN
  }
];

export const CODEC = [
  {
    id: 'base64',
    text: 'Base64',
    category: CATEGORY.CODEC,
    icon: 'base64',
    color: COLOR.BLUE,
    iconTheme: THEME.BLUE,
  },
  {
    id: 'url',
    text: 'URL',
    category: CATEGORY.CODEC,
    icon:  'url',
    color: COLOR.ORANGE,
    iconTheme: THEME.ORANGE,
  }
]

export const VALIDATOR = [
  {
    id: 'mysql',
    text: 'MySQL Validator',
    category: CATEGORY.VALIDATOR,
    icon: 'mysql',
    color: COLOR.WATHET,
    iconTheme: THEME.WATHET
  },
  {
    id: 'reg-exp',
    text: 'Regular Expression Validator',
    category: CATEGORY.VALIDATOR,
    icon: 'regular-expression',
    color: COLOR.YELLOW,
    iconTheme: THEME.YELLOW
  },
  {
    id: 'email',
    text: 'Email Validator',
    category: CATEGORY.VALIDATOR,
    icon: 'email',
    color: COLOR.PURPLE,
    iconTheme: THEME.PURPLE
  },
  {
    id: 'phone-num',
    text: 'Phone Number Validator',
    category: CATEGORY.VALIDATOR,
    icon: 'phone-num',
    color: COLOR.BLUE,
    iconTheme: THEME.BLUE
  },
  {
    id: 'json',
    text: 'JSON Validator',
    category: CATEGORY.VALIDATOR,
    icon: 'json',
    color: COLOR.PURPLE,
    iconTheme: THEME.PURPLE
  }
];

export const TIMER = [
  {
    id: 'countdown',
    text: 'Countdown',
    category: CATEGORY.TIMER,
    icon: 'countdown',
    color: COLOR.RED,
    iconTheme: THEME.RED
  },
  {
    id: 'count-timer',
    text: 'Count Timer',
    category: CATEGORY.TIMER,
    icon: 'count-timer',
    color: COLOR.ORANGE,
    iconTheme: THEME.ORANGE
  },
  {
    id: 'online-clock',
    text: 'Online Clock',
    category: CATEGORY.TIMER,
    icon: 'clock',
    color: COLOR.GREEN,
    iconTheme: THEME.GREEN
  },
  {
    id: 'world-clock',
    text: 'World Clock',
    category: CATEGORY.TIMER,
    icon: 'world-clock',
    color: COLOR.YELLOW,
    iconTheme: THEME.YELLOW
  },
  {
    id: 'timestamp',
    text: 'TimeStamp',
    category: CATEGORY.TIMER,
    icon: 'timestamp',
    color: COLOR.WATHET,
    iconTheme: THEME.WATHET
  },
  {
    id: 'chronograph',
    text: 'Chronograph',
    category: CATEGORY.TIMER,
    icon: 'chronograph',
    color: COLOR.PURPLE,
    iconTheme: THEME.PURPLE
  }
]

const PURE_TOOLS = [
  {
    id: CATEGORY.CONVERTER,
    text: stringCaseTransform(CATEGORY.CONVERTER),
    list: CONVERTER,
  },
  {
    id: CATEGORY.PROGRAMMING,
    text: stringCaseTransform(CATEGORY.PROGRAMMING),
    list: PROGRAMMING,
  },
  {
    id: CATEGORY.CODEC,
    text: stringCaseTransform(CATEGORY.CODEC),
    list: CODEC,
  },
  {
    id: CATEGORY.VALIDATOR,
    text: stringCaseTransform(CATEGORY.VALIDATOR),
    list: VALIDATOR,
  },
  {
    id: CATEGORY.TIMER,
    text: stringCaseTransform(CATEGORY.TIMER),
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
    list: [].concat(...PURE_TOOLS.map(tab => {
      return tab.list.slice(0, avgCount);
    })).slice(0, maxCount)
  }
}

export const FULL_TOOLS = [
  getAllTab(),
  ...PURE_TOOLS,
];
