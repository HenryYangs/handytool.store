<script>
  import LayoutMessage from '../layout/index.svelte';
  import Arrow from '../arrow/index.svelte';
  const getMsgStyle = () => {
    let calcWidth = ($$props.voice / 60) * 400;

    if (calcWidth < 120) {
      calcWidth = 120;
    }

    if (calcWidth > 400) {
      calcWidth = 400;
    }

    return `width: ${calcWidth}px`;
  };
</script>

<LayoutMessage
  {...$$props}
  className='wechat-message-voice-wrapper'
  msgStyle={getMsgStyle()}
>
  <svelte:fragment slot='message'>
    <div
      class='voice-message-wrapper layout-end-center'
      style={`
        background-color: var(${$$props.isMe ? '--wechat-dialog-my-msg-background' : '--white'});
        ${$$props.isMe ? '' : 'flex-direction: row-reverse;'}
      `}>
      <span>{$$props.voice}''</span>
      <i
        class='iconfont-tools icon-tools-voice icon-voice'
        style={`
          transform: rotate(${$$props.isMe ? '180deg' : '0deg'});
        `}
      ></i>
    </div>

    <Arrow isMe={$$props.isMe} />
  </svelte:fragment>
</LayoutMessage>

<style lang='scss' global>
  .wechat-message-voice-wrapper {
    .voice-message-wrapper {
      width: 100%;
      padding: 20px;
      font-size: 25px;
      border-radius: 10px;
    }

    .icon-voice {
      margin: 0 10px;
      font-size: 25px;
    }
  }
</style>
