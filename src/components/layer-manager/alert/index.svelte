 <script>
  import BeAlert from '@brewer/beerui/be-alert';
  import { onMount } from 'svelte';
  import event from '../../../utils/event';
  import { EVENTS } from '../../../constant/events';
  import { ALERT_STATUS } from '../../../constant/status';
  import { t } from 'svelte-i18n';

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
      showCloseBtn = false,
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
      event.off(EVENTS.ALERT, onAlert);
    }
  })
</script>

{#if isShow}
  <div class='alert-wrapper'>
    <BeAlert title={$t(msg)} type={type} center closable={hasCloseBtn} on:close={close} />
  </div>
{/if}

<style global>
.alert-wrapper {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 80%;
  z-index: var(--alert-layer);
}
</style>
