import { getLocaleFromNavigator, init, register } from 'svelte-i18n';
import { STORAGE_I18N_KEY } from '../../constant/storage';
import { LOCALE_CN, LOCALE_EN } from '../../constant/i18n';

export const getLang = () => {
  return localStorage.getItem(STORAGE_I18N_KEY) || LOCALE_EN;
}

async function setup() {
  register(LOCALE_EN, () => import('./lang/en/index.js'));
  register(LOCALE_CN, () => import('./lang/zh-CN/index.js'));
  
  return await Promise.allSettled([
    init({
      initialLocale: getLang() || getLocaleFromNavigator(),
      fallbackLocale: LOCALE_EN,
    }),
  ]);
}

export const localResult = setup();