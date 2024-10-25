<script>
  import LayoutMessage from '../layout/index.svelte';
  import Arrow from '../arrow/index.svelte';
</script>

<LayoutMessage
  {...$$props}
  className='wechat-message-text-wrapper'
>
  <svelte:fragment slot='message'>
    <em
      class='message'
      style={`background-color: var(${$$props.isMe ? '--wechat-dialog-my-msg-background' : '--white'})`}
    >{$$props.content}</em>
    
    <Arrow isMe={$$props.isMe} />
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
