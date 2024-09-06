<script>
  import Clipboard from 'clipboard';
  import { onMount } from 'svelte';
  import event from '../../utils/event';
  import { EVENTS } from '../../constant/events';

  export let onClear = null;
  export let onCopy = null;
  export let copyValue = '';

  // use current timestamp to prevent component is imported multiple times
  // because copy button should have unique id
  const idAddon = String((Date.now() * Math.random()).toFixed(0));

  onMount(() => {
    if (!onCopy) return;

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
  {#if onClear}
    <button class='btn btn-outline-dark btn-sm' on:click={onClear}>Clear</button>
  {/if}
  
  {#if onCopy}
    <button id={`copy-${idAddon}`} class='btn btn-outline-dark btn-sm' on:click={onCopy}>Copy</button>
  {/if}
</div>

<style></style>
