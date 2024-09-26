import codec from './codec';
import convertor from './convertor';
import programming from './programming';
import timer from './timer';
import validator from './validator';

export default {
  'All Tools': '所有工具',
  'All Free Tools': '所有免费工具集合',
  allSingleTool: '所有{tool}',

  Convert: '转换',
  convertor: '转换',
  Programming: '编程',
  programming: '编程',
  Codec: '编解码',
  codec: '编解码',
  Validate: '校验',
  Validator: '校验',
  validate: '校验',
  validator: '校验',
  Timer: '时间',
  timer: '时间',
  otherToolsTitle: '其它{toolName}',
  otherToolsDesc: '更多常用{toolCategory}',

  Units: '单位',
  units: '单位',

  convertBefore: '转换前',
  convertAfter: '转换后',

  ...convertor,
  ...programming,
  ...codec,
  ...validator,
  ...timer,
}
