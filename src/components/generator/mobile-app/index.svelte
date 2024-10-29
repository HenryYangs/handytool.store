<script>
  import BeTabs from '@brewer/beerui/be-tabs';
  import BeTabPane from '@brewer/beerui/be-tabs/BeTabPane.svelte';
  import PhoneAppearance from '../mobile-app/phone-appearance/index.svelte';
  import { t } from 'svelte-i18n';
  import { PHONE } from '../../../constant/phone';
  import SimulatorIos from '../../simulator/ios/index.svelte';
  import SimulatorAndroid from '../../simulator/android/index.svelte';

  export let tabs = [];
  export let tabContents = {}; // New prop to hold tab contents
  export let phone = PHONE.IOS;
  export let className = '';
  export let simulatorId = '';

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

<main class={['mobile-app-wrapper layout-start', className].join(' ')}>
  <section class='tool-panel generator-part body-left'>
    <slot name='action'></slot>

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

  <section class='generator-part body-right'>
    <svelte:component
      this={phone === PHONE.IOS ? SimulatorIos : SimulatorAndroid} className='simulator-wrapper'
      id={simulatorId}
    >
      <svelte:fragment slot='content'>
        <slot name='content'></slot>
      </svelte:fragment>
    </svelte:component>
  </section>
</main>

<style lang='scss' global>
  .mobile-app-wrapper {   
    .generator-part {
      width: calc(50% - 10px);
    }

    .body-right {
      position: relative;
      min-height: 750px;
    }

    .simulator-wrapper {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    .be-form {
      width: 100%;
    }

    .be-form-item {
      margin-bottom: 10px;
    }
  }
</style>
