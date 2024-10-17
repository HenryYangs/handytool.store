<script>
  import { BeForm, BeFormItem } from '@brewer/beerui/be-form';
  import BeInput from '@brewer/beerui/be-input';
  import BeTextarea from '@brewer/beerui/be-textarea';
  import BeIcon from '@brewer/beerui/be-icon';
  import { t } from 'svelte-i18n';
  import BeUpload from '@brewer/beerui/be-upload';
  import ExecuteBtn from '../../../../../components/execute-btn/index.svelte';
  import ICON_EMOJI from '../../../../../assets/images/common/emoji.png';

  export let avatar = '';
  export let userName = '';
  export let chatContent = '';
  export let redPacketTitle = '';
  export let transferAmount = '';
  export let voiceMsgTime = '10';
  export let imageMessage = '';
</script>

<section class='dialog-user-wrapper'>
  <div class='dialog-user-info-wrapper layout-start'>
    <div class='dialog-user-avatar'>
      <BeUpload
        bind:value={avatar}
        style='width: 80px; height: 80px;'
        accept='image/*'
        limit={1}
        listType='picture-card'
      >
        <div class='upload-card avatar-upload-card'>
          <BeIcon name='add' width='40' height='40' />
        </div>
      </BeUpload>

      <ExecuteBtn text={$t('Random Avatar')} buttonProps={{ size: 'mini' }} className='random-avatar' />
    </div>

    <div class='dialog-user-info'>
      <BeForm labelWidth='120px'>
        <BeFormItem label={$t('User Name')}>
          <div class='layout-start'>
            <BeInput bind:value={userName} size='mini' />
            <ExecuteBtn text={$t('Random User Name')} buttonProps={{ size: 'mini' }} className='random-user-name' />
          </div>
        </BeFormItem>

        <BeFormItem label={$t('Chat Content')}>
          <div class='layout-start-end'>
            <BeTextarea bind:value={chatContent} size='mini' class='dialog-user-chat-content' />

            <img src={ICON_EMOJI} alt='emoji' class='dialog-user-emoji' />
          </div>
        </BeFormItem>

        <BeFormItem label={$t('Red Packet Title')}>
          <BeInput bind:value={redPacketTitle} size='mini' />
        </BeFormItem>

        <BeFormItem label={$t('Transfer/Receive Amount')}>
          <BeInput bind:value={transferAmount} size='mini' />
        </BeFormItem>

        <BeFormItem label={$t('Voice Msg Time')}>
          <BeInput bind:value={voiceMsgTime} type='number' min='0' max='60' size='mini' />
        </BeFormItem>

        <BeFormItem label={$t('Image Message')}>
          <BeUpload
            bind:value={imageMessage}
            accept='image/*'
            limit={1}
            listType='picture-card'
          >
            <div class='upload-card'><BeIcon name='add' width='40' height='40' /></div>
          </BeUpload>
        </BeFormItem>
      </BeForm>
    </div>
  </div>

  <div class='dialog-user-action layout-start'>
    <ExecuteBtn text={$t('Add Text Msg')} buttonProps={{ size: 'mini', type: 'default' }} />
    <ExecuteBtn text={$t('Add Image Msg')} buttonProps={{ size: 'mini', type: 'primary' }} />
    <ExecuteBtn text={$t('Add Voice Msg')} buttonProps={{ size: 'mini', type: 'success' }} />
    <ExecuteBtn text={$t('Add Give Red Packet')} buttonProps={{ size: 'mini', type: 'danger' }} />
    <ExecuteBtn text={$t('Add Receive Red Packet')} buttonProps={{ size: 'mini', type: 'danger' }} />
    <ExecuteBtn text={$t('Add Transfer')} buttonProps={{ size: 'mini', type: 'warning' }} />
    <ExecuteBtn text={$t('Add Receive Transfer')} buttonProps={{ size: 'mini', type: 'warning' }} />
    <ExecuteBtn text={$t('Set As Me')} buttonProps={{ size: 'mini', type: 'success' }} />
    <ExecuteBtn text={$t('Delete User')} buttonProps={{ size: 'mini', type: 'danger' }} />
  </div>
</section>

<style lang='scss' global>
  .dialog-user-wrapper {
    padding: 20px 0 10px;
    border-top: 1px solid var(--theme-main-light-color);

    .dialog-user-avatar,
    .avatar-upload-card {
      width: 80px !important;
      height: 80px !important;
    }

    .dialog-user-avatar {
      .be-upload--picture-card {
        width: 80px;
        height: 80px;
      }
    }

    .dialog-user-info {
      flex: 1;
    }

    .random-avatar {
      margin-top: 10px;
    }

    .random-user-name {
      margin-left: 10px;
    }

    .dialog-user-chat-content {
      flex: 1;

      textarea {
        min-height: 100px;
      }
    }

    .dialog-user-emoji {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }

    .dialog-user-action {
      flex-wrap: wrap;

      & > * {
        margin-left: 10px;
        margin-bottom: 10px;
      }
    }
  }
</style>
