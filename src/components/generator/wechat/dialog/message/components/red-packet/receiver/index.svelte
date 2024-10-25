<script>
  import IconRedPacket from '../../../../../../../../assets/images/app/wechat/dialog/red-packet.png';

  $: content = '';
  $: (() => {
    if ($$props.isMe) {
      content = `你领取了${$$props.redPacketGiver}的<span class='highlight'>红包</span>`;
    } else {
      content = `${$$props.redPacketGiver}领取了你的<span class='highlight'>红包</span>`;
    }
  })();
</script>

<div class='wechat-message-red-packet-receiver'>
  <div class='red-packet-receiver-wrapper layout-center'>
    <img src={IconRedPacket} alt='red packet' class='icon-red-packet' />

    <p class='receiver-text'>{@html content}</p>
  </div>
</div>

<style lang='scss' global>
  .wechat-message-red-packet-receiver {
    .red-packet-receiver-wrapper {
      width: 100%;
    }

    .icon-red-packet {
      width: 26.25px;
      height: 30px;
    }

    .receiver-text {
      margin-left: 10px;
      font-size: 24px;
      color: #a5a5a5;
    }

    .highlight {
      color: var(--wechat-dialog-red-packet-main);
    }
  }
</style>
