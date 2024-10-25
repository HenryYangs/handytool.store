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
      min-height: 80px;
      margin: 0 20px;
    }

    .message-username {
      margin-bottom: 10px;
      padding-left: 20px;
      color: #888;
      font-size: 22px;
    }

    .avatar {
      width: 80px;
      height: 80px;
      border-radius: 10px;
    }
  }
</style>
