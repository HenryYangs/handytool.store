<script>
  import { t } from 'svelte-i18n';
  import { NUMERAL_SYSTEM } from '../../../constant/numeral';

  export let numeral;
  export let numeralCustom;
</script>

<div class='d-flex'>
  <select
    class='form-select form-select-sm'
    aria-label='Select Numeral System'
    placeholder='Select Numeral System'
    bind:value={numeral}
  >
    {#each NUMERAL_SYSTEM as numeralItem}
      <option value={numeralItem.value}>{$t(numeralItem.label)}</option>
    {/each}
  </select>

  {#if numeral === -1}
    <div class='input-group-sm custom-numeral'>
      <input type='number' class='form-control' min={NUMERAL_SYSTEM.length + 1} bind:value={numeralCustom} />
    </div>
  {/if}
</div>

<style>
.custom-numeral {
  margin-left: 10px;
}
</style>
