<script>
  export let onClose = () => {};

  const onCloseHandler = (event) => {
    if (event.target.getAttribute('id') === 'mask') {
      onClose();
    }
  };
</script>

<div class='mask-wrapper' on:click={onCloseHandler} id='mask'>
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
