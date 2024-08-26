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

export const CONVERTER = [
  {
    id: 'hex-decimal',
    text: 'Hex-Decimal',
    category: 'converter',
    icon: '',
    color: COLOR.ORANGE,
    iconTheme: THEME.ORANGE
  },
  {
    id: 'binary-decimal',
    text: 'Binary-Decimal',
    category: 'converter',
    icon: '',
    color: COLOR.BLUE,
    iconTheme: THEME.BLUE
  },
  {
    id: 'binary-hex',
    text: 'Binary-Hex',
    category: 'converter',
    icon: '',
    color: COLOR.GREEN,
    iconTheme: THEME.GREEN
  },
  {
    id: 'text-binary',
    text: 'Text-Binary',
    category: 'converter',
    icon: 'text',
    color: COLOR.YELLOW,
    iconTheme: THEME.YELLOW
  },
  {
    id: 'text-decimal',
    text: 'Text-Decimal',
    category: 'converter',
    icon: 'text',
    color: COLOR.RED,
    iconTheme: THEME.RED
  },
  {
    id: 'text-hex',
    text: 'Text-Hex',
    category: 'converter',
    icon: 'text',
    color: COLOR.GREEN,
    iconTheme: THEME.GREEN
  },
  {
    id: 'domain-ip',
    text: 'Domain to IP',
    category: 'converter',
    icon: 'ip-domain',
    color: COLOR.WATHET,
    iconTheme: THEME.WATHET
  },
  {
    id: 'unit',
    text: 'Unit Converter',
    category: 'converter',
    icon: 'unit',
    color: COLOR.ORANGE,
    iconTheme: THEME.ORANGE
  }
];

export const PROGRAMMING = [
  {
    id: 'js-minifier',
    text: 'JavaScript Minifier',
    category: 'programming',
    icon: 'js',
    color: COLOR.RED,
    iconTheme: THEME.RED
  },
  {
    id: 'js-formatter',
    text: 'JavaScript Formatter',
    category: 'programming',
    icon: 'js',
    color: COLOR.PURPLE,
    iconTheme: THEME.PURPLE
  },
  {
    id: 'css-minifier',
    text: 'CSS Minifier',
    category: 'programming',
    icon: 'css',
    color: COLOR.ORANGE,
    iconTheme: THEME.ORANGE
  },
  {
    id: 'css-formatter',
    text: 'CSS Formatter',
    category: 'programming',
    icon: 'css',
    color: COLOR.GREEN,
    iconTheme: THEME.GREEN
  }
];

export const CODEC = [
  {
    id: 'base64',
    text: 'Base64',
    category: 'codec',
    icon: 'base64',
    color: COLOR.BLUE,
    iconTheme: THEME.BLUE,
  },
  {
    id: 'url',
    text: 'URL',
    category: 'codec',
    icon:  'url',
    color: COLOR.ORANGE,
    iconTheme: THEME.ORANGE,
  }
]

export const VALIDATOR = [
  {
    id: 'mysql',
    text: 'MySQL Validator',
    category: 'validator',
    icon: 'mysql',
    color: COLOR.WATHET,
    iconTheme: THEME.WATHET
  },
  {
    id: 'reg-exp',
    text: 'Regular Expression Validator',
    category: 'validator',
    icon: 'regular-expression',
    color: COLOR.YELLOW,
    iconTheme: THEME.YELLOW
  },
  {
    id: 'email',
    text: 'Email Validator',
    category: 'validator',
    icon: 'email',
    color: COLOR.PURPLE,
    iconTheme: THEME.PURPLE
  },
  {
    id: 'phone-num',
    text: 'Phone Number Validator',
    category: 'validator',
    icon: 'phone-num',
    color: COLOR.BLUE,
    iconTheme: THEME.BLUE
  },
  {
    id: 'json',
    text: 'JSON Validator',
    category: 'validator',
    icon: 'json',
    color: COLOR.PURPLE,
    iconTheme: THEME.PURPLE
  }
];

export const TIMER = [
  {
    id: 'countdown',
    text: 'Countdown',
    category: 'timer',
    icon: 'countdown',
    color: COLOR.RED,
    iconTheme: THEME.RED
  },
  {
    id: 'count-timer',
    text: 'Count Timer',
    category: 'timer',
    icon: 'count-timer',
    color: COLOR.ORANGE,
    iconTheme: THEME.ORANGE
  },
  {
    id: 'online-clock',
    text: 'Online Clock',
    category: 'timer',
    icon: 'clock',
    color: COLOR.GREEN,
    iconTheme: THEME.GREEN
  },
  {
    id: 'world-clock',
    text: 'World Clock',
    category: 'timer',
    icon: 'world-clock',
    color: COLOR.YELLOW,
    iconTheme: THEME.YELLOW
  },
  {
    id: 'timestamp',
    text: 'TimeStamp',
    category: 'timer',
    icon: 'timestamp',
    color: COLOR.WATHET,
    iconTheme: THEME.WATHET
  },
  {
    id: 'chronograph',
    text: 'Chronograph',
    category: 'timer',
    icon: 'chronograph',
    color: COLOR.PURPLE,
    iconTheme: THEME.PURPLE
  }
]

const TABS_SINGLE = [
  {
    id: 'converter',
    text: 'Converter',
    list: CONVERTER,
  },
  {
    id: 'programming',
    text: 'Programming',
    list: PROGRAMMING
  },
  {
    id: 'codec',
    text: 'Codec',
    list: CODEC
  },
  {
    id:  'validator',
    text: 'Validator',
    list: VALIDATOR,
  },
  {
    id:  'timer',
    text: 'Timer',
    list: TIMER,
  }
];

const getAllTab = () => {
  const maxCount = 16;
  const totalCateCount = TABS_SINGLE.length;
  const avgCount = Math.ceil(maxCount / totalCateCount);

  return {
    id: 'all',
    text: 'All Tools',
    list: [].concat(...TABS_SINGLE.map(tab => {
      return tab.list.slice(0, avgCount);
    })).slice(0, maxCount)
  }
}

export const TABS = [
  getAllTab(),
  ...TABS_SINGLE,
];
