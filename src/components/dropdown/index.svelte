<script>
  import { onMount } from 'svelte';
  import { Dropdown } from 'bootstrap';

  export let id;
  export let triggerText = '';
  export let triggerStyle = '';
  export let dropdownList = [];

  onMount(() => {
    setTimeout(() => {
      const dropdown = document.querySelector(`#${id}`);

      dropdown && new Dropdown(dropdown);
    }, 100);
  });
</script>

<div class='dropdown'>
  <button
    class='btn btn-secondary dropdown-toggle dropdown-trigger'
    type='button'
    data-bs-toggle='dropdown'
    aria-expanded='false'
    style={triggerStyle}
  >
    {triggerText}
  </button>

  <ul class='dropdown-menu'>
    {#each dropdownList as item}
      <li><a class='dropdown-item' href='javascript:;' on:click={item.onClick}>{item.text}</a></li>
    {/each}
  </ul>
</div>
