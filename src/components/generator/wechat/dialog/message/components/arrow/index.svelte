<script>
  export let isMe = false;
  export let colorIsMe = 'var(--wechat-dialog-my-msg-background)';
  export let colorOther = 'var(--white)';
  export let size = 10;
  export let offset = -7;
</script>

<i
  class='iconfont-tools icon-tools-triangle-right wechat-dialog-icon-msg-arrow'
  style={`
    color: ${isMe ? colorIsMe : colorOther};
    ${isMe ? `right: ${offset}px;` : `left: ${offset}px;`}
    ${isMe ? '' : 'transform: rotate(180deg);'}
    font-size: ${size}px;
  `}
></i>

<style lang='scss' global>
  .wechat-dialog-icon-msg-arrow {
    position: absolute;
    top: 11px;
  }
</style>
