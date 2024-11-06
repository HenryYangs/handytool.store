<script>
  import { BeForm, BeFormItem } from '@brewer/beerui/be-form';
  import BeInput from '@brewer/beerui/be-input';
  import BeTimePicker from '@brewer/beerui/be-date-picker';
  import event from '../../../../../utils/event';
  import { EVENTS } from '../../../../../constant/events';
  import { DEFAULT_TRANSFER_CONFIG } from '../../../../../constant/app/wechat/transfer';

  $: transferAmount = DEFAULT_TRANSFER_CONFIG.amount;
  $: transferTime = DEFAULT_TRANSFER_CONFIG.transferTime;
  $: receiveTime = DEFAULT_TRANSFER_CONFIG.receiveTime;

  const onTransferAmountChange = (e) => {
    event.emit(EVENTS.APP.WECHAT.TRANSFER.UPDATE_AMOUNT, e.target.value);
  };

  const onTransferTimeChange = (e) =>{
    event.emit(EVENTS.APP.WECHAT.TRANSFER.UPDATE_TRANSFER_TIME, e.detail);
  };

  const onReceiveTimeChange = (e) =>{
    event.emit(EVENTS.APP.WECHAT.TRANSFER.UPDATE_RECEIVE_TIME, e.detail);
  };
</script>

<BeForm>
  <BeFormItem label='转账金额'>
    <BeInput type='number' size='mini' bind:value={transferAmount} on:input={onTransferAmountChange} />
  </BeFormItem>

  <BeFormItem label='转账时间'>
    <BeTimePicker
      bind:value={transferTime}
      clearable={false}
      selectMode='datetime'
      placeholder='选择转账时间'
      valueFormat=''
      disabledDate={() => {}}
      on:change={onTransferTimeChange}
    />
  </BeFormItem>

  <BeFormItem label='收款时间'>
    <BeTimePicker
      bind:value={receiveTime}
      clearable={false}
      selectMode='datetime'
      placeholder='选择收款时间'
      valueFormat=''
      disabledDate={() => {}}
      on:change={onReceiveTimeChange}
    />
  </BeFormItem>
</BeForm>

<style lang='scss' global>

</style>
