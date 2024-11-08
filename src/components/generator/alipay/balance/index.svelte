<script>
  import { t } from 'svelte-i18n';
  import MobileAppGenerator from '../../mobile-app/index.svelte';
  import Trigger from '../../components/preview/trigger/index.svelte';
  import BalanceUI from './ui/index.svelte';
  import ContentForm from './content-form/index.svelte';
</script>

<MobileAppGenerator
  tabs={[
    {
      key: 'content',
      label: $t('Content'),
      component: ContentForm,
    }
  ]}
  className='alipay-balance-wrapper'
  simulatorId='alipayBalance'
  simulatorHeaderBgColor='var(--alipay-main-color)'
  simulatorHeaderContentColor='var(--white)'
  simulatorHeaderWhiteBattery
>
  <svelte:fragment slot='action'>
    <Trigger />
  </svelte:fragment>

  <svelte:fragment slot='content'>
    <BalanceUI />
  </svelte:fragment>
</MobileAppGenerator>
