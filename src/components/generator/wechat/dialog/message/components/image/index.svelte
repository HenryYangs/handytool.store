<script>
  import Delete from '../delete/index.svelte';
  import { useWechatDialogShowUserName } from '../../../../../../../utils/hooks/use-wechat-dialog-show-username';
  import imageMsgContainer from '../../../../../../../assets/images/app/wechat/dialog/image-msg-container.png'

  export let image = '';
  export let isMe = false;
  export let userName = '';
  export let avatar = '';
  export let onDelete = () => {};

  const showUserName = useWechatDialogShowUserName();
</script>

<div class='wechat-message-image-wrapper layout-end-start' style={`${isMe ? '' : 'flex-direction: row-reverse;'}`}>
  <div class='message-main'>
    {#if !isMe && $showUserName}
      <p class='message-username'>{userName}</p>
    {/if}

    <div class='message-body layout-end-start' style={`${isMe ? '' : 'flex-direction: row-reverse;'}`}>
      <Delete onDelete={onDelete} />
    
      <div class='message-wrapper layout-start-center'>
        <div class='message-image-wrapper'>
          <img src={imageMsgContainer} alt='message-container' class='message-container'
            style={`${isMe ? '' : 'transform: scaleX(-1);'}`}
          />
          <img src={image} alt='img-message' class='message-image' />
        </div>
      </div>
    </div>
  </div>

  <img class='avatar' src={avatar} alt={userName} />
</div>

<style lang='scss' global>
  @import '../../../../../../../assets/style/app/wechat/index.scss';

  .wechat-message-image-wrapper {
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

    .message-image-wrapper {
      position: relative;
      width: 204px;
      height: 204px;
    }

    .message-image {
      width: 208px;
      height: 208px;
    }

    .message-container {
      position: absolute;
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
