import { ROUTER } from '../../../constant/router';
import { PURE_TOOLS } from '../../../constant/tools';
import { processToolUrl } from '../../../utils/url';

export const CONF_NAVIGATE = [
  {
    url: ROUTER.HOME,
    text: 'Home',
  },
  {
    url: ROUTER.CONTACT,
    text: 'Contact',
  },
];

export const CONF_TOOLS = PURE_TOOLS.reduce(
  (prev, next) => prev.concat(next.list),
  []
).map((item) => ({
  text: item.text,
  url: processToolUrl(item),
}));
