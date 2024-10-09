<script>
  import BasePlayground from '../base-playground/index.svelte';
  import BaseActions from '../base-actions/index.svelte';

  export let value;
  export let btnText = '';
  export let style = '';
  export let onConfirm = null;
  export let noConfirmBtn = false;
  export let actionConfig = {};
  export let useInput = false;
</script>

<BasePlayground
  bind:value={value}
  btnText={btnText}
  style={style}
  onConfirm={onConfirm}
  noBtn={noConfirmBtn}
  input={useInput}
>
  <BaseActions
    slot='header-main'
    bind:copyValue={value}
    {...actionConfig}
  >
    <svelte:fragment slot='extra-action'></svelte:fragment>
  </BaseActions>

  <svelte:fragment slot='header-extra'>
    <slot name='header-extra' />
  </svelte:fragment>
</BasePlayground>