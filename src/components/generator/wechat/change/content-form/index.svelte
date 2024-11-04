<script>
  import { t } from 'svelte-i18n';
  import { BeForm, BeFormItem } from '@brewer/beerui/be-form';
  import BeInput from '@brewer/beerui/be-input';
  import event from '../../../../../utils/event';
  import { EVENTS } from '../../../../../constant/events';

  $: myChange = '';

  const onMyChangeInput = (e) => {
    event.emit(EVENTS.APP.WECHAT.CHANGE.BALANCE_UPDATE, e.target.value);
  };
</script>

<BeForm labelWidth='100px'>
  <BeFormItem label={$t('My Change')}>
    <BeInput type='number' size='mini' bind:value={myChange} on:input={onMyChangeInput} />
  </BeFormItem>
</BeForm>

<style lang='scss' global>

</style>
