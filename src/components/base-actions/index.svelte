<script>
  import Clipboard from 'clipboard';
  import { onMount } from 'svelte';
  import event from '../../utils/event';
  import { EVENTS } from '../../constant/events';

  export let onClear = () => {};
  export let onCopy = () => {};
  export let copyValue = '';

  const curTs = Date.now();

  onMount(() => {
    const clipboard = new Clipboard(`#copy-${curTs}`, {
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
  <button class='btn btn-outline-dark btn-sm' on:click={onClear}>Clear</button>
  <button id={`copy-${curTs}`} class='btn btn-outline-dark btn-sm' on:click={onCopy}>Copy</button>
</div>

<style></style>
