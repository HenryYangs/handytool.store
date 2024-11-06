<script>
  import BeIcon from '@brewer/beerui/be-icon';
  import { t } from 'svelte-i18n';
  import { BILL_PAGE_TYPE, DEFAULT_WECHAT_BILL_CONFIG } from '../../../../../constant/app/wechat/bill';
  import { useEventListener } from '../../../../../utils/hooks/use-event-listener';
  import { EVENTS } from '../../../../../constant/events';

  $: pageType = BILL_PAGE_TYPE.PAYMENT;
  $: avatar = DEFAULT_WECHAT_BILL_CONFIG.avatar;
  $: otherUserName = '邓紫棋';
  $: billTitle = (() => {
    if (pageType === BILL_PAGE_TYPE.PAYMENT) {
      return `转账-转给${otherUserName}`;
    } else {
      return `转账-来自${otherUserName}`;
    }
  })();
  $: amount = DEFAULT_WECHAT_BILL_CONFIG.amount;
  $: billAmount = (() => {
    let mark = '';

    if (pageType === BILL_PAGE_TYPE.PAYMENT) {
      mark = '-';
    } else {
      mark = '+';
    }

    return `${mark}${amount.toFixed(2)}`;
  })();
  $: billStatus = DEFAULT_WECHAT_BILL_CONFIG.billStatus;
  $: billDescription = DEFAULT_WECHAT_BILL_CONFIG.billDescription;
  $: billTransferTime = DEFAULT_WECHAT_BILL_CONFIG.billTransferTime;
  $: billReceiveTimer = DEFAULT_WECHAT_BILL_CONFIG.billReceiveTimer;
  $: billPaymentMethod = DEFAULT_WECHAT_BILL_CONFIG.billPaymentMethod;
  $: billId = DEFAULT_WECHAT_BILL_CONFIG.billId;

  const options = [
    '定位到聊天位置',
    '对账单有疑惑',
    '常见问题',
  ];

  const onTypeUpdate = (value) => {
    pageType = value;
  };

  const onAvatarUpdate = (value) => {
    avatar = value || DEFAULT_WECHAT_BILL_CONFIG.avatar;
  };

  const onAmountUpdate = (value) => {
    amount = Number(value) || 0;
  };

  const onStatusUpdate = (value) => {
    billStatus = value;
  };

  const onDescriptionUpdate = (value) => {
    billDescription = value;
  };

  const onTransferTimeUpdate = (value) => {
    billTransferTime = value;
  };

  const onReceiveTimeUpdate = (value) => {
    billReceiveTimer = value;
  };

  const onPayMethodUpdate = (value) => {
    billPaymentMethod = value;
  };

  const onBillNumberUpdate = (value) => {
    billId = value;
  };

  useEventListener(EVENTS.APP.WECHAT.BILL.UPDATE_TYPE, onTypeUpdate);
  useEventListener(EVENTS.APP.WECHAT.BILL.UPDATE_AVATAR, onAvatarUpdate);
  useEventListener(EVENTS.APP.WECHAT.BILL.UPDATE_AMOUNT, onAmountUpdate);
  useEventListener(EVENTS.APP.WECHAT.BILL.UPDATE_STATUS, onStatusUpdate);
  useEventListener(EVENTS.APP.WECHAT.BILL.UPDATE_DESCRIPTION, onDescriptionUpdate);
  useEventListener(EVENTS.APP.WECHAT.BILL.UPDATE_TRANSFER_TIME, onTransferTimeUpdate);
  useEventListener(EVENTS.APP.WECHAT.BILL.UPDATE_RECEIVE_TIME, onReceiveTimeUpdate);
  useEventListener(EVENTS.APP.WECHAT.BILL.UPDATE_PAY_METHOD, onPayMethodUpdate);
  useEventListener(EVENTS.APP.WECHAT.BILL.UPDATE_BILL_NUMBER, onBillNumberUpdate);
</script>

<div class='wechat-bill-ui-wrapper'>
  <header class='wechat-bill_header'>
    <div class='back-icon'>
      <BeIcon name='close' />
    </div>

    <div class='wechat-bill_title'>账单详情</div>
  </header>

  <div class='main-content'>
    <div class='layout-col-start-center main-content_upper'>
      <div class='avatar'>
        <img src={avatar} alt='avatar' />
      </div>
      <div class='wechat-bill_type'>{billTitle}</div>
      <div class='wechat-bill_amount'>{billAmount}</div>
    </div>

    <div class='wechat-bill_info'>
      <div><span>当前状态</span> {billStatus}</div>
      <div><span>转账说明</span> {billDescription}</div>
      <div><span>转账时间</span> {billTransferTime}</div>
      <div><span>收款时间</span> {billReceiveTimer}</div>
      {#if pageType === BILL_PAGE_TYPE.PAYMENT}
        <div><span>支付方式</span> {billPaymentMethod}</div>
      {/if}
      <div><span>转账单号</span> {billId}</div>
    </div>
  </div>

  <div class='wechat-bill_options'>
    {#each options as option}
      <div class='layout-between-center wechat-bill_option'>
        <span>
          {$t(option)}
        </span>
        <BeIcon name='chevron-right' />
      </div>
    {/each}
  </div>
</div>

<style lang='scss' global>
  .wechat-bill-ui-wrapper {
    height: 100%;
    padding: 10px 0;
    background-color: var(--simulator-ios-background-color);

    .wechat-bill_header {
      position: relative;
      height: 34px;
      padding: 0 10px 10px;
    }

    .back-icon {
      position: absolute;
      left: 10px;
      font-size: 24px;
    }

    .wechat-bill_title {
      height: 100%;
      line-height: 24px;
      text-align: center;
      font-size: 14px;
    }

    .main-content {
      padding: 20px 0;
      background-color: var(--white);
    }

    .main-content_upper {
      margin: 0 30px 20px;
      padding-bottom: 40px;
      border-bottom: 1px solid var(--simulator-ios-background-color);
    }

    .avatar img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin-bottom: 10px;
    }

    .wechat-bill_type {
      font-size: 14px;
      margin-bottom: 10px;
    }

    .wechat-bill_amount {
      font-size: 32px;
      font-weight: 500;
    }

    .wechat-bill_info {
      margin: 0 30px 20px;
      font-size: 12px;
    }

    .wechat-bill_info div {
      margin-bottom: 15px;
    }

    .wechat-bill_info span {
      display: inline-block;
      max-width: 80px;
      margin-right: 15px;
      color: #757575;
    }

    .wechat-bill_options {
      margin-top: 10px;
      padding: 0 30px;
      background-color: var(--white);
    }

    .wechat-bill_option {
      padding: 20px 0;
      font-size: 12px;
      
      &:not(:last-child) {
        border-bottom: 1px solid var(--simulator-ios-background-color);
      }
    }
  }
</style>
