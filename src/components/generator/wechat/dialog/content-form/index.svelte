<script>
  import { BeForm, BeFormItem } from '@brewer/beerui/be-form';
  import { t } from 'svelte-i18n';
  import Time from './time/index.svelte';
  import ExecuteBtn from '../../../../execute-btn/index.svelte';
  import DialogUser from '../user/index.svelte';
  import BeSwitch from '@brewer/beerui/be-switch';

  $: showMemberName = false;
  $: userList = [{}, {}];
</script>

<BeForm labelWidth='100px' class='content-form-wrapper'>
  <BeFormItem label={$t('Add Msg Time')}>
    <Time />
  </BeFormItem>

  <BeFormItem label={$t('Show Member Name')}>
    <BeSwitch bind:checked={showMemberName} />
  </BeFormItem>

  {#each userList as user}
    <DialogUser />
  {/each}

  <div class='content-form-action layout-start'>
    <ExecuteBtn text={$t('Add User')} buttonProps={{ size: 'mini', type: 'success' }} />
    <ExecuteBtn text={$t('Clear Dialog')} buttonProps={{ size: 'mini', type: 'danger' }} />
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