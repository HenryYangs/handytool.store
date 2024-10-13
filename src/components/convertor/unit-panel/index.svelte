<script>
  import { t } from 'svelte-i18n';
  import IconCopy from '../../../components/icon/copy/index.svelte';
  import BeInput from '@brewer/beerui/be-input';

  export let unitList = [];

  $: inputValue = '';
  $: curIdx = 0;
  $: curBaseRatio = unitList[curIdx].ratio;

  const onFromUnitClick = (idx) => {
    curIdx = idx;
  };
</script>

<div class='unit-panel-wrapper'>
  <section class='tool-panel unit-container'>
    <h6>{$t('fromUnitLabel')}: {$t(unitList[curIdx].text)}</h6>

    <div class='input-wrapper'>
      <BeInput type='number' bind:value={inputValue} size='small' />
    </div>

    <div class='tool-panel from-unit-select'>
      {#each unitList as unit, index}
        <div
          class={`from-unit-btn ${curIdx === index ? 'active' : ''}`}
          on:click={() => {
            onFromUnitClick(index);
          }}
        >{$t(unit.text)}</div>
      {/each}
    </div>
  </section>

  <section class='tool-panel unit-container'>
    {#each unitList as unit, index}
      <div class='unit-row'>
        <span>{$t(unit.text)}</span>

        {#if inputValue !== ''}
          <span>{(unit.ratio / curBaseRatio) * Number(inputValue)}</span>
          <IconCopy id={`unit-panel-copy-${index}`} copyValue={(unit.ratio / curBaseRatio) * Number(inputValue)} />
        {/if}
      </div>
    {/each}
  </section>
</div>

<style global lang='scss'>
.unit-panel-wrapper {
  display: flex;
  justify-content: space-between;

  .unit-container {
    width: calc(50% - 10px);
    max-height: 500px;
    overflow-y: scroll;
  }

  .input-wrapper {
    margin-top: 10px;
  }

  .from-unit-select {
    width: 100%;
    margin-top: 10px;
    background-color: var(--white);
    max-height: 300px;
    overflow-y: scroll;
    padding: 10px 15px;
    border: 1px solid rgba(173, 187, 218, 0.3);
  }

  .from-unit-btn {
    display: block;
    width: 100%;
    background-color: transparent;
    border: none;
    text-align: start;
    padding: 6px 4px;
    cursor: pointer;
  }

  .from-unit-btn:hover {
    background-color: #ccc;
  }

  .from-unit-btn.active {
    background-color: var(--theme-main-color);
    color: var(--white);
  }

  .unit-row {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .unit-row span {
    flex: 1;
    line-height: 1.5;
  }
}
</style>
