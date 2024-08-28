<script>
  import BaseActions from '../../base-actions/index.svelte';
  import { NUMERAL_SYSTEM } from '../../../constant/numeral';
  import { validateNumeralText } from '../../../utils/validate';

  export let numeral = 0;
  export let numeralCustom = 0;
  export let textareaValue = '';
  export let style = '';
  export let btnText = 'Convert';
  export let onNumeralChange = () => {};
  export let onConvert = (val = '', numeral = 0) => {};
  export let onClear = () => {};
  export let onCopy = () => {};

  const onConvertHandler = () => {
    if (!onConvert) return;

    const realNumeral = numeral === -1 ? numeralCustom : numeral;

    if (!validateNumeralText(textareaValue, realNumeral)) return;

    onConvert(textareaValue, realNumeral);
  }
</script>

<section class='convert-section' style={style}>
  <div class='d-flex justify-content-between header'>
    <BaseActions onClear={onClear} onCopy={onCopy} />

    <div class='d-flex numeral-selection'>
      <select
        class='form-select form-select-sm'
        aria-label='Select Numeral System'
        placeholder='Select Numeral System'
        bind:value={numeral}
        on:change={onNumeralChange}
      >
        {#each NUMERAL_SYSTEM as numeralItem}
          <option value={numeralItem.value}>{numeralItem.label}</option>
        {/each}
      </select>

      {#if numeral === -1}
        <div class='input-group-sm'>
          <input type='number' class='form-control' min={NUMERAL_SYSTEM.length + 1} bind:value={numeralCustom} />
        </div>
      {/if}
    </div>
  </div>

  <div class='input-group convert-textarea-wrapper'>
    <textarea class='form-control convert-textarea' aria-label='convert from' bind:value={textareaValue}></textarea>
  </div>

  <div class='d-grid'>
    <button class='btn btn-primary action-btn' type='button' on:click={onConvertHandler}>{btnText}</button>
  </div>
</section>

<style>
.convert-section {
  padding: 20px;
  border-radius: 5px;
  border: 1px solid rgb(173, 187, 218, .3);
}

.header {
  margin-bottom: 10px;
}

.convert-textarea-wrapper {
  margin-bottom: 10px;
}

.convert-textarea {
  min-height: 200px;
}

.action-btn {
  background-color: rgba(61, 82, 160, .9);
  border-color: rgba(61, 82, 160, .9);
}

.action-btn:hover {
  background-color: #3D52A0;
  border-color: #3D52A0;
}  
</style>
