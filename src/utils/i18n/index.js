import { getLocaleFromNavigator, init, register } from 'svelte-i18n';
import { STORAGE_I18N_KEY } from '../../constant/storage';

export const getLang = () => {
  return localStorage.getItem(STORAGE_I18N_KEY) || 'zh-CN';
}

async function setup() {
  register('en', () => import('./lang/en/index.js'));
  register('zh-CN', () => import('./lang/zh-CN/index.js'));
  
  return await Promise.allSettled([
    init({
      initialLocale: getLang() || getLocaleFromNavigator(),
      fallbackLocale: 'en',
    }),
  ]);
}

export const localResult = setup();