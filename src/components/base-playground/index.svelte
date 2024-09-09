<script>
  export let btnText = 'Transfer';
  export let value;
  export let style = '';
  export let noBtn = false;
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
    <textarea
      class='form-control common-textarea'
      aria-label='input area'
      bind:value={value}
    ></textarea>
  </div>

  {#if noBtn === false}
    <div class='d-grid'>
      <button
        class='btn btn-primary action-btn'
        type='button'
        on:click={onConfirmHandler}
      >
        {@html btnText}
      </button>
    </div>
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

.action-btn {
  background-color: rgba(61, 82, 160, .9);
  border-color: rgba(61, 82, 160, .9);
}

.action-btn:hover {
  background-color: #3D52A0;
  border-color: #3D52A0;
}  
</style>
