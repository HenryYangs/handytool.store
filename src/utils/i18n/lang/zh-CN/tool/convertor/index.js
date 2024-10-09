import lengthUnit from './length-unit';
import timeUnit from './time-unit';

export default {
  'Convertor Tools': '转换工具',
  'Free Text, Unit Convertor Tools, etc.': '免费的文本、单位转换工具集',

  Binary: '二进制',
  Quaternary: '四进制',
  Octal: '八进制',
  Decimal: '十进制',
  Hexadecimal: '十六进制',
  Hex: '十六进制',
  Duotricemary: '三十二进制',
  convertTextToNumber: '转换成{target}',
  convertNumberToText: '转换成文本',

  fromUnitLabel: '锚定单位',
  colorHexToRgb: '16 进制转 RGB',
  colorRgbToHex: 'RGB 转 16 进制',
  'Show Hash Tag': '添加#前缀',
  'Add RGB Prefix': '添加 RGB 前缀',
  
  ...lengthUnit,
  ...timeUnit,
}
