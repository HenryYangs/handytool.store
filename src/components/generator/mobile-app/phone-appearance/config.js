import { LOCALE_CN, LOCALE_EN } from '../../../../constant/i18n';
import { getLang } from '../../../../utils/i18n';

export const SIGNAL_STRENGTH_LIST = ['1', '2', '3', '4'];

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

export const SIGNAL_TYPE_LIST = ['None', '3G', '4G', '5G', 'WIFI'];

export const BATTERY_STATUS_LIST = ['Normal', 'Charging'];
