<script>
  import BeInput from '@brewer/beerui/be-input';
  import BeTextarea from '@brewer/beerui/be-textarea';
  import ExecuteBtn from '../execute-btn/index.svelte';

  export let btnText = 'Transfer';
  export let value;
  export let style = '';
  export let noBtn = false;
  export let input = false;
  export let onConfirm = (value) => {};

  const onConfirmHandler = () => {
    if (!value || !onConfirm) return;

    onConfirm(value);
  }
</script>

<section class='base-playground-wrapper tool-panel' style={style}>
  <div class='base-playground_header'>
    <slot name='header-main' class='d-flex' />

    <slot name='header-extra' />
  </div>

  <div class='input-group textarea-wrapper'>
    {#if input}
      <BeInput bind:value />
    {:else}
      <BeTextarea bind:value></BeTextarea>
    {/if}
  </div>

  {#if noBtn === false}
    <ExecuteBtn text={btnText} onConfirm={onConfirmHandler} />
  {/if}
</section>

<style global lang='scss'>
  .base-playground-wrapper {
    .base-playground_header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
    
    .textarea-wrapper {
      margin-bottom: 10px;
    }
  }
</style>
