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

export const CONVERTOR = [
  {
    id: 'numeral-system',
    text: 'Numeral System',
    category: CATEGORY.CONVERTOR,
    icon: '',
    color: COLOR.ORANGE,
    iconTheme: THEME.ORANGE
  },
  {
    id: 'text-binary',
    text: 'Text-Binary',
    category: CATEGORY.CONVERTOR,
    icon: 'text',
    color: COLOR.YELLOW,
    iconTheme: THEME.YELLOW
  },
  {
    id: 'text-decimal',
    text: 'Text-Decimal',
    category: CATEGORY.CONVERTOR,
    icon: 'text',
    color: COLOR.RED,
    iconTheme: THEME.RED
  },
  {
    id: 'text-hex',
    text: 'Text-Hex',
    category: CATEGORY.CONVERTOR,
    icon: 'text',
    color: COLOR.GREEN,
    iconTheme: THEME.GREEN
  },
  {
    id: 'domain-ip',
    text: 'Domain to IP',
    category: CATEGORY.CONVERTOR,
    icon: 'ip-domain',
    color: COLOR.WATHET,
    iconTheme: THEME.WATHET,
    isWIP: true,
  },
  {
    id: 'unit',
    text: 'Unit Convertor',
    category: CATEGORY.CONVERTOR,
    icon: 'unit',
    color: COLOR.ORANGE,
    iconTheme: THEME.ORANGE,
    isWIP: true,
  },
  {
    id: 'case',
    text: 'Case Convertor',
    category: CATEGORY.CONVERTOR,
    icon: 'case',
    color: COLOR.BLUE,
    iconTheme: THEME.BLUE
  }
];

export const PROGRAMMING = [
  {
    id: 'js-compression',
    text: 'JavaScript Compression',
    category: CATEGORY.PROGRAMMING,
    icon: 'js',
    color: COLOR.RED,
    iconTheme: THEME.RED,
    isWIP: true,
  },
  {
    id: 'js-formatter',
    text: 'JavaScript Formatter',
    category: CATEGORY.PROGRAMMING,
    icon: 'js',
    color: COLOR.PURPLE,
    iconTheme: THEME.PURPLE,
    isWIP: true,
  },
  {
    id: 'css-compression',
    text: 'CSS Compression',
    category: CATEGORY.PROGRAMMING,
    icon: 'css',
    color: COLOR.ORANGE,
    iconTheme: THEME.ORANGE,
    isWIP: true,
  },
  {
    id: 'css-formatter',
    text: 'CSS Formatter',
    category: CATEGORY.PROGRAMMING,
    icon: 'css',
    color: COLOR.RED,
    iconTheme: THEME.RED,
    isWIP: true,
  },
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
    iconTheme: THEME.WATHET,
    isWIP: true,
  },
  {
    id: 'reg-exp',
    text: 'Regular Expression Validator',
    category: CATEGORY.VALIDATOR,
    icon: 'regular-expression',
    color: COLOR.YELLOW,
    iconTheme: THEME.YELLOW,
    isWIP: true,
  },
  {
    id: 'email',
    text: 'Email Validator',
    category: CATEGORY.VALIDATOR,
    icon: 'email',
    color: COLOR.PURPLE,
    iconTheme: THEME.PURPLE,
    isWIP: true,
  },
  {
    id: 'phone-num',
    text: 'Phone Number Validator',
    category: CATEGORY.VALIDATOR,
    icon: 'phone-num',
    color: COLOR.BLUE,
    iconTheme: THEME.BLUE,
    isWIP: true,
  },
  {
    id: 'json',
    text: 'JSON Validator',
    category: CATEGORY.VALIDATOR,
    icon: 'json',
    color: COLOR.PURPLE,
    iconTheme: THEME.PURPLE,
    isWIP: true,
  }
];

export const TIMER = [
  {
    id: 'countdown',
    text: 'Countdown',
    category: CATEGORY.TIMER,
    icon: 'countdown',
    color: COLOR.RED,
    iconTheme: THEME.RED,
    isWIP: true,
  },
  {
    id: 'count-timer',
    text: 'Count Timer',
    category: CATEGORY.TIMER,
    icon: 'count-timer',
    color: COLOR.ORANGE,
    iconTheme: THEME.ORANGE,
    isWIP: true,
  },
  {
    id: 'online-clock',
    text: 'Online Clock',
    category: CATEGORY.TIMER,
    icon: 'clock',
    color: COLOR.GREEN,
    iconTheme: THEME.GREEN,
    isWIP: true,
  },
  {
    id: 'world-clock',
    text: 'World Clock',
    category: CATEGORY.TIMER,
    icon: 'world-clock',
    color: COLOR.YELLOW,
    iconTheme: THEME.YELLOW,
    isWIP: true,
  },
  {
    id: 'timestamp',
    text: 'TimeStamp',
    category: CATEGORY.TIMER,
    icon: 'timestamp',
    color: COLOR.WATHET,
    iconTheme: THEME.WATHET,
    isWIP: true,
  },
  {
    id: 'chronograph',
    text: 'Chronograph',
    category: CATEGORY.TIMER,
    icon: 'chronograph',
    color: COLOR.PURPLE,
    iconTheme: THEME.PURPLE,
    isWIP: true,
  }
]

export const PURE_TOOLS = [
  {
    id: CATEGORY.CONVERTOR,
    text: stringCaseTransform(CATEGORY.CONVERTOR),
    list: CONVERTOR,
    isWIP: true,
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
