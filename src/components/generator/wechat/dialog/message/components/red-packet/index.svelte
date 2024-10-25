<script>
  import LayoutMessage from '../layout/index.svelte';
  import Arrow from '../arrow/index.svelte';
  import iconRedPacket from '../../../../../../../assets/images/app/wechat/dialog/red-packet.png';
  import { t } from 'svelte-i18n';
</script>

<LayoutMessage
  {...$$props}
  className='wechat-message-red-packet'
>
  <div slot='message' class='red-packet-wrapper'>
    <div class='red-packet-upper layout-start-center'>
      <img src={iconRedPacket} alt='red-packet' class='icon-red-packet' />

      <span class='red-packet-msg'>{$$props.redPacketTitle}</span>
    </div>

    <div class='red-packet-lower layout-start-center'>
      <p class='red-packet-lower-text'>{$t('Wechat Red Packet')}</p>
    </div>

    <Arrow
      isMe={$$props.isMe}
      colorIsMe='--wechat-dialog-red-packet-main'
      colorOther='--wechat-dialog-red-packet-main'
      size={30}
      offset={-21}
    />
  </div>
</LayoutMessage>

<style lang='scss' global>
  @import '../../../../../../../assets/style/mixin/ui.scss';
  @import '../../../../../../../assets/style/variables/app/wechat/index.scss';

  .wechat-message-red-packet {
    position: relative;

    .red-packet-wrapper {
      width: 440px;
      height: 176px;
    }

    .red-packet-upper {
      width: 100%;
      height: 128px;
      padding: 0 30px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      background-color: var(--wechat-dialog-red-packet-main);
    }

    .red-packet-lower {
      width: 100%;
      height: 48px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      background-color: var(--wechat-dialog-red-packet-lower);
    }

    .icon-red-packet {
      width: 52.5px;
      height: 60px;
    }

    .red-packet-msg {
      flex: 1;
      margin-left: 20px;
      font-size: 30px;
      color: var(--white);
      line-height: 1.2;

      @include text-overflow;
    }

    .red-packet-lower-text {
      padding-left: 20px;
      font-size: 24px;
      color: #a5a5a5;
    }
  }
</style>
