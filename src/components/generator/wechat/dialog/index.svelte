<script>
  import { t } from 'svelte-i18n';
  import MobileAppGenerator from '../../mobile-app/index.svelte';
  import WechatAppearance from './appearance/index.svelte';
  import ContentForm from './content-form/index.svelte';
  import WechatDialogLayout from './layout/index.svelte';
  import Trigger from '../../components/preview/trigger/index.svelte';
  import ClearDialog from './clear-dialog/index.svelte';

  const onPreviewBeforeAppend = (copyNode, target) =>{
    const copyContent = copyNode.querySelector('.wechat-message-wrapper');

    copyContent.style.marginTop = `-${target.querySelector('.wechat-content').scrollTop}px`;
  };
</script>

<MobileAppGenerator
  tabs={[
    {
      key: 'app-appearance',
      label: $t('App Appearance'),
      component: WechatAppearance,
    },
    {
      key: 'content',
      label: $t('Content'),
      component: ContentForm,
    }
  ]}
  className='wechat-dialog-wrapper'
  simulatorId='wechatDialog'
  onPreviewBeforeAppend={onPreviewBeforeAppend}
>
  <div slot='action' class='action-bar layout-start-center'>
    <Trigger />

    <ClearDialog />
  </div>

  <svelte:fragment slot='content'>
    <WechatDialogLayout />
  </svelte:fragment>
</MobileAppGenerator>

<style lang='scss' global>
  .wechat-dialog-wrapper {
    .action-bar {
      margin-bottom: 20px;

      & > * {
        max-width: 120px;

        &:not(:first-child) {
          margin-left: 10px;
        }
      }
    }
  }

  .hide-node {
    .wechat-message-delete-wrapper {
      display: none;
    }
  }
</style>
