 <script>
  import { onMount } from 'svelte';
  import event from '../../../utils/event';
  import { EVENTS } from '../../../constant/events';
  import { ALERT_STATUS } from '../../../constant/status';

  $: isShow = false;
  $: msg = '';
  $: type = ALERT_STATUS.SUCCESS;
  $: hasCloseBtn = true;

  let timeout = 0;

  const close = () => {
    clearTimeout(timeout);
    isShow = false;
  }

  const onAlert = (options) => {
    close();

    const {
      show,
      message,
      status,
      showCloseBtn = true,
      duration = 3000
    } = options;

    isShow = show;

    if (show === false) {
      close();
      return;
    }

    msg = message;
    type = status;
    hasCloseBtn = showCloseBtn;

    timeout = setTimeout(() => {
      close();
    }, duration);
  };

  onMount(() => {
    event.on(EVENTS.ALERT, onAlert);

    return () => {
      event.off(EVENTS, onAlert);
    }
  })
</script>

{#if isShow}
  <div class='alert alert-{type} alert-dismissible fade wrapper' role='alert'>
    <div>{msg}</div>

    {#if hasCloseBtn}
      <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close' on:click={close}></button>
    {/if}
  </div>
{/if}

<style>
.wrapper {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 80%;
  z-index: var(--alert-layer);
}
</style>
