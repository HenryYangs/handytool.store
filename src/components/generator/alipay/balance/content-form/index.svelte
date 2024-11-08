<script>
  import { t } from 'svelte-i18n';
  import { BeForm, BeFormItem } from '@brewer/beerui/be-form';
  import BeInput from '@brewer/beerui/be-input';
  import event from '../../../../../utils/event';
  import { EVENTS } from '../../../../../constant/events';
  import { DEFAULT_BALANCE } from '../../../../../constant/app/alipay/balance';

  $: balance = DEFAULT_BALANCE;

  const onBalanceInput = (e) => {
    event.emit(EVENTS.APP.ALIPAY.BALANCE.UPDATE_BALANCE, e.target.value);
  };
</script>

<BeForm labelWidth='100px'>
  <BeFormItem label={$t('Balance')}>
    <BeInput type='number' size='mini' bind:value={balance} on:input={onBalanceInput} />
  </BeFormItem>
</BeForm>

<style lang='scss' global>

</style>
