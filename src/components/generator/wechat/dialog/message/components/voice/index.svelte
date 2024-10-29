<script>
  import LayoutMessage from '../layout/index.svelte';
  import Arrow from '../arrow/index.svelte';
  const getMsgStyle = () => {
    let calcWidth = ($$props.voice / 60) * 200;

    if (calcWidth < 60) {
      calcWidth = 60;
    }

    if (calcWidth > 200) {
      calcWidth = 200;
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
      padding: 10px;
      font-size: 12px;
      border-radius: 5px;
    }

    .icon-voice {
      margin: 0 5px;
      font-size: 12px;
    }
  }
</style>
