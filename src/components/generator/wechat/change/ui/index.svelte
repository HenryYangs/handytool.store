<script>
  import BeIcon from '@brewer/beerui/be-icon';
  import { useEventListener } from '../../../../../utils/hooks/use-event-listener';
  import { EVENTS } from '../../../../../constant/events';
  import { t } from 'svelte-i18n';
  import { getLang } from '../../../../../utils/i18n';
  import { LOCALE_CN } from '../../../../../constant/i18n';

  const isCN = getLang() === LOCALE_CN;
  $: balance = '0';

  const onBalanceUpdate = (value) => {
    if (value === '') {
      balance = '0';
      return;
    }

    if (!value.match(/^[0-9]*\.?[0-9]+$/)) return;

    if (value.match(/^[0-9]*\.?[0-9]{2,}$/)) {
      balance = value.replace(/^([0-9]+\.?[0-9]{2})([0-9]+)$/, '$1');
      return;
    }

    balance = value;
  }

  useEventListener(EVENTS.APP.WECHAT.CHANGE.BALANCE_UPDATE, onBalanceUpdate);
</script>

<div class='layout-col wechat-change-ui-wrapper'>
  <header class='header layout-between-center'>
    <div class='back-icon'>
      <BeIcon name='chevron-left' />
    </div>
    <div class='title'>{$t('Change Detail')}</div>
  </header>

  <main class='layout-col-start-center content'>
    <i class='iconfont-tools icon-tools-change coin-icon'></i>
    <div class='balance-title'>{$t('My Change')}</div>
    <div class='layout-start balance-amount'>
      <span class='balance-mark'>{$t('currencySymbol')}</span>
      <span class='balance'>{balance}</span>
    </div>
    
    <div class='rate-info'>
      {isCN ? '转入零钱通，能赚又能花 >' : ''}
    </div>

    <div class='layout-col-end-center action-buttons'>
      <button class='btn btn-primary'>{$t('recharge')}</button>
      <button class='btn btn-secondary'>{$t('withdraw')}</button>

      {#if isCN}
        <span class='qa'>常见问题</span>
        <span class='tips'>本服务由财付通提供</span>
      {/if}
    </div>
  </main>
</div>

<style lang='scss' global>
  @import '../../../../../assets/style/mixin/ui.scss';

  .wechat-change-ui-wrapper {
    height: 100%;
    padding: 10px 10px 40px;
    background-color: #fff;

    .header {
      width: 100%;
      margin-bottom: 40px;
    }

    .back-icon {
      font-size: 20px;
    }

    .title {
      font-size: 14px;
    }

    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .coin-icon {
      color: #FFD700;
      font-size: 50px;
      margin-bottom: 20px;
    }

    .balance-title {
      font-size: 16px;
      margin-bottom: 10px;
    }

    .balance-amount {
      max-width: 80%;
      font-size: 40px;
      font-weight: 500;
      margin-bottom: 20px;
    }

    .balance-mark {
      margin-right: 5px;
      font-size: 30px;
    }

    .balance {
      @include text-overflow;
    }

    .rate-info {
      color: #FF6B00;
      font-size: 14px;
      margin-bottom: 40px;
    }

    .action-buttons {
      flex: 1;
      width: 160px;
      gap: 10px;
    }

    .btn {
      width: 100%;
      padding: 12px;
      border-radius: 4px;
      border: none;
      font-size: 16px;
      cursor: pointer;
    }

    .btn-primary {
      background: #4CAF50;
      color: white;
    }

    .btn-secondary {
      background: #f5f5f5;
      color: #4CAF50;
    }

    .qa {
      margin-top: 50px;
      color: #4b5778;
      font-weight: bold;
      font-size: 14px;
    }

    .tips {
      color: #a6a6a6;
    }
  }
</style>
