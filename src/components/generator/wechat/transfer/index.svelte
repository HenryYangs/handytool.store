<script>
  import { t } from 'svelte-i18n';
  import MobileAppGenerator from '../../mobile-app/index.svelte';
  import ContentForm from './content-form/index.svelte';
  import Trigger from '../../components/preview/trigger/index.svelte';
  import TransferUI from './ui/index.svelte';
</script>

<MobileAppGenerator
  tabs={[
    {
      key: 'content',
      label: $t('Content'),
      component: ContentForm,
    }
  ]}
  className='wechat-transfer-wrapper'
  simulatorId='wechatTransfer'
>
  <svelte:fragment slot='action'>
    <Trigger />
  </svelte:fragment>

  <svelte:fragment slot='content'>
    <TransferUI />
  </svelte:fragment>
</MobileAppGenerator>

<style lang='scss' global>
  .wechat-transfer-wrapper {
    .simulator-header {
      background-color: var(--white);
    }
  }

  .hide-node {
    .simulator-header {
      background-color: var(--white);
    }
  }
</style>
