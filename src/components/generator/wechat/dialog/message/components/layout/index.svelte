<script>
  import Delete from '../delete/index.svelte';
  import { useWechatDialogShowUserName } from '../../../../../../../utils/hooks/use-wechat-dialog-show-username';

  export let isMe = false;
  export let userName = '';
  export let avatar = '';
  export let className = '';
  export let msgStyle = '';
  export let onDelete = () => {};

  const showUserName = useWechatDialogShowUserName();
</script>

<div class={['wechat-message-layout-wrapper layout-end-start', className].join(' ')} style={`${isMe ? '' : 'flex-direction: row-reverse;'}`}>
  <div class='message-main'>
    {#if !isMe && $showUserName && userName}
      <p class='message-username'>{userName}</p>
    {/if}

    <div class='layout-end-start' style={`${isMe ? '' : 'flex-direction: row-reverse;'}`}>
      <Delete onDelete={onDelete} />
    
      <div class='message-wrapper layout-start-center' style={msgStyle}>
        <slot name='message' />
      </div>
    </div>
  </div>

  <img class='avatar' src={avatar} alt={userName} />
</div>

<style lang='scss' global>
  .wechat-message-layout-wrapper {
    .message-main {
      max-width: 65%;
    }

    .message-wrapper {
      position: relative;
      min-height: 40px;
      margin: 0 10px;
    }

    .message-username {
      margin-bottom: 5px;
      padding-left: 10px;
      color: #888;
      font-size: 11px;
    }

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 5px;
    }
  }
</style>
