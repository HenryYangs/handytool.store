<script>
  export let text = '';
  export let onConfirm = () => {};
  export let disabled = false;
  export let style = '';
  export let btnStyle = '';
</script>

<div class='d-grid' style={style}>
  <button
    class='btn btn-primary action-btn'
    type='button'
    disabled={disabled}
    style={btnStyle}
    on:click={onConfirm}
  >
    {@html text}
  </button>
</div>

<style>
.action-btn {
  background-color: rgba(61, 82, 160, .9);
  border-color: rgba(61, 82, 160, .9);
}

.action-btn:hover {
  background-color: var(--theme-main-color);
  border-color: var(--theme-main-color);
}  
</style>
