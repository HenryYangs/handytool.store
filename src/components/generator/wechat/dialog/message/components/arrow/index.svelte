<script>
  export let isMe = false;
</script>

<i
  class='iconfont-tools icon-tools-triangle-right wechat-dialog-icon-msg-arrow'
  style={`
    color: var(${isMe ? '--wechat-dialog-my-msg-background' : '--wechat-dialog-other-msg-background'});
    ${isMe ? 'right: -14px;' : 'left: -14px;'}
    ${isMe ? '' : 'transform: rotate(180deg);'}
  `}
></i>

<style lang='scss' global>
  .wechat-dialog-icon-msg-arrow {
    position: absolute;
    top: 22px;
    font-size: 20px;
  }
</style>
