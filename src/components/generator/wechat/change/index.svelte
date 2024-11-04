<script>
  import { t } from 'svelte-i18n';
  import MobileAppGenerator from '../../mobile-app/index.svelte';
  import ContentForm from './content-form/index.svelte';
  import ChangeUI from './ui/index.svelte';
</script>

<MobileAppGenerator
  tabs={[
    {
      key: 'content',
      label: $t('Content'),
      component: ContentForm,
    }
  ]}
  className='wechat-change-wrapper'
>
  <svelte:fragment slot='content'>
    <ChangeUI />
  </svelte:fragment>
</MobileAppGenerator>

<style lang='scss' global>
  .wechat-change-wrapper {
    .simulator-header {
      background-color: var(--white);
    }
  }
</style>
