<script>
  import { t } from 'svelte-i18n';

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

<div class='tool-panel'>
  <slot name='header' />

  <div class='input-group'>
    <textarea
      class='form-control common-textarea'
      aria-label='playground panel textarea'
      bind:value
    ></textarea>
  </div>

  <div class='actions'>
    {#each actionRow as row}
      <div class='action-row'>
        {#each actions.slice(row * countInRow, row * countInRow + countInRow) as action}
          <button
            class={`btn ${activeId === action.text ? 'btn-dark' : 'btn-outline-dark'} action-item`}
            on:click={() => onAction(action)}
          >
            {$t(action.text)}
          </button>
        {/each}
      </div>
    {/each}
  </div>
</div>

<style>
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
</style>
