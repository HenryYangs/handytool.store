<script>
  import { TABS } from '../../config';

  export let tabIdx = 0;
  export let onTabClick;

</script>
<div class='tab-wrapper'>
  <div class='tab-inner-wrapper'>
    {#each TABS as tab, index}
      <button
        class={`tab-item ${tab.id === TABS[tabIdx].id ? 'active' : ''}`}
        on:click={() => { onTabClick && onTabClick(index) }}
      >{tab.text}</button>
    {/each}
  </div>
</div>

<style>
.tab-wrapper {
  text-align: center;
}

.tab-inner-wrapper {
  display: inline-block;
  text-align: center;
  padding: 12px 6px;
  border-radius: 99px;
  background-color: #FFF;
  box-shadow: 3px 10px 40px rgba(24, 29, 32, 0.05);
}

.tab-item {
  display: inline-block;
  padding: 12px;
  margin: 0 6px;
  cursor: pointer;
  border: none;
  background-color: transparent;
}

.tab-item.active {
  border-radius: 99px;
  background-color: #3D52A0;
  color: #FFF;
}
</style>
