import auth from './auth';
import common from './common';
import exception from './exception';
import favorite from './favorite';
import home from './home';
import sitemap from './sitemap';
import time from './time';
import tool from './tool';

export default {
  ...sitemap,
  ...common,
  ...auth,
  ...home,
  ...favorite,
  ...tool,
  ...exception,
  ...time,
};
