<script>
  import { onMount } from 'svelte';
  import Clipboard from 'clipboard';
  import event from '../../../utils/event';
  import '../../../assets/icon/actions/iconfont.css';
  import { EVENTS } from '../../../constant/events';

  export let id;
  export let copyValue;

  onMount(() => {
    const clipboard = new Clipboard(`#${id}`, {
      text: () => {
        return String(copyValue)
      }
    });

    clipboard.on('success', () => {
      event.emit(EVENTS.TOOLTIP, {
        show: true,
        message: 'Copy Success!'
      });
    });

    clipboard.on('error', () => {
      event.emit(EVENTS.TOOLTIP, {
        show: true,
        message: 'Copy Error!'
      });
    });
  })
</script>

<i class='iconfont icon-action-copy action-copy' id={id}></i>

<style>
.action-copy {
  cursor: pointer;
}

.action-copy:hover {
  color: #7091E6;
}
</style>
