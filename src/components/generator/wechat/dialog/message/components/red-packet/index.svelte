<script>
  import LayoutMessage from '../layout/index.svelte';
  import Transaction from '../transaction/index.svelte';
  import iconRedPacket from '../../../../../../../assets/images/app/wechat/dialog/red-packet.png';
  import { t } from 'svelte-i18n';
</script>

<LayoutMessage
  {...$$props}
  className='wechat-message-red-packet'
>
  <svelte:fragment slot='message'>
    <Transaction
      title={$$props.redPacketTitle}
      subTitle={$t('Wechat Red Packet')}
      isMe={$$props.isMe}
      mainBackgroundColor='var(--wechat-dialog-red-packet-main)'
      subBackgroundColor='var(--white)'
      arrowColorIsMe='var(--wechat-dialog-red-packet-main)'
      arrowColorOther='var(--wechat-dialog-red-packet-main)'
    >
      <svelte:fragment slot='icon'>
        <img src={iconRedPacket} alt='red-packet' class='icon-red-packet' />
      </svelte:fragment>
    </Transaction>
  </svelte:fragment>
</LayoutMessage>

<style lang='scss' global>
  .wechat-message-red-packet {
    position: relative;

    .icon-red-packet {
      width: 52.5px;
      height: 60px;
    }
  }
</style>
