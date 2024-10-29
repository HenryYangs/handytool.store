<script>
  import LayoutMessage from '../layout/index.svelte';
  import imageMsgContainer from '../../../../../../../assets/images/app/wechat/dialog/image-msg-container.png'
</script>

<LayoutMessage
  {...$$props}
  className='wechat-message-image-wrapper'
>
  <svelte:fragment slot='message'>
    <div class='message-image-wrapper'>
      <img src={imageMsgContainer} alt='message-container' class='message-container'
        style={`${$$props.isMe ? '' : 'transform: scaleX(-1);'}`}
      />
      <img src={$$props.image} alt='img-message' class='message-image' />
    </div>
  </svelte:fragment>
</LayoutMessage>

<style lang='scss' global>
  .wechat-message-image-wrapper {
    .message-container {
      position: absolute;
      width: 104px;
      height: 104px;
    }

    .message-image-wrapper {
      position: relative;
      width: 102px;
      height: 102px;
    }

    .message-image {
      width: 104px;
      height: 104px;
    }
  }
</style>
