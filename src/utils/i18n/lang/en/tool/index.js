import convertor from './convertor';
import generator from './generator';
import timer from './timer';
import validator from './validator';

export default {
  allSingleTool: 'All {tool} Tools',

  otherToolsTitle: 'Other {toolName} Tools',
  otherToolsDesc: 'Checkout some other popular {toolCategory} tools',

  convertBefore: 'Before',
  convertAfter: 'After',

  colorHexToRgb: 'Hex to RGB',
  colorRgbToHex: 'RGB to Hex',

  ...convertor,
  ...validator,
  ...timer,
  ...generator,
}
