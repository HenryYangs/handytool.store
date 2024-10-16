<script>
  import BeTabs from '@brewer/beerui/be-tabs';
  import BeTabPane from '@brewer/beerui/be-tabs/BeTabPane.svelte';
  import PhoneAppearance from '../mobile-app/phone-appearance/index.svelte';
  import { t } from 'svelte-i18n';

  export let tabs = [];
  export let tabContents = {}; // New prop to hold tab contents

  $: tabList = [
    {
      key: 'phone-appearance',
      label: $t('Phone Appearance')
    }
  ].concat(tabs);
  $: active = tabList.length ? tabList[0].key : '';

  const tabClick = (event) => {
    active = event.detail;
  };
</script>

<main class='content mobile-app-wrapper'>
  <section class='tool-panel generator-part body-left'>
    <BeTabs bind:active items={tabList} on:tabClick={tabClick}>
      <BeTabPane key='phone-appearance' active={active} label={$t('Phone Appearance')}>
        <PhoneAppearance />
      </BeTabPane>

      {#each tabs as item}
        <BeTabPane key={item.label} active={active} {...item}>
          {#if item.key === active}
            <svelte:component this={tabContents[item.key]} />
          {/if}
        </BeTabPane>
      {/each}
    </BeTabs>
  </section>

  <section class='generator-part body-right'>r</section>
</main>

<style lang='scss' global>
  .mobile-app-wrapper {
    display: flex;
    justify-content: space-between;
   
    .generator-part {
      width: calc(50% - 10px);
    }

    .be-form {
      width: 100%;
    }

    .be-form-item {
      margin-bottom: 10px;
    }
  }
</style>
