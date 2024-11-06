<script>
  import { t } from 'svelte-i18n';
  import { BeSelect, BeOption } from '@brewer/beerui';
  import { BeForm, BeFormItem } from '@brewer/beerui/be-form';
  import BeUpload from '@brewer/beerui/be-upload';
  import BeIcon from '@brewer/beerui/be-icon';
  import BeInput from '@brewer/beerui/be-input';
  import BeTimePicker from '@brewer/beerui/be-date-picker';
  import ExecuteBtn from '../../../../execute-btn/index.svelte';
  import { BILL_PAGE_TYPE, BILL_TYPE_LIST, DEFAULT_WECHAT_BILL_CONFIG } from '../../../../../constant/app/wechat/bill';
  import event from '../../../../../utils/event';
  import { EVENTS } from '../../../../../constant/events';
  import { fileToBase64 } from '../../../../../utils/base64';
  import { getRandomBillId } from '../../../../../utils/app/wechat/bill';

  $: billType = BILL_PAGE_TYPE.PAYMENT;
  $: avatar = '';
  $: billAmount = String(DEFAULT_WECHAT_BILL_CONFIG.amount);
  $: billStatus = DEFAULT_WECHAT_BILL_CONFIG.billStatus;
  $: billDescription = DEFAULT_WECHAT_BILL_CONFIG.billDescription;
  $: transferTime = DEFAULT_WECHAT_BILL_CONFIG.billTransferTime;
  $: receiveTime = DEFAULT_WECHAT_BILL_CONFIG.billReceiveTimer;
  $: billPayMethod = DEFAULT_WECHAT_BILL_CONFIG.billPaymentMethod;
  $: billNum = DEFAULT_WECHAT_BILL_CONFIG.billId;

  const onBillTypeChange = (e) => {
    event.emit(EVENTS.APP.WECHAT.BILL.UPDATE_TYPE, e.detail)
  };

  const onAvatarChange = async (file) => {
    const avatar = await fileToBase64(file.raw);

    event.emit(EVENTS.APP.WECHAT.BILL.UPDATE_AVATAR, avatar);
  };

  const onAvatarRemove = () => {
    event.emit(EVENTS.APP.WECHAT.BILL.UPDATE_AVATAR, '');
  };

  const onAmountChange = (e) => {
    event.emit(EVENTS.APP.WECHAT.BILL.UPDATE_AMOUNT, e.target.value);
  };

  const onStatusChange = (e) => {
    event.emit(EVENTS.APP.WECHAT.BILL.UPDATE_STATUS, e.target.value);
  };

  const onDescriptionChange = (e) => {
    event.emit(EVENTS.APP.WECHAT.BILL.UPDATE_DESCRIPTION, e.target.value);
  };

  const onTransferTimeChange = (e) => {
    event.emit(EVENTS.APP.WECHAT.BILL.UPDATE_TRANSFER_TIME, e.detail);
  };

  const onReceiveTimeChange = (e) => {
    event.emit(EVENTS.APP.WECHAT.BILL.UPDATE_RECEIVE_TIME, e.detail);
  };

  const onPayMethodChange = (e) => {
    event.emit(EVENTS.APP.WECHAT.BILL.UPDATE_PAY_METHOD, e.target.value);
  };

  const onBillNumberChange = (e) => {
    event.emit(EVENTS.APP.WECHAT.BILL.UPDATE_BILL_NUMBER, e.target.value);
  };

  const onRandomBillNumber = () => {
    const id = getRandomBillId();

    billNum = id;
    onBillNumberChange({ target: { value: id } });
  }
</script>

<BeForm labelWidth='100px' class='wechat-bill_content-form-wrapper'>
  <BeFormItem label='账单类型'>
    <BeSelect
      size='mini'
      placeholder='选择账单类型'
      bind:value={billType}
      on:change={onBillTypeChange}
    >
      {#each BILL_TYPE_LIST as type}
        <BeOption value={type.value} label={$t(type.label)} />
      {/each}
    </BeSelect>
  </BeFormItem>

  <BeFormItem label={$t('Avatar')}>
    <div class='wechat-bill_avatar'>
      <BeUpload
        bind:value={avatar}
        autoUpload={false}
        limit={1}
        accept='image/*'
        listType='picture-card'
        style='width: 80px; height: 80px;'
        onChange={onAvatarChange}
        onRemove={onAvatarRemove}
      >
        <div class='upload-card avatar-upload-card'>
          <BeIcon name='add' width='40' height='40' />
        </div>
      </BeUpload>
    </div>
  </BeFormItem>

  <BeFormItem label={$t('Amount')}>
    <BeInput type='number' size='mini' bind:value={billAmount} on:input={onAmountChange} />
  </BeFormItem>

  <BeFormItem label='当前状态'>
    <BeInput size='mini' bind:value={billStatus} on:input={onStatusChange} />
  </BeFormItem>

  <BeFormItem label='转账说明'>
    <BeInput size='mini' bind:value={billDescription} on:input={onDescriptionChange} />
  </BeFormItem>

  <BeFormItem label='转账时间'>
    <BeTimePicker
      bind:value={transferTime}
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
      selectMode='datetime'
      placeholder='选择收款时间'
      valueFormat=''
      disabledDate={() => {}}
      on:change={onReceiveTimeChange}
    />
  </BeFormItem>

  <BeFormItem label='支付方式'>
    <BeInput size='mini' bind:value={billPayMethod} on:input={onPayMethodChange} />
  </BeFormItem>

  <BeFormItem label='转账单号'>
    <div class='layout-start-center'>
      <BeInput size='mini' bind:value={billNum} on:input={onBillNumberChange} />
      <ExecuteBtn text='随机单号' buttonProps={{ size: 'mini' }} className='random-bill-num' onConfirm={onRandomBillNumber} />
    </div>
  </BeFormItem>
</BeForm>

<style lang='scss' global>
  .wechat-bill_content-form-wrapper {
    .avatar-upload-card {
      width: 80px !important;
      height: 80px !important;
    }

    .be-upload-list {
      position: absolute;
    }

    .wechat-bill_avatar {
      .be-upload--picture-card,
      .be-upload-list__item {
        width: 80px;
        height: 80px;
      }
    }

    .random-bill-num {
      margin-left: 10px;
    }
  }
</style>
