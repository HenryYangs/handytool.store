<script>
  import { BeForm, BeFormItem } from '@brewer/beerui/be-form';
  import { BeOption, BeSelect } from '@brewer/beerui/be-select';
  import { t } from 'svelte-i18n';
  import { DAY_HALF_LIST, MINUTE_SECOND_LIST, HOUR_LIST as RAW_HOUR_LIST, TODAY, WEEK_LIST } from '../../../../../constant/timer';
  import BeDatePicker from '@brewer/beerui/be-date-picker';
  import ExecuteBtn from '../../../../../components/execute-btn/index.svelte';
  import DialogUser from '../user/index.svelte';
  import BeSwitch from '@brewer/beerui/be-switch';

  const DATE_LIST = [{ label: $t('Yesterday'), value: -1 }].concat(WEEK_LIST.map((date, index) => ({ label: $t(date), value: index + 1})));
  const DAY_HALF = DAY_HALF_LIST.map((item, index) => ({ label: $t(item), value: index + 1 }));
  const HOUR_LIST = RAW_HOUR_LIST.map((item, index) => ({ label: item, value: index }));
  const MINUTE_LIST = MINUTE_SECOND_LIST.map((item, index) => ({ label: item, value: index }));

  $: msgTime = {
    date: TODAY,
    day: 1,
    half: 1,
    hour: 0,
    minute: 0,
    second: 0
  };

  $: showMemberName = false;
  $: userList = [{}, {}];

  const onConfirmAdd = () => {
    console.log(msgTime);
  };
</script>

<BeForm labelWidth='100px' class='content-form-wrapper'>
  <BeFormItem label={$t('Add Msg Time')}>
    <div class='layout-start-center msg-time'>
      <BeDatePicker
        bind:value={msgTime.date}
        placeholder='选择日期'
        selectMode='date'
        valueFormat=''
        disabledDate={(time) => {
          return new Date(time).getTime() < new Date('2011-01-10').getTime();
        }}
      />

      <BeSelect bind:value={msgTime.day} clearable class='msg-day'>
        {#each DATE_LIST as date}
          <BeOption value={date.value} label={date.label} />
        {/each}
      </BeSelect>

      <BeSelect bind:value={msgTime.half} clearable class='msg-day-half'>
        {#each DAY_HALF as half}
          <BeOption value={half.value} label={half.label} />
        {/each}
      </BeSelect>

      <BeSelect bind:value={msgTime.hour} clearable class='msg-hour'>
        {#each HOUR_LIST as hour}
          <BeOption value={hour.value} label={hour.label} />
        {/each}
      </BeSelect>

      <BeSelect bind:value={msgTime.minute} clearable class='msg-minute'>
        {#each MINUTE_LIST as minute}
          <BeOption value={minute.value} label={minute.label} />
        {/each}
      </BeSelect>
    </div>

    <ExecuteBtn text={$t('Add')} onConfirm={onConfirmAdd} className='msg-time-btn' buttonProps={{ size: 'mini' }} />
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
      & > *:not(:first-child) {
        margin-left: 5px;
      }

      .be-date {
        width: 135px;
      }

      .msg-day, .msg-day-half {
        width: 80px;
      }

      .msg-hour, .msg-minute {
        width: 70px;
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