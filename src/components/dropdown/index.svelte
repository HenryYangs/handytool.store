<script>
  import { onMount } from 'svelte';
  import { Dropdown } from 'bootstrap';

  export let id;
  export let triggerText = '';
  export let triggerStyle = '';
  export let dropdownList = [];
  export let btnTrigger = true;
  export let iconTrigger = false;
  export let iconCategory = '';
  export let iconName = '';

  onMount(() => {
    setTimeout(() => {
      const dropdown = document.querySelector(`#${id}`);

      dropdown && new Dropdown(dropdown);
    }, 100);
  });
</script>

<div class='dropdown'>
  {#if btnTrigger}
    <button
      id={id}
      class='btn btn-secondary dropdown-toggle dropdown-trigger'
      type='button'
      data-bs-toggle='dropdown'
      aria-expanded='false'
      style={triggerStyle}
    >
      {triggerText}
    </button>
  {:else if iconTrigger}
    <i
      class={`iconfont-${iconCategory} icon-${iconCategory}-${iconName} dropdown-trigger icon-trigger`}
      style={triggerStyle}
      data-bs-toggle='dropdown'
      aria-expanded='false'>
    </i>
  {/if}

  <ul class='dropdown-menu'>
    {#each dropdownList as item}
      <li>
        <a
          class='dropdown-item'
          href='javascript:;'
          on:click={item.onClick}
          style={item.style}
        >{item.text}</a>
      </li>
    {/each}
  </ul>
</div>

<style>
.icon-trigger {
  cursor: pointer;
}
</style>
