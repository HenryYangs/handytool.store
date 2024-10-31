import { onMount } from 'svelte';
import event from '../../event';

export const useEventListener = (eventName, callback) => {
  onMount(() => {
    event.on(eventName, callback);

    return () => {
      event.off(eventName, callback);
    };
  });
};
