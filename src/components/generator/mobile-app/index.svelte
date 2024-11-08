<script>
  import BeTabs from '@brewer/beerui/be-tabs';
  import BeTabPane from '@brewer/beerui/be-tabs/BeTabPane.svelte';
  import PhoneAppearance from '../mobile-app/phone-appearance/index.svelte';
  import Preview from '../components/preview/index.svelte';
  import { t } from 'svelte-i18n';
  import { PHONE } from '../../../constant/phone';
  import SimulatorIos from '../../simulator/ios/index.svelte';
  import SimulatorAndroid from '../../simulator/android/index.svelte';
  import { DEVICE_RATIO_IOS } from '../../../constant/phone/device-ratio';

  export let tabs = [];
  export let phone = PHONE.IOS;
  export let className = '';
  export let simulatorId = '';
  export let simulatorHeaderBgColor = '';
  export let simulatorHeaderContentColor = '';
  export let simulatorHeaderWhiteBattery = false;

  export let onPreviewBeforeAppend = (node, target) => {};

  // TODO accept dynamic phone resolution
  const deviceRatio = DEVICE_RATIO_IOS.IPHONE_8;

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
          <div style='display: {item.key === active ? 'block' : 'none'}'>
            <svelte:component this={item.component} />
          </div>
        </BeTabPane>
      {/each}
    </BeTabs>
  </section>

  <section class='generator-part body-right'>
    <svelte:component
      this={phone === PHONE.IOS ? SimulatorIos : SimulatorAndroid}
      className='simulator-wrapper'
      id={simulatorId}
      headerContentColor={simulatorHeaderContentColor}
      useWhiteBattery={simulatorHeaderWhiteBattery}
      headerBgColor={simulatorHeaderBgColor}
    >
      <svelte:fragment slot='content'>
        <slot name='content'></slot>
      </svelte:fragment>
    </svelte:component>
  </section>
</main>

<Preview targetId={simulatorId} deviceRatio={deviceRatio} onBeforeAppend={onPreviewBeforeAppend}/>

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
