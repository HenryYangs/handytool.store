<script>
  import BeIcon from '@brewer/beerui/be-icon';
  import { messageBox } from '@brewer/beerui';
  import { t } from 'svelte-i18n';

  export let className = '';
  export let onDelete = () => {};

  let onDeleteHandler = () => {
    messageBox({
			title: $t('deleteMsgTitle'),
			message: $t('deleteMsgTips'),
			buttons: [
				{ text: $t('Cancel'), customClass: 'be-button be-button--default', cb: ctx => ctx.close() },
				{ text: $t('Confirm'), type: 'button', customClass: 'be-button be-button--normal be-button--primary', cb: ctx => {
            onDelete();
            ctx.close();
          }
        },
			],
		})
  };
</script>

<div class={['wechat-message-delete-wrapper', className].join(' ')} on:click={onDeleteHandler}>
  <BeIcon name='close' class='wechat-message-delete' />
</div>

<style lang='scss' global>
  .wechat-message-delete-wrapper {
    cursor: pointer;
    
    .wechat-message-delete {
      display: block;
      background-color: red;
      color: var(--white);
      border-radius: 50%;
      font-size: 12px;
    }
  }
</style>
