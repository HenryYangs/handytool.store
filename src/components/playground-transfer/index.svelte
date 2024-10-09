<script>
  import PlaygroundArea from '../playground-area/index.svelte';

  export let leftValue;
  export let rightValue;
  export let leftConfig = {};
  export let rightConfig = {};
  export let style = '';

  const basePlaygroundStyle = 'width: calc(50% - 10px)';
</script>

<section class='wrapper' style={style}>
  <PlaygroundArea
    bind:value={leftValue}
    btnText={leftConfig.btnText}
    style={basePlaygroundStyle}
    onConfirm={leftConfig.onConfirm}
    actionConfig={{
      onClear: leftConfig.onClear,
      onCopy: leftConfig.onCopy
    }}
    useInput={leftConfig.useInput}
  >
    <div slot='header-extra'>
      <slot name='left-header-extra' />
    </div>
  </PlaygroundArea>

  <PlaygroundArea
    bind:value={rightValue}
    btnText={rightConfig.btnText}
    style={basePlaygroundStyle}
    onConfirm={rightConfig.onConfirm}
    actionConfig={{
      onClear: rightConfig.onClear,
      onCopy: rightConfig.onCopy
    }}
    useInput={rightConfig.useInput}
  >
    <div slot='header-extra'>
      <slot name='right-header-extra' />
    </div>
  </PlaygroundArea>
</section>

<style>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: start;
}
</style>
