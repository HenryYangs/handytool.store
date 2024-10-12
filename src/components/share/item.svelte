<script>
  export let url = '';
  export let color = '';
  export let style = '';
  export let id = '';
  export let onMouseEnter = (event) => {};
  export let onMouseLeave = (event) => {};
  export let onAction = () => {};

  let backgroundColor = '';

  const onActionHandler = () => {
    if (url) {
      window.open(url, '_blank');
    }

    onAction();
  };
</script>

<button
  id={id}
  class='share-item-wrapper'
  style={[`
    border-color: ${color};
    background-color: ${backgroundColor};
  `, style].join('')}
  on:click={onActionHandler}
  on:mouseenter={(event) => {
    backgroundColor = color;
    onMouseEnter(event);
  }}
  on:mouseleave={(event) => {
    backgroundColor = 'transparent';
    onMouseLeave(event)
  }}
>
  <slot />
</button>

<style global lang='scss'>
.share-item-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 34px;
  padding: 5px 10px;
  border: 1px solid transparent;
  border-radius: 5px;
  transition: all .3s ease;
  background-color: transparent;
  cursor: pointer;
}
</style>
