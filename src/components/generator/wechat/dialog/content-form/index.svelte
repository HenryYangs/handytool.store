<script>
  import { BeForm, BeFormItem } from '@brewer/beerui/be-form';
  import { t } from 'svelte-i18n';
  import Time from './time/index.svelte';
  import ExecuteBtn from '../../../../execute-btn/index.svelte';
  import DialogUser from '../user/index.svelte';
  import BeSwitch from '@brewer/beerui/be-switch';
  import { nanoid } from 'nanoid';
  import { EVENTS } from '../../../../../constant/events';
  import event from '../../../../../utils/event';
  import { messageBox } from '@brewer/beerui';
  import { OPERATION_TYPE } from '../../../../../constant/common/operation';

  $: showMemberName = false;
  $: userList = [{
    id: nanoid(),
    isMe: true,
  }, {
    id: nanoid(),
    isMe: false,
  }];

  const deleteUser = (id) => {
    userList = userList.filter((user) => user.id !== id);
  };

  const onUpdate = (index, key, value) => {
    let tmp = [...userList];

    if (key === 'isMe') {
      tmp = tmp.map((user, idx) => ({
        ...user,
        isMe: index === idx ? value : false,
      }));
    } else {
      tmp[index][key] = value;
    }

    userList = tmp;
  };

  const onShowMemberName = (e) => {
    event.emit(EVENTS.APP.WECHAT.DIALOG.SHOW_USER_NAME, e.detail);
  };

  const addUser = () => {
    const tmp = [...userList];

    tmp.push({
      id: nanoid(),
      isMe: false,
    });

    userList = tmp;
  };

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
  }
</script>

<BeForm labelWidth='100px' class='content-form-wrapper'>
  <BeFormItem label={$t('Message Time')}>
    <Time />
  </BeFormItem>

  <BeFormItem label={$t('Show Member Name')}>
    <BeSwitch bind:checked={showMemberName} on:change={onShowMemberName} />
  </BeFormItem>

  {#each userList as user, index (user.id)}
    <DialogUser
      {...user}
      onDeleteUser={() => deleteUser(user.id)}
      onUpdate={(...newUser) => onUpdate(index, ...newUser)}
    />
  {/each}

  <div class='content-form-action layout-start'>
    <ExecuteBtn text={$t('Add User')} buttonProps={{ size: 'mini', type: 'success' }} onConfirm={addUser} />
    <ExecuteBtn text={$t('Clear Dialog')} buttonProps={{ size: 'mini', type: 'danger' }} onConfirm={clearDialog} />
  </div>
</BeForm>

<style lang='scss' global>
  .content-form-wrapper {
    .msg-time {
      .msg-time-date {
        margin-bottom: 20px;

        .msg-year, .msg-month, .msg-date {
          width: 100px;
        }

        span {
          margin: 0 10px;
        }
      }

      .msg-time-detail {
        & > *:not(:last-child) {
          margin-right: 10px;
        }
      }
    }

    .msg-time-btn {
      margin-top: 10px;
      width: 100px;
    }

    .content-form-action {
      padding-top: 20px;
      border-top: 1px solid var(--theme-main-light-color);

      & > * {
        margin-right: 5px;
      }
    }
  }
</style>