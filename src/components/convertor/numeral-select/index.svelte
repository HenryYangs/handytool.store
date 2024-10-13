<script>
  import { BeSelect, BeOption } from '@brewer/beerui/be-select';
  import BeInput from '@brewer/beerui/be-input';
  import { t } from 'svelte-i18n';
  import { NUMERAL_SYSTEM } from '../../../constant/numeral';

  export let numeral;
  export let numeralCustom;
</script>

<div class='numeral-select-wrapper layout-start-center'>
  <BeSelect
    size='mini'
    placeholder='Select Numeral System'
    bind:value={numeral}
  >
    {#each NUMERAL_SYSTEM as numeralItem}
      <BeOption value={numeralItem.value} label={$t(numeralItem.label)} />
    {/each}
  </BeSelect>

  {#if numeral === -1}
    <div class='custom-numeral'>
      <BeInput type='number' size='mini' min={2} bind:value={numeralCustom} />
    </div>
  {/if}
</div>

<style global lang='scss'>
  .numeral-select-wrapper {
    .be-select {
      width: 120px;
    }
    .custom-numeral {
      margin-left: 10px;
      width: 100px;
    }
  }
</style>
