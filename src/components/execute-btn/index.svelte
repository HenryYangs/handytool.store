<script>
  export let text = '';
  export let onConfirm = () => {};
  export let disabled = false;
  export let loading = false;
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
    {#if loading}
      <i class='iconfont-common icon-common-loading icon-loading'></i>
    {/if}

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

.icon-loading {
  display: inline-block;
  animation: loading 1.5s ease-in-out infinite;
}

@keyframes loading {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
