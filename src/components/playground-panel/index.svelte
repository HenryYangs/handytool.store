<script>
  import { t } from 'svelte-i18n';
  import BeTextarea from '@brewer/beerui/be-textarea';
  import BeButton from '@brewer/beerui/be-button';

  export let value;
  export let actions = [];
  export let onValueChange = (result) => {};

  const countInRow = 7;
  const actionRow = new Array(Math.ceil(actions.length / countInRow)).fill(1).map((_, index) => index);

  $: activeId = '';

  const onAction = (actionItem) => {
    if (!value || !actionItem.callback) return;

    const result = actionItem.callback(value);

    onValueChange(result);

    activeId = actionItem.text;
  }
</script>

<div class='tool-panel playground-panel-wrapper'>
  <slot name='header' />

  <div class=''>
    <BeTextarea
      bind:value
    ></BeTextarea>
  </div>

  <div class='actions'>
    {#each actionRow as row}
      <div class='action-row'>
        {#each actions.slice(row * countInRow, row * countInRow + countInRow) as action}
          <BeButton
            type='default'
            class='btn-outline-dark action-item'
            on:click={() => onAction(action)}
          >
            {$t(action.text)}
          </BeButton>
        {/each}
      </div>
    {/each}
  </div>
</div>

<style global lang='scss'>
  .playground-panel-wrapper {
    .actions {
      margin-top: 20px;
    }
    
    .action-row {
      display: flex;
      flex-wrap: wrap;
    }
    
    .action-row + .action-row {
      margin-top: 10px;
    }
    
    .action-item {
      width: calc((100% - 60px) / 7);
      padding-left: 5px;
      padding-right: 5px;
    }
    
    .action-item + .action-item {
      margin-left: 10px;
    }
  }
</style>
