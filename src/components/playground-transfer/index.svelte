<script>
  import BasePlayground from '../base-playground/index.svelte';
  import BaseActions from '../base-actions/index.svelte';

  export let leftValue;
  export let rightValue;
  export let leftConfig = {};
  export let rightConfig = {};
  export let style = '';

  const basePlaygroundStyle = 'width: calc(50% - 10px)';
</script>

<section class='wrapper' style={style}>
  <BasePlayground
    bind:value={leftValue}
    btnText={leftConfig.btnText}
    style={basePlaygroundStyle}
    onConfirm={leftConfig.onConfirm}
  >
    <BaseActions
      slot='header-main'
      onClear={leftConfig.onClear}
      onCopy={leftConfig.onCopy}
    />

    <div slot='header-extra'>
      <slot name='left-header-extra' />
    </div>
  </BasePlayground>

  <BasePlayground
    bind:value={rightValue}
    btnText={rightConfig.btnText}
    style={basePlaygroundStyle}
    onConfirm={rightConfig.onConfirm}
  >
    <BaseActions slot='header-main' onClear={rightConfig.onClear} onCopy={rightConfig.onCopy} />

    <svelte:fragment slot='header-extra'>
      <slot name='right-header-extra' />
    </svelte:fragment>
  </BasePlayground>
</section>

<style>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: start;
}
</style>
