import { CATEGORY, COLOR, THEME } from './base';

const TOOL_CODEC_ID = {
  BASE64: 'base64',
  URL: 'url',
};

export const CODEC = [
  {
    id: TOOL_CODEC_ID.BASE64,
    text: 'Base64',
    category: CATEGORY.CODEC,
    categoryId: CATEGORY.CODEC,
    icon: 'base64',
    color: COLOR.BLUE,
    iconTheme: THEME.BLUE,
    description: 'base64Desc',
  },
  {
    id: TOOL_CODEC_ID.URL,
    text: 'URL',
    category: CATEGORY.CODEC,
    categoryId: CATEGORY.CODEC,
    icon: 'url',
    color: COLOR.ORANGE,
    iconTheme: THEME.ORANGE,
    description: 'urlDesc',
  },
];
