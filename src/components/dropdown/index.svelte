<script>
  import clickOutside from '../../utils/click-outside';
  import BeButton from '@brewer/beerui/be-button';

  export let id;
  export let triggerText = '';
  export let triggerStyle = '';
  export let dropdownList = [];
  export let btnTrigger = true;
  export let iconTrigger = false;
  export let iconCategory = '';
  export let iconName = '';

  const idDropdown = `${id}_dropdown`;

  $: showDropdownList = false;
  $: if (showDropdownList) {
    clickOutside(document.getElementById(idDropdown), () => {
      showDropdownList = false;
    })
  }

  const onTriggerClick = () => {
    showDropdownList = !showDropdownList;
  }
</script>

<div class='dropdown-wrapper'>
  {#if btnTrigger}
    <BeButton
      circle
      type='primary'
      nativeType='button'
      style={triggerStyle}
      on:click={onTriggerClick}
    >
      {triggerText}
    </BeButton>
  {:else if iconTrigger}
    <i
      class={`iconfont-${iconCategory} icon-${iconCategory}-${iconName}`}
      style={triggerStyle}
      aria-expanded='false'
      on:click={onTriggerClick}
    >
    </i>
  {/if}

  <ul class='dropdown-menu' style={`display: ${showDropdownList ? 'block' : 'none'}`} id={idDropdown}>
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

<style global lang='scss'>
  .dropdown-wrapper {
    position: relative;

    .icon-trigger {
      cursor: pointer;
    }
    
    .dropdown-menu {
      position: absolute;
      left: 50%;
      min-width: 100px;
      transform: translateX(-50%);
      background-color: var(--white);
      box-shadow: 0 5px 10px rgba(61, 82, 160, 0.1);;
    
      li {
        padding: 10px 15px;
        cursor: pointer;
        transition: all .2s linear;
        text-align: center;
    
        &:hover {
          background-color: rgba(120, 120, 120, 0.1);
        }
      }
    
      .dropdown-item {
        color: var(--theme-secondary-dark-color);
      }
    }
  }
</style>
