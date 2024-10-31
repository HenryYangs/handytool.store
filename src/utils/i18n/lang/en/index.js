import auth from './auth';
import common from './common';
import exception from './exception';
import favorite from './favorite';
import home from './home';
import tool from './tool';

export default {
  ...auth,
  ...home,
  ...favorite,
  ...tool,
  ...exception,
  ...common,
}
