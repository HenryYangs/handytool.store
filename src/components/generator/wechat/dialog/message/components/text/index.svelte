<script>
  import Delete from '../delete/index.svelte';
  import { EVENTS } from '../../../../../../../constant/events';
  import { useEventListener } from '../../../../../../../utils/hooks/useEventListener';

  export let isMe = false;
  export let content = '';
  export let userName = '';
  export let avatar = '';
  export let onDelete = () => {};

  $: showUserName = false;

  const onShowUserName = (value) => {
    showUserName = value;
  };

  useEventListener(EVENTS.APP.WECHAT.DIALOG.SHOW_USER_NAME, onShowUserName);
</script>

<div class='wechat-message-text-wrapper layout-end-start' style={`${isMe ? '' : 'flex-direction: row-reverse;'}`}>
  <div class='message-main'>
    {#if !isMe && showUserName}
      <p class='message-username'>{userName}</p>
    {/if}

    <div class='message-body layout-end-start' style={`${isMe ? '' : 'flex-direction: row-reverse;'}`}>
      <Delete onDelete={onDelete} />
    
      <div class='message-wrapper layout-start-center'>
        <em
          class='message'
          style={`background-color: var(${isMe ? '--wechat-dialog-my-msg-background' : '--wechat-dialog-other-msg-background'})`}
        >{content}</em>
        <i
          class='iconfont-tools icon-tools-triangle-right icon-msg-arrow'
          style={`
            color: var(${isMe ? '--wechat-dialog-my-msg-background' : '--wechat-dialog-other-msg-background'});
            ${isMe ? 'right: -14px;' : 'left: -14px;'}
            ${isMe ? '' : 'transform: rotate(180deg);'}
          `}
        ></i>
      </div>
    </div>
  </div>

  <img class='avatar' src={avatar} alt={userName} />
</div>

<style lang='scss' global>
  @import '../../../../../../../assets/style/app/wechat/index.scss';

  .wechat-message-text-wrapper {
    .message-main {
      max-width: 65%;
    }

    .message-wrapper {
      position: relative;
      min-height: 80px;
      margin: 0 20px;
    }

    .message-username {
      margin-bottom: 10px;
      padding-left: 20px;
      color: #888;
      font-size: 22px;
    }
    .message {
      padding: 20px;
      font-size: 28px;
      font-weight: normal;
      word-wrap: break-word;
      word-break: break-all;
      border-radius: 10px;
      line-height: 1.2;
    }

    .icon-msg-arrow {
      position: absolute;
      top: 22px;
      font-size: 20px;
    }

    .avatar {
      width: 80px;
      height: 80px;
      border-radius: 10px;
    }
  }
</style>