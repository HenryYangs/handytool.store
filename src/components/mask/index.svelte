<script>
  export let onClose = () => {};

  const onCloseHandler = (event) => {
    if (event.target.getAttribute('id') === 'mask') {
      onClose();
    }
  };
</script>

<div class='wrapper' on:click={onCloseHandler} id='mask'>
  <slot />
</div>

<style>
.wrapper {
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

/* .mask-container {
  width: 100%;
  height: 100%;
} */
</style>
