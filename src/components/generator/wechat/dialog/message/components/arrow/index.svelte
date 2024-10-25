<script>
  export let isMe = false;
  export let colorIsMe = '--wechat-dialog-my-msg-background';
  export let colorOther = '--white';
  export let size = 20;
  export let offset = -11;
</script>

<i
  class='iconfont-tools icon-tools-triangle-right wechat-dialog-icon-msg-arrow'
  style={`
    color: var(${isMe ? colorIsMe : colorOther});
    ${isMe ? `right: ${offset}px;` : `left: ${offset}px;`}
    ${isMe ? '' : 'transform: rotate(180deg);'}
    font-size: ${size}px;
  `}
></i>

<style lang='scss' global>
  .wechat-dialog-icon-msg-arrow {
    position: absolute;
    top: 22px;
  }
</style>
