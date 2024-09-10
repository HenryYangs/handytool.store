<script>
  import IconCopy from '../../../components/icon/copy/index.svelte';

  export let unitList = [];

  $: inputValue = '';
  $: curIdx = 0;
  $: curBaseRatio = unitList[curIdx].ratio;

  const onFromUnitClick = (idx) => {
    curIdx = idx;
  };
</script>

<div class='wrapper'>
  <section class='tool-panel unit-container'>
    <h6>From: {unitList[curIdx].text}</h6>

    <div class='input-group-sm input-wrapper'>
      <input class='form-control' type='number' bind:value={inputValue} />
    </div>

    <div class='tool-panel from-unit-select'>
      {#each unitList as unit, index}
        <button
          class={`from-unit-btn ${curIdx === index ? 'active' : ''}`}
          on:click={() => {
            onFromUnitClick(index);
          }}
        >{unit.text}</button>
      {/each}
    </div>
  </section>

  <section class='tool-panel unit-container'>
    {#each unitList as unit, index}
      <div class='unit-row'>
        <span>{unit.text}</span>

        {#if inputValue !== ''}
          <span>{(unit.ratio / curBaseRatio) * Number(inputValue)}</span>
          <IconCopy id={`unit-panel-copy-${index}`} copyValue={(unit.ratio / curBaseRatio) * Number(inputValue)} />
        {/if}
      </div>
    {/each}
  </section>
</div>

<style>
.wrapper {
  display: flex;
  justify-content: space-between;
}

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
  background-color: #FFF;
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
}

.from-unit-btn:hover {
  background-color: #ccc;
}

.from-unit-btn.active {
  background-color: #3D52A0;
  color: #FFF;
}

.unit-row {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.unit-row span {
  flex: 1;
}
</style>
