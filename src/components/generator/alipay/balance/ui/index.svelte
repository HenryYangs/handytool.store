<script>
  import BeIcon from '@brewer/beerui/be-icon';
  import ICON_RECHARGE from '../../../../../assets/images/app/alipay/recharge.png';
  import ICON_WALLET from '../../../../../assets/images/app/alipay/wallet.png';
  import ICON_JIFENBAO from '../../../../../assets/images/app/alipay/jifenbao.png';
  import ICON_BACKUP from '../../../../../assets/images/app/alipay/backup.png';
  import { useEventListener } from '../../../../../utils/hooks/use-event-listener';
  import { EVENTS } from '../../../../../constant/events';
  import { DEFAULT_BALANCE } from '../../../../../constant/app/alipay/balance';
  import { t } from 'svelte-i18n';

  const ENTRY_LIST = [
    {
      icon: ICON_RECHARGE,
      text: $t('Recharge'),
    },
    {
      icon: ICON_WALLET,
      text: $t('Wallet'),
    },
    {
      icon: ICON_JIFENBAO,
      text: $t('Jifenbao'),
      style: 'margin-top: 20px',
    },
    {
      icon: ICON_BACKUP,
      text: $t('Reserve Fund'),
      subText: $t('Free for 7 days'),
    },
  ];

  $: balanceAmount = DEFAULT_BALANCE;

  const updateBalanceAmount = (value) => {
    balanceAmount = Number(value).toFixed(2);
  };

  useEventListener(EVENTS.APP.ALIPAY.BALANCE.UPDATE_BALANCE, updateBalanceAmount);
</script>

<div class='alipay-balance-ui-wrapper'>
  <div class='upper'>
    <div class='layout-center header'>
      <div class='layout-start-center'>
        <BeIcon name='chevron-left' class='icon-back' />
        {$t('Back')}
      </div>
      
      <div class='title'>{$t('Balance')}</div>

      <div class='detail'>{$t('Detail')}</div>
    </div>

    <div class='balance-main'>
      <p class='balance-title'>{$t('Account Balance')}</p>

      <div class='balance-amount'>{balanceAmount}</div>
    </div>
  </div>

  <div class='layout-col-between-center lower'>
    <div style='width: 100%'>
      {#each ENTRY_LIST as item}
        <div class='layout-between-center item-entry' style={item.style}>
          <div class='layout-start-center'>
            <img src={item.icon} alt={item.text} class='entry-item-icon' />
            {item.text}
          </div>
          
          <div class='layout-end-center'>
            <span class='subtext'>{item.subText || ''}</span>
            <BeIcon name='chevron-right' color='#c1c0c7' class='icon-right' />
          </div>
        </div>
      {/each}
    </div>

    <div class='layout-center links'>
      <a href='javascript:;'>{$t('Credit Loans')}</a>
      <span class='separator'>|</span>
      <a href='javascript:;'>{$t('FAQ')}</a>
    </div>
  </div>
</div>

<style lang='scss' global>
  @import '../../../../../assets/style/mixin/ui.scss';

  .alipay-balance-ui-wrapper {
    height: 100%;
    background-color: var(--alipay-main-color);

    .upper {
      height: 30%;
    }

    .lower {
      height: 70%;
      background-color: var(--alipay-sub-color);
    }

    .header {
      padding: 5px 10px;
      font-size: 14px;
      color: var(--white);

      & > * {
        flex: 1;
      }

      .title {
        text-align: center;
      }

      .detail {
        text-align: right;
      }
    }

    .icon-back {
      font-size: 16px;
    }

    .balance-main {
      padding-left: 15px;
    }

    .balance-title {
      margin-top: 40px;
      font-size: 12px;
      color: rgba(255, 255, 255, .5);
    }

    .balance-amount {
      margin-top: 30px;
      color: var(--white);
      font-size: 60px;

      @include text-overflow;
    }

    .item-entry {
      height: 40px;
      padding: 0 15px;
      background-color: var(--white);
      font-size: 14px;
      font-weight: 400;
      border-bottom: 1px solid #f5f5f5;

      .icon-right {
        font-size: 18px;
      }
    }

    .entry-item-icon {
      width: 16px;
      height: 16px;
      margin-right: 10px;
    }

    .subtext {
      font-size: 12px;
      color: #c1c0c7;
    }

    .links {
      margin-bottom: 20px;

      &,
      & > * {
        color: #485984;
      }
    }

    .separator {
      margin: 0 10px;
    }
  }
</style>
