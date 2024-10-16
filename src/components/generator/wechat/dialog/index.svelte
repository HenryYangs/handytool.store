<script>
  import { t } from 'svelte-i18n';
  import MobileAppGenerator from '../../mobile-app/index.svelte';
  import WechatAppearance from '../appearance/index.svelte';
  import ContentForm from './content-form/index.svelte';
</script>

<MobileAppGenerator
  tabs={[
    {
      key: 'app-appearance',
      label: $t('App Appearance')
    },
    {
      key: 'content',
      label: $t('Content')
    }
  ]}
  tabContents={{
    'app-appearance': WechatAppearance,
    content: ContentForm
  }}
></MobileAppGenerator>

<style>

</style>
