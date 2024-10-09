<script>
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

<section class='tool-panel' style={style}>
  <div class='header'>
    <slot name='header-main' class='d-flex' />

    <slot name='header-extra' />
  </div>

  <div class='input-group textarea-wrapper'>
    {#if input}
      <input
        class='form-control'
        aria-label='input area'
        bind:value={value}
      />
    {:else}
      <textarea
        class='form-control common-textarea'
        aria-label='input area'
        bind:value={value}
      ></textarea>
    {/if}
  </div>

  {#if noBtn === false}
    <ExecuteBtn text={btnText} onConfirm={onConfirmHandler} />
  {/if}
</section>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.textarea-wrapper {
  margin-bottom: 10px;
}
</style>
