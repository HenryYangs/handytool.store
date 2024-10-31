<script>
  import { t } from 'svelte-i18n';
  import IconRedPacket from '../../../../../../../../assets/images/app/wechat/dialog/red-packet.png';

  $: content = '';
  $: (() => {
    if ($$props.isMe) {
      content = $t('receiveRedPacketIsMe', { values:  { giver: $$props.redPacketGiver } });
    } else {
      content = $t('receiveRedPacketIsOther', { values:  { giver: $$props.redPacketGiver } });
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
      width: 13.125px;
      height: 15px;
    }

    .receiver-text {
      margin-left: 5px;
      font-size: 12px;
      color: #a5a5a5;
    }

    .highlight {
      color: var(--wechat-dialog-red-packet-main);
    }
  }
</style>
