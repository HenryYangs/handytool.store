<script>
  import { t } from 'svelte-i18n';
  import MobileAppGenerator from '../../mobile-app/index.svelte';
  import WechatAppearance from '../appearance/index.svelte';
  import ContentForm from './content-form/index.svelte';
  import WechatHeader from '../header/index.svelte';
  import WechatFooter from './footer/index.svelte';
  import Message from './message/index.svelte';
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
>
  <div slot='content' class='wechat-dialog-wrapper'>
    <WechatHeader />

    <div class='wechat-content'>
      <Message />
    </div>

    <WechatFooter />
  </div>
</MobileAppGenerator>

<style lang='scss' global>
  .wechat-dialog-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #E6E6E6;

    .wechat-content {
      flex: 1;
      overflow: scroll;
    }
  }
</style>
