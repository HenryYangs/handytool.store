<script>
  import Loading from '../loading/index.svelte';
  import BeButton from '@brewer/beerui/be-button';

  export let text = '';
  export let onConfirm = () => {};
  export let disabled = false;
  export let loading = false;
  export let style = '';
  export let btnStyle = '';
</script>

<div class='execute-btn-wrapper' style={style}>
  <BeButton
    class='action-btn'
    type='button'
    disabled={disabled}
    style={btnStyle}
    on:click={onConfirm}
  >
    {#if loading}
      <Loading />
    {/if}

    {@html text}
  </BeButton>
</div>

<style global lang='scss'>
  .execute-btn-wrapper {
    .action-btn {
      width: 100%;
      background-color: rgba(61, 82, 160, .9);
      border-color: rgba(61, 82, 160, .9);
    }
    
    .action-btn:hover {
      background-color: var(--theme-main-color);
      border-color: var(--theme-main-color);
    }
  }
</style>
