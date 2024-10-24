<script>
  import Delete from '../delete/index.svelte';
  import { EVENTS } from '../../../../../../../constant/events';
  import { useEventListener } from '../../../../../../../utils/hooks/useEventListener';

  export let isMe = false;
  export let content = '';
  export let userName = '';
  export let avatar = '';

  $: showUserName = false;

  const onShowUserName = (value) => {
    showUserName = value;
  };

  useEventListener(EVENTS.APP.WECHAT.DIALOG.SHOW_USER_NAME, onShowUserName);

  const onDelete = () => {

  };
</script>

<div class={`wechat-message-text-wrapper layout-${isMe ? 'end-' : ''}start`}>
  <Delete onDelete={onDelete} />

  <div class='message-wrapper layout-start-center'>
    <em class='message'>{content}</em>
    <i class='iconfont-tools icon-tools-triangle-right icon-msg-arrow'></i>
  </div>

  <img class='avatar' src={avatar} alt={userName} />
</div>

<style lang='scss' global>
  @import '../../../../../../../assets/style/app/wechat/index.scss';

  .wechat-message-text-wrapper {
    .message-wrapper {
      position: relative;
      max-width: 65%;
      min-height: 80px;
      margin: 0 20px;
    }

    .message {
      padding: 20px;
      font-size: 28px;
      font-weight: normal;
      word-wrap: break-word;
      word-break: break-all;
      border-radius: 10px;
      background-color: var(--wechat-dialog-my-msg-background);
      line-height: 1.2;
    }

    .icon-msg-arrow {
      position: absolute;
      right: -14px;
      top: 22px;
      font-size: 20px;
      color: var(--wechat-dialog-my-msg-background);
    }

    .avatar {
      width: 80px;
      height: 80px;
      border-radius: 10px;
    }
  }
</style>