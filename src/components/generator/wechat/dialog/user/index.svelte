<script>
  import { BeForm, BeFormItem } from '@brewer/beerui/be-form';
  import BeInput from '@brewer/beerui/be-input';
  import BeTextarea from '@brewer/beerui/be-textarea';
  import BeIcon from '@brewer/beerui/be-icon';
  import { t } from 'svelte-i18n';
  import BeUpload from '@brewer/beerui/be-upload';
  import ExecuteBtn from '../../../../../components/execute-btn/index.svelte';
  import ICON_EMOJI from '../../../../../assets/images/common/emoji.png';
  import { fileToBase64 } from '../../../../../utils/base64';
  import event from '../../../../../utils/event';
  import { EVENTS } from '../../../../../constant/events';
  import { WECHAT_DIALOG_MESSAGE_TYPE } from '../../../../../constant/app/wechat/dialog';
  import { OPERATION_TYPE } from '../../../../../constant/common/operation';
  import { nanoid } from 'nanoid';

  export let avatar = '';
  export let userName = '';
  export let chatContent = '';
  export let redPacketTitle = $t('Red Packet Wishes');
  export let redPacketGiver = '';
  export let transferAmount = '';
  export let voiceMsgTime = '';
  export let imageMessage = '';
  export let isMe = false;

  export let onUpdate = (key, value) => {};
  export let onDeleteUser = () => {};

  const beforeUploadAvatar = async (file) => {
    avatar = await fileToBase64(file.raw);
    onUpdate('avatar', avatar);
  };

  const beforeUploadImageMsg = async (file) => {
    imageMessage = await fileToBase64(file.raw);
    onUpdate('imageMessage', imageMessage);
  };

  const getMessage = (props) => {
    return {
      msg: {
        ...props,
        isMe,
        avatar,
        userName,
      },
      operate: OPERATION_TYPE.ADD,
    };
  };

  const addTextMsg = () => {
    if (chatContent) {
      event.emit(EVENTS.APP.WECHAT.DIALOG.UPDATE_MESSAGE, getMessage({
        type: WECHAT_DIALOG_MESSAGE_TYPE.TEXT,
        content: chatContent,
      }));
    } else {
      alert($t('Please enter chat content'));
    }
  };
  const addImageMsg = () => {
    if (imageMessage) {
      event.emit(EVENTS.APP.WECHAT.DIALOG.UPDATE_MESSAGE, getMessage({
        type: WECHAT_DIALOG_MESSAGE_TYPE.IMAGE,
        image: imageMessage,
      }));
    } else {
      alert($t('Please upload image'));
    }
  };
  const addVoiceMsg = () => {
    if (voiceMsgTime || Number(voiceMsgTime) > 0) {
      event.emit(EVENTS.APP.WECHAT.DIALOG.UPDATE_MESSAGE, getMessage({
        type: WECHAT_DIALOG_MESSAGE_TYPE.VOICE,
        voice: voiceMsgTime,
      }));
    } else {
      alert($t('Please enter voice message time'));
    }
  };
  const addGiveRedPacket = () => {
    if (redPacketTitle) {
      event.emit(EVENTS.APP.WECHAT.DIALOG.UPDATE_MESSAGE, getMessage({
        type: WECHAT_DIALOG_MESSAGE_TYPE.SEND_RED_PACKET,
        redPacketTitle,
      }));
    } else {
      alert($t('Please enter red packet title'));
    }
  };
  const addReceiveRedPacket = () => {
    if (redPacketGiver) {
      event.emit(EVENTS.APP.WECHAT.DIALOG.UPDATE_MESSAGE, getMessage({
        type: WECHAT_DIALOG_MESSAGE_TYPE.RECEIVE_RED_PACKET,
        redPacketGiver,
      }));
    } else {
      alert($t('Please enter red packet giver'));
    }
  };
  const addTransfer = () => {
    if (transferAmount) {
      event.emit(EVENTS.APP.WECHAT.DIALOG.UPDATE_MESSAGE, getMessage({
        type: WECHAT_DIALOG_MESSAGE_TYPE.SEND_TRANSFER,
        transferAmount,
      }));
    } else {
      alert($t('Please enter transfer amount'));
    }
  };
  const addReceiveTransfer = () => {
    if (transferAmount) {
      event.emit(EVENTS.APP.WECHAT.DIALOG.UPDATE_MESSAGE, getMessage({
        type: WECHAT_DIALOG_MESSAGE_TYPE.RECEIVE_TRANSFER,
        transferAmount,
      }));
    } else {
      alert($t('Please enter transfer amount'));
    }
  };
  const setAsMe = () => {
    if (isMe) {
      return;
    }

    onUpdate('isMe', true);
  };
  const deleteUser = () => {
    onDeleteUser();
  };

  const randomUserName = () => {
    onUpdate('userName', nanoid(8));
  };
</script>

