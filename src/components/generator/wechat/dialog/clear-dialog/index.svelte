<script>
  import { t } from 'svelte-i18n';
  import ExecuteBtn from '../../../../execute-btn/index.svelte';
  import event from '../../../../../utils/event';
  import { EVENTS } from '../../../../../constant/events';
  import { OPERATION_TYPE } from '../../../../../constant/common/operation';
  import { messageBox } from '@brewer/beerui';

  const clearDialog = () => {
    messageBox({
      type: 'warning',
      title: $t('clearDialogTitle'),
      message: $t('clearDialogContent'),
      buttons: [
				{ text: $t('Cancel'), customClass: 'be-button be-button--default', cb: ctx => ctx.close() },
				{ text: $t('Confirm'), type: 'button', customClass: 'be-button be-button--normal be-button--primary', cb: ctx => {
          event.emit(EVENTS.APP.WECHAT.DIALOG.UPDATE_MESSAGE, {
            operate: OPERATION_TYPE.CLEAR,
          })
          ctx.close();
        } },
			],
    })
  };
</script>

<ExecuteBtn text={$t('Clear Dialog')} buttonProps={{ size: 'mini', type: 'danger' }} onConfirm={clearDialog} />

<style lang='scss' global>

</style>
