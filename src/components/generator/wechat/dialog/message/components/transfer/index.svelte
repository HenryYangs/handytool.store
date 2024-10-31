<script>
  import BeIcon from '@brewer/beerui/be-icon';
  import { WECHAT_DIALOG_MESSAGE_TYPE } from '../../../../../../../constant/app/wechat/dialog';
  import LayoutMessage from '../layout/index.svelte';
  import Transaction from '../transaction/index.svelte';
  import { formatTransferAmount } from '../../../../../../../utils/financial';

  $: isSendTransfer = $$props.type === WECHAT_DIALOG_MESSAGE_TYPE.SEND_TRANSFER;
</script>

<LayoutMessage
  {...$$props}
  className='wechat-message-transfer'
>
  <svelte:fragment slot='message'>
    <Transaction
      subTitle='微信转账'
      isMe={$$props.isMe}
      mainBackgroundColor='var(--wechat-dialog-transfer-main)'
      subBackgroundColor='var(--white)'
      arrowColorIsMe='var(--wechat-dialog-transfer-main)'
      arrowColorOther='var(--wechat-dialog-transfer-main)'
    >
      <svelte:fragment slot='icon'>
        <BeIcon name='check-circle' class='icon-transfer-check' />
      </svelte:fragment>

      <svelte:fragment slot='title'>
        <p>￥{formatTransferAmount($$props.transferAmount)}</p>
        <p class='transaction-sub-title'>{isSendTransfer ? '已被领取' : '已收款'}</p>
      </svelte:fragment>
    </Transaction>
  </svelte:fragment>
</LayoutMessage>

<style lang='scss' global>
  .wechat-message-transfer {
    position: relative;

    .icon-transfer-check {
      font-size: 40px;
      color: var(--white);
    }

    .transaction-sub-title {
      margin-top: 5px;
      color: #fff5eb;
      font-size: 12px;
    }
  }
</style>
