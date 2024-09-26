import auth from './auth';
import common from './common';
import favorite from './favorite';
import home from './home';
import sitemap from './sitemap';
import tool from './tool';

export default {
  ...sitemap,
  ...common,
  ...auth,
  ...home,
  ...favorite,
  ...tool,
};
