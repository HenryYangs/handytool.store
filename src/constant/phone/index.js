import { transformObjectToArrayOptions } from '../../utils/object';
import { LOCALE_CN, LOCALE_EN } from '../../constant/i18n';
import { getLang } from '../../utils/i18n';

export const PHONE = {
  IOS: 'ios',
  ANDROID: 'android'
};

export const SIGNAL_STRENGTH_IOS = {
  None: 0,
  Poor: 1,
  Fair: 2,
  Good: 3,
  Strong: 4
};

export const SIGNAL_STRENGTH_IOS_LIST = transformObjectToArrayOptions(SIGNAL_STRENGTH_IOS);

const CHINESE_CARRIER_LIST = ['中国移动', '中国联通', '中国电信'];
const US_CARRIER_LIST = ['AT&T', 'T-Mobile', 'Verizon']; // TODO support customization

export const CARRIER_LIST = (() => {
  const lang = getLang();
  
  switch (lang) {
    case LOCALE_CN:
      return CHINESE_CARRIER_LIST;
    case LOCALE_EN:
      return US_CARRIER_LIST;
    default:
      return CHINESE_CARRIER_LIST;
  }
})();

export const SIGNAL_TYPE_MAP = {
  None: 'None',
  WIFI: 'WIFI',
  '5G': '5G',
  '4G': '4G',
  '3G': '3G',
};
export const SIGNAL_TYPE_LIST = transformObjectToArrayOptions(SIGNAL_TYPE_MAP);

export const DEFAULT_BATTERY_PERCENTAGE = 60;

export const BATTERY_STATUS_MAP = {
  Normal: 'Normal',
  Charging: 'Charging',
};
export const BATTERY_STATUS_LIST = transformObjectToArrayOptions(BATTERY_STATUS_MAP);

export const CHAT_TYPE_MAP = {
  Single: 'single',
  Group: 'group',
};

export const CHAT_TYPE_LIST = transformObjectToArrayOptions(CHAT_TYPE_MAP);

export const GROUP_CHAT_MIN_MEMBER_COUNT = 3;

export const DEFAULT_CHAT_TITLE = 'WeChat Dialog';
