<script>
  import { onMount } from 'svelte';
  import Clipboard from 'clipboard';
  import event from '../../../utils/event';
  import '../../../assets/icon/actions/iconfont.css';
  import { EVENTS } from '../../../constant/events';
  import { ALERT_STATUS } from '../../../constant/status';

  export let id;
  export let copyValue;

  onMount(() => {
    const clipboard = new Clipboard(`#${id}`, {
      text: () => {
        return String(copyValue)
      }
    });

    clipboard.on('success', () => {
      event.emit(EVENTS.ALERT, {
        show: true,
        status: ALERT_STATUS.SUCCESS,
        message: 'Copy Success!'
      });
    });

    clipboard.on('error', () => {
      event.emit(EVENTS.ALERT, {
        show: true,
        status: ALERT_STATUS.ERROR,
        message: 'Copy Error!'
      });
    });
  })
</script>

<i class='iconfont-action icon-action-copy action-copy' id={id}></i>

<style global lang='scss'>
.action-copy {
  cursor: pointer;
}

.action-copy:hover {
  color: var(--theme-secondary-color);
}
</style>
