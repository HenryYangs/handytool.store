<script>
  import BeIcon from '@brewer/beerui/be-icon';
  import { t } from 'svelte-i18n';
  import { useEventListener } from '../../../../../utils/hooks/use-event-listener';
  import { EVENTS } from '../../../../../constant/events';
  import { DEFAULT_TRANSFER_CONFIG } from '../../../../../constant/app/wechat/transfer';

  $: amount = DEFAULT_TRANSFER_CONFIG.amount;
  $: transferTime = DEFAULT_TRANSFER_CONFIG.transferTime;
  $: receiveTime = DEFAULT_TRANSFER_CONFIG.receiveTime;

  const onAmountUpdate = (value) => {
    amount = value ? Number(value).toFixed(2) : DEFAULT_TRANSFER_CONFIG.amount;
  };

  const onTransferTimeUpdate = (value) => {
    transferTime = value || DEFAULT_TRANSFER_CONFIG.transferTime;
  };

  const onReceiveTimeUpdate = (value) => {
    receiveTime = value || DEFAULT_TRANSFER_CONFIG.receiveTime;
  };

  useEventListener(EVENTS.APP.WECHAT.TRANSFER.UPDATE_AMOUNT,onAmountUpdate);
  useEventListener(EVENTS.APP.WECHAT.TRANSFER.UPDATE_TRANSFER_TIME, onTransferTimeUpdate);
  useEventListener(EVENTS.APP.WECHAT.TRANSFER.UPDATE_RECEIVE_TIME, onReceiveTimeUpdate);
</script>

<div class='layout-col wechat-transfer-ui-wrapper'>
  <div class='back'>
    <BeIcon name='chevron-left' />
  </div>

  <div class='status'>
    <div class='layout-center success-icon'>
      <BeIcon name='check' />
    </div>
    <span class='text'>已收款</span>
    <div class='layout-center-start amount'>
      <span class='mark'>{$t('currencySymbol')}</span>
      <span class='amount-text'>{amount}</span>
    </div>
    <a href='#' class='check-money'>查看零钱</a>
  </div>

  <div class='layout-start-center money-plus'>
    <div class='layout-center icon'>
      <svg viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' width='25' height='25'><path d='M452.6 172.2h109l107.7 145H339.8zM259 172.2h144l-112.2 145H98.6zM280.8 374.8H81.1l416.2 548.7zM763.5 172.2h-144l112.4 145H924zM741.8 374.8h199.8L525.2 923.5zM339.8 374.8h329.5L525.2 923.5h-27.9z' fill='#F2B000'></path></svg>
    </div>

    <div class='info'>
      <p class='info-title'>零钱通</p>
      <p class='info-text'>转入赚收益 七日年化 2.48%</p>
    </div>

    <div class='arrow'>
      <BeIcon name='chevron-right' />
    </div>
  </div>

  <div class='layout-col-end-center time-info'>
    <div class='time-row'>
      <span>转账时间：</span>
      <span>{transferTime}</span>
    </div>
    <div class='time-row'>
      <span>收款时间：</span>
      <span>{receiveTime}</span>
    </div>
  </div>
</div>

<style lang='scss' global>
  @import '../../../../../assets/style/mixin/ui.scss';

  .wechat-transfer-ui-wrapper {
    height: 100%;
    margin: 0 auto;
    padding: 10px;

    .back {
      font-size: 22px;
    }

    .status {
      text-align: center;
      margin: 40px 0;
    }

    .success-icon {
      width: 60px;
      height: 60px;
      background: #4CAF50;
      border-radius: 50%;
      color: white;
      font-size: 32px;
      margin: 0 auto 40px;
    }

    .text {
      font-size: 16px;
    }

    .amount {
      font-size: 40px;
      font-weight: bold;
      margin: 10px 20px 40px;
    }

    .mark {
      margin-right: 5px;
      font-size: 30px;
    }

    .amount-text {
      @include text-overflow;
    }

    .check-money {
      color: #576b95;
      text-decoration: none;
    }

    .money-plus {
      padding: 15px 0;
      margin: 20px;
      border-top: 1px solid var(--simulator-ios-background-color);
      border-bottom: 1px solid var(--simulator-ios-background-color);
    }

    .money-plus .icon {
      width: 40px;
      height: 40px;
      font-size: 24px;
      background-color: rgb(247, 247, 247);
      border-radius: 50%;
    }

    .money-plus .info {
      flex: 1;
      margin: 0 10px;

      .info-title {
        font-size: 12px;
        color: #aaa;
      }

      .info-text {
        margin-top: 5px;
        font-size: 15px;
        font-weight: 500;
        color: #333;
      }
    }

    .money-plus .arrow {
      font-size: 24px;
      color: #333;
    }

    .time-info {
      flex: 1;
      margin-bottom: 40px;
      color: #999;
      font-size: 14px;
    }

    .time-row {
      margin: 3px 0;
      font-size: 12px;
    }
  }
</style>