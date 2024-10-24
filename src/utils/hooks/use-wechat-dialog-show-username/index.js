import { writable } from 'svelte/store';
import { EVENTS } from '../../../constant/events';
import { useEventListener } from '../useEventListener';

export const useWechatDialogShowUserName = () => {
  const showUserName = writable(false);

  const onShowUserName = (value) => {
    showUserName.set(value);
  };

  useEventListener(EVENTS.APP.WECHAT.DIALOG.SHOW_USER_NAME, onShowUserName);

  return showUserName;
};

// stores.js

// export const showUserName = writable(false);

// function onShowUserName(value) {
//   showUserName.update(() => value);
// }

// export const useWechatDialogShowUserName = () => {
//   useEventListener(EVENTS.APP.WECHAT.DIALOG.SHOW_USER_NAME, onShowUserName);
// };
