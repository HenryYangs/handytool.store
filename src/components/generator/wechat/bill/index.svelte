<script>
  import { t } from 'svelte-i18n';
  import MobileAppGenerator from '../../mobile-app/index.svelte';
  import ContentForm from './content-form/index.svelte';
  import Trigger from '../../components/preview/trigger/index.svelte';
  import BillUI from './ui/index.svelte';
</script>

<MobileAppGenerator
  tabs={[
    {
      key: 'content',
      label: $t('Content'),
      component: ContentForm,
    }
  ]}
  className='wechat-bill-wrapper'
  simulatorId='wechatBill'
>
  <svelte:fragment slot='action'>
    <Trigger />
  </svelte:fragment>

  <svelte:fragment slot='content'>
    <BillUI />
  </svelte:fragment>
</MobileAppGenerator>

<style lang='scss' global></style> 
