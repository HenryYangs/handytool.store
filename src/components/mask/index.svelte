<script>
  export let id = '';
  export let className = '';
  export let style = '';
  export let onClose = () => {};

  const realId = id || 'mask';
  const onCloseHandler = (event) => {
    if (event.target.getAttribute('id') === realId) {
      onClose();
    }
  };
</script>

<div class={['mask-wrapper', className].join(' ')} on:click={onCloseHandler} id={realId} style={style}>
  <slot />
</div>

<style global lang='scss'>
.mask-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .7);
  z-index: var(--mask-layer);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
