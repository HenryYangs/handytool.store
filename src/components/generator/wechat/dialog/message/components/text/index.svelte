<script>
  import LayoutMessage from '../layout/index.svelte';
</script>

<LayoutMessage
  {...$$props}
  className='wechat-message-text-wrapper'
>
  <svelte:fragment slot='message'>
    <em
      class='message'
      style={`background-color: var(${$$props.isMe ? '--wechat-dialog-my-msg-background' : '--wechat-dialog-other-msg-background'})`}
    >{$$props.content}</em>
    <i
      class='iconfont-tools icon-tools-triangle-right icon-msg-arrow'
      style={`
        color: var(${$$props.isMe ? '--wechat-dialog-my-msg-background' : '--wechat-dialog-other-msg-background'});
        ${$$props.isMe ? 'right: -14px;' : 'left: -14px;'}
        ${$$props.isMe ? '' : 'transform: rotate(180deg);'}
      `}
    ></i>
  </svelte:fragment>
</LayoutMessage>

<style lang='scss' global>
  .wechat-message-text-wrapper {
    .message {
      padding: 20px;
      font-size: 28px;
      font-weight: normal;
      word-wrap: break-word;
      word-break: break-all;
      border-radius: 10px;
      line-height: 1.2;
    }
  }
</style>
