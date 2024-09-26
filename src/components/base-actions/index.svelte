<script>
  import Clipboard from 'clipboard';
  import { onMount } from 'svelte';
  import event from '../../utils/event';
  import { EVENTS } from '../../constant/events';
  import { t } from 'svelte-i18n';

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

    const clipboard = new Clipboard(`#copy-${idAddon}`, {
      text: () => {
        return copyValue
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

<div>
  {#if noClear === false}
    <button class='btn btn-outline-dark btn-sm' on:click={onClear}>{$t('Clear')}</button>
  {/if}
  
  {#if noCopy === false}
    <button id={`copy-${idAddon}`} class='btn btn-outline-dark btn-sm' on:click={onCopy}>{$t('Copy')}</button>
  {/if}

  <slot name='extra-action'></slot>
</div>

<style></style>
