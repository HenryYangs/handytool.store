import convertor from './convertor';
import timer from './timer';
import validator from './validator';

export default {
  allSingleTool: 'All {tool} Tools',

  otherToolsTitle: 'Other {toolName} Tools',
  otherToolsDesc: 'Checkout some other popular {toolCategory} tools',

  convertBefore: 'Before',
  convertAfter: 'After',

  ...convertor,
  ...validator,
  ...timer,
}
