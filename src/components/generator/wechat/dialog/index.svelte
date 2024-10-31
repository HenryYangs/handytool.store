<script>
  import { t } from 'svelte-i18n';
  import Preview from './preview/index.svelte';
  import MobileAppGenerator from '../../mobile-app/index.svelte';
  import WechatAppearance from '../appearance/index.svelte';
  import ContentForm from './content-form/index.svelte';
  import WechatDialogLayout from './layout/index.svelte';
  import ExecuteBtn from '../../../../components/execute-btn/index.svelte';
  import { DEVICE_RATIO_IOS } from '../../../../constant/phone/device-ratio';
  import event from '../../../../utils/event';
  import { EVENTS } from '../../../../constant/events';
  import ClearDialog from './clear-dialog/index.svelte';

  const simulatorId = 'wechatDialog';
  // TODO accept dynamic phone resolution
  const deviceRatio = DEVICE_RATIO_IOS.IPHONE_8;

  const generateImage = () => {
    event.emit(EVENTS.APP.WECHAT.DIALOG.PREVIEW);
  };
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
  className='wechat-dialog-wrapper'
  simulatorId={simulatorId}
>
  <div slot='action' class='action-bar layout-start-center'>
    <ExecuteBtn text={$t('Generate Image')} buttonProps={{ size: 'mini', type: 'success' }} onConfirm={generateImage} />

    <ClearDialog />
  </div>

  <svelte:fragment slot='content'>
    <WechatDialogLayout />
  </svelte:fragment>
</MobileAppGenerator>

<Preview targetId={simulatorId} deviceRatio={deviceRatio} />

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
