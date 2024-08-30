<script>
  import { onMount } from 'svelte';
  import event from '../../../utils/event';
  import { EVENTS } from '../../../constant/events';
  import icon from '../../../assets/images/logo_40x40.png';

  $: isShow = false;
  $: msg = '';
  let timeout = 0;

  const close = () => {
    clearTimeout(timeout);
    isShow = false;
  }

  const onTooltip = (options = {}) => {
    const {
      show,
      message,
      duration = 3000
    } = options;

    isShow = show;

    if (show === false) return;

    msg = message;

    timeout = setTimeout(() => {
      close()
    }, duration);
  };

  onMount(() => {
    event.on(EVENTS.TOOLTIP, onTooltip);

    return () => {
      event.off(EVENTS.TOOLTIP, onTooltip);
      close();
    }
  })
</script>

<div class='tooltip-wrapper p-3 bottom-0 end-0'  style='position: fixed'>
  <div class={`toast ${isShow ? 'show' : ''}`}>
    <div class='toast-header'>
      <img src={icon} class='rounded me-2 logo' alt='logo'>
      <strong class='me-auto'>HandyTool</strong>

       <button type='button' class='btn-close' aria-label='Close' on:click={close}></button>
    </div>
    <div class='toast-body'>
      {msg}
    </div>
  </div>
</div>

<style>
.tooltip-wrapper {
  position: fixed;
  padding: 10px;
}

.logo {
  width: 20px;
  height: 20px;
}
</style>
