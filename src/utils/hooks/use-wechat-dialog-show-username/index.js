import { writable } from 'svelte/store';
import { EVENTS } from '../../../constant/events';
import { useEventListener } from '../use-event-listener';

export const useWechatDialogShowUserName = () => {
  const showUserName = writable(false);

  const onShowUserName = (value) => {
    showUserName.set(value);
  };

  useEventListener(EVENTS.APP.WECHAT.DIALOG.SHOW_USER_NAME, onShowUserName);

  return showUserName;
};
