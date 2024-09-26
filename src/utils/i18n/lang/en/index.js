import auth from './auth';
import favorite from './favorite';
import home from './home';
import tool from './tool';

export default {
  ...auth,
  ...home,
  ...favorite,
  ...tool,
}
