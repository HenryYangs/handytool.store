<script>
  import Loading from '../loading/index.svelte';
  import BeButton from '@brewer/beerui/be-button';

  export let text = '';
  export let onConfirm = () => {};
  export let disabled = false;
  export let loading = false;
  export let style = '';
  export let btnStyle = '';
  export let className = '';
  export let btnClassName = '';
  export let buttonProps = {}
</script>

<div class={['execute-btn-wrapper', className].join(' ')} style={style}>
  {#key buttonProps.type}
    <BeButton
      class={[buttonProps.type ? '' : 'action-btn', btnClassName].join(' ')}
      nativeType='button'
      disabled={disabled}
      style={btnStyle}
      on:click={onConfirm}
      type={buttonProps.type}
      size={buttonProps.size}
    >
      {#if loading}
        <Loading />
      {/if}

      {@html text}
    </BeButton>
  {/key}
</div>

<style global lang='scss'>
  .execute-btn-wrapper {
    .action-btn {
      width: 100%;
      background-color: rgba(61, 82, 160, .9);
      border-color: rgba(61, 82, 160, .9);
    }
    
    .action-btn:hover,
    .action-btn:active,
    .action-btn:focus {
      background-color: var(--theme-main-color);
      border-color: var(--theme-main-color);

      span {
        color: var(--white);
      }
    }
  }
</style>
