<script>
  import BasePlayground from '../base-playground/index.svelte';
  import BaseActions from '../base-actions/index.svelte';

  export let value;
  export let btnText = '';
  export let style = '';
  export let onConfirm = null;
  export let onClear = null;
  export let onCopy = null;
</script>

<BasePlayground
  bind:value={value}
  btnText={btnText}
  style={style}
  onConfirm={onConfirm}
>
  <BaseActions
    slot='header-main'
    onClear={onClear}
    onCopy={onCopy}
    bind:copyValue={value}
  />

  <svelte:fragment slot='header-extra'>
    <slot name='header-extra' />
  </svelte:fragment>
</BasePlayground>