<script>
  export let text = '';
  export let onConfirm = () => {};
  export let style = '';
</script>

<div class='d-grid' style={style}>
  <button
    class='btn btn-primary action-btn'
    type='button'
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
  background-color: #3D52A0;
  border-color: #3D52A0;
}  
</style>