<section class='dialog-user-wrapper'>
  <div class='dialog-user-info-wrapper layout-start'>
    <BeForm labelWidth='120px' class='dialog-user-info'>
      <BeFormItem label={$t('Avatar')}>
        <div class='dialog-user-avatar'>
          <BeUpload
            bind:value={avatar}
            autoUpload={false}
            style='width: 80px; height: 80px;'
            accept='image/*'
            limit={1}
            listType='picture-card'
            onChange={beforeUploadAvatar}
          >
            <div class='upload-card avatar-upload-card'>
              <BeIcon name='add' width='40' height='40' />
            </div>
          </BeUpload>

          <ExecuteBtn text={$t('Random Avatar')} buttonProps={{ size: 'mini' }} className='random-avatar' btnStyle='width: 120px;' />
        </div>
      </BeFormItem>

      <BeFormItem label={$t('User Name')}>
        <div class='layout-start'>
          <BeInput bind:value={userName} size='mini' on:input={(e) => onUpdate('userName', e.target.value)} />
          <ExecuteBtn text={$t('Random User Name')} buttonProps={{ size: 'mini' }} className='random-user-name' onConfirm={randomUserName} />
        </div>
      </BeFormItem>

      <BeFormItem label={$t('Chat Content')}>
        <div class='layout-start-end'>
          <BeTextarea bind:value={chatContent} size='mini' class='dialog-user-chat-content' on:input={(e) => onUpdate('chatContent', e.target.value)} />

          <img src={ICON_EMOJI} alt='emoji' class='dialog-user-emoji' />
        </div>
      </BeFormItem>

      <BeFormItem label={$t('Red Packet Title')}>
        <BeInput bind:value={redPacketTitle} size='mini' on:input={(e) => onUpdate('redPacketTitle', e.target.value)} />
      </BeFormItem>

      <BeFormItem label={$t('Red Packet Giver')}>
        <BeInput bind:value={redPacketGiver} size='mini' on:input={(e) => onUpdate('redPacketGiver', e.target.value)} />
      </BeFormItem>

      <BeFormItem label={$t('Transfer/Receive Amount')}>
        <BeInput bind:value={transferAmount} type='number' size='mini' on:input={(e) => onUpdate('transferAmount', e.target.value)} />
      </BeFormItem>

      <BeFormItem label={$t('Voice Msg Time')}>
        <BeInput bind:value={voiceMsgTime} type='number' min='0' max='60' size='mini' on:input={(e) => onUpdate('voiceMsgTime', e.target.value)} />
      </BeFormItem>

      <BeFormItem label={$t('Image Message')}>
        <BeUpload
          bind:value={imageMessage}
          autoUpload={false}
          accept='image/*'
          limit={1}
          listType='picture-card'
          onChange={beforeUploadImageMsg}
        >
          <div class='upload-card'><BeIcon name='add' width='40' height='40' /></div>
        </BeUpload>
      </BeFormItem>
    </BeForm>
  </div>

  <div class='dialog-user-action layout-start'>
    <ExecuteBtn text={$t('Add Text Msg')} buttonProps={{ size: 'mini', type: 'default' }} onConfirm={addTextMsg} />
    <ExecuteBtn text={$t('Add Image Msg')} buttonProps={{ size: 'mini', type: 'primary' }} onConfirm={addImageMsg} />
    <ExecuteBtn text={$t('Add Voice Msg')} buttonProps={{ size: 'mini', type: 'success' }} onConfirm={addVoiceMsg} />
    <ExecuteBtn text={$t('Add Give Red Packet')} buttonProps={{ size: 'mini', type: 'danger' }} onConfirm={addGiveRedPacket} />
    <ExecuteBtn text={$t('Add Receive Red Packet')} buttonProps={{ size: 'mini', type: 'danger' }} onConfirm={addReceiveRedPacket} />
    <ExecuteBtn text={$t('Add Transfer')} buttonProps={{ size: 'mini', type: 'warning' }} onConfirm={addTransfer} />
    <ExecuteBtn text={$t('Add Receive Transfer')} buttonProps={{ size: 'mini', type: 'warning' }} onConfirm={addReceiveTransfer} />
    <ExecuteBtn text={$t('Set As Me')} buttonProps={{ size: 'mini', type: isMe ? 'success' : '' }} onConfirm={setAsMe} />
    <ExecuteBtn text={$t('Delete User')} buttonProps={{ size: 'mini', type: 'danger' }} onConfirm={deleteUser} />
  </div>
</section>

<style lang='scss' global>
  .dialog-user-wrapper {
    padding: 20px 0 10px;
    border-top: 1px solid var(--theme-main-light-color);

    .avatar-upload-card {
      width: 80px !important;
      height: 80px !important;
    }

    .be-upload-list {
      position: absolute;
    }

    .dialog-user-avatar {
      .be-upload--picture-card,
      .be-upload-list__item {
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
