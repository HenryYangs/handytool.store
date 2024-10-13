<script>
  import BeButton from '@brewer/beerui/be-button';
  import Clipboard from 'clipboard';
  import { onMount } from 'svelte';
  import event from '../../utils/event';
  import { EVENTS } from '../../constant/events';
  import { t } from 'svelte-i18n';
  import { ALERT_STATUS } from '../../constant/status';

  export let noClear = false;
  export let onClear = () => {};
  export let noCopy = false;
  export let onCopy = () => {};
  export let copyValue = '';
  // TODO
  // export let noDownload = true;
  // export let onDownload = () => {};

  // use current timestamp to prevent component is imported multiple times
  // because copy button should have unique id
  const idAddon = String((Date.now() * Math.random()).toFixed(0));

  onMount(() => {
    if (noCopy) return;

    const clipboard = new Clipboard(`.copy-${idAddon}`, {
      text: () => {
        return copyValue
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

<div class='base-actions-wrapper'>
  {#if noClear === false}
    <BeButton class='btn-outline-dark' type='default' size='small' on:click={onClear}>{$t('Clear')}</BeButton>
  {/if}
  
  {#if noCopy === false}
    <BeButton class={`btn-outline-dark copy-${idAddon}`} type='default' size='small' on:click={onCopy}>{$t('Copy')}</BeButton>
  {/if}

  <slot name='extra-action'></slot>
</div>
