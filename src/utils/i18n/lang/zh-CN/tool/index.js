import codec from './codec';
import convertor from './convertor';
import generator from './generator';
import programming from './programming';
import timer from './timer';
import validator from './validator';

export default {
  'All Tools': '所有工具',
  'All Free Tools': '所有免费工具集合',
  allSingleTool: '所有{tool}',

  Generator: '生成器',
  generator: '生成器',
  Convert: '转换',
  Convertor: '转换器',
  convertor: '转换器',
  Programming: '编程工具',
  programming: '编程工具',
  Codec: '编解码工具',
  codec: '编解码工具',
  Validate: '校验工具',
  Validator: '校验工具',
  validate: '校验工具',
  validator: '校验工具',
  Timer: '时间工具',
  timer: '时间工具',
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
  ...generator
}
