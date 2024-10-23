<script>
  import { BeOption, BeSelect } from '@brewer/beerui/be-select';
  import { t } from 'svelte-i18n';
  import { CURRENT_DATE, CURRENT_DAY, CURRENT_HALF, CURRENT_HOUR, CURRENT_MINUTE, CURRENT_MONTH, CURRENT_YEAR, DAY_HALF_LIST, MINUTE_SECOND_LIST, MONTH_OPTIONS_LIST, HOUR_LIST as RAW_HOUR_LIST, WEEK_LIST } from '../../../../../../constant/timer';
  import { transformNumArrayToArrayOptions } from '../../../../../../utils/array';
  import { WECHAT_YEAR_LIST } from '../../../../../../constant/app/wechat';
  import { getLang } from '../../../../../../utils/i18n';
  import { LOCALE_CN } from '../../../../../../constant/i18n';
  import { EVENTS } from '../../../../../../constant/events';
  import event from '../../../../../../utils/event';
  import { OPERATION_TYPE } from '../../../../../../constant/common/operation';
  import { getMonthDaysOptions } from '../../../../../../utils/timer';
  import ExecuteBtn from '../../../../../execute-btn/index.svelte';

  const lang = getLang();
  const isCN = lang === LOCALE_CN;
  const DAY_LIST = [{ label: $t('Yesterday'), value: -1 }].concat(WEEK_LIST.map((date, index) => ({ label: $t(date), value: index + 1})));
  const DAY_HALF = DAY_HALF_LIST.map((item, index) => ({ label: $t(item), value: index }));
  const HOUR_LIST = RAW_HOUR_LIST.map(item => ({ label: item, value: item }));
  const MINUTE_LIST = MINUTE_SECOND_LIST.map(item => ({ label: item, value: item }));
  const WECHAT_YEAR = transformNumArrayToArrayOptions(WECHAT_YEAR_LIST);

  $: msgTime = {
    year: CURRENT_YEAR,
    month: `${CURRENT_MONTH}`,
    date: `${CURRENT_DATE}`,
    day: CURRENT_DAY,
    half: CURRENT_HALF,
    hour: CURRENT_HOUR,
    minute: CURRENT_MINUTE
  };

  const onConfirmAdd = () => {
    let result = '';
    let date = [];

    if (msgTime.year) {
      date.push(`${msgTime.year}${isCN ? $t('Year') : ''}`);
    }

    if (msgTime.month) {
      date.push(`${msgTime.month}${isCN ? $t('Month') : ''}`);
    }

    if (msgTime.date) {
      date.push(`${msgTime.date}${isCN ? $t('Date') : ''}`);
    }

    if (isCN) {
      result += date.join('');
    } else {
      result += date.join('-');
    }

    if (msgTime.day) {
      result += ` ${$t(DAY_LIST[msgTime.day].label)}`;
    }

    let time = [];

    if (msgTime.half) {
      time.push(`${$t(DAY_HALF[msgTime.half].label)}`);
    }

    time.push(`${msgTime.hour}:${msgTime.minute}`);

    if (isCN) {
      result += ` ${time.join(' ')}`;
    } else {
      result += ` ${time.reverse().join(' ')}`;
    }

    event.emit(EVENTS.APP.WECHAT.DIALOG.UPDATE_MESSAGE, {
      operate: OPERATION_TYPE.ADD,
      msg: {
        type: 'time',
        time: result,
      },
    });
  };
</script>

<div>
  <div class='msg-time'>
    <div class='layout-start-center msg-time-date'>
      <BeSelect bind:value={msgTime.year} clearable class='msg-year' placeholder={$t('Please select')}>
        {#each WECHAT_YEAR as year}
          <BeOption value={year.value} label={year.label} />
        {/each}
      </BeSelect>

      <span>{$t('Year')}</span>

        <BeSelect bind:value={msgTime.month} clearable class='msg-month' placeholder={$t('Please select')}>
        {#each MONTH_OPTIONS_LIST as month}
          <BeOption value={month.value} label={month.label} />
        {/each}
      </BeSelect>

      <span>{$t('Month')}</span>

      <BeSelect bind:value={msgTime.date} clearable class='msg-date' placeholder={$t('Please select')}>
        {#each getMonthDaysOptions(msgTime.year, msgTime.month) as date}
          <BeOption value={date.value} label={date.label} />
        {/each}
      </BeSelect>

      <span>{$t('Date')}</span>
    </div>

    <div class='layout-start-center msg-time-detail'>
      <BeSelect bind:value={msgTime.day} clearable placeholder={$t('Please select')}>
        {#each DAY_LIST as date}
          <BeOption value={date.value} label={date.label} />
        {/each}
      </BeSelect>

      <BeSelect bind:value={msgTime.half} clearable placeholder={$t('Please select')}>
        {#each DAY_HALF as half}
          <BeOption value={half.value} label={half.label} />
        {/each}
      </BeSelect>

      <BeSelect bind:value={msgTime.hour} clearable placeholder={$t('Please select')}>
        {#each HOUR_LIST as hour}
          <BeOption value={hour.value} label={hour.label} />
        {/each}
      </BeSelect>

      <BeSelect bind:value={msgTime.minute} clearable placeholder={$t('Please select')}>
        {#each MINUTE_LIST as minute}
          <BeOption value={minute.value} label={minute.label} />
        {/each}
      </BeSelect>
    </div>
  </div>

  <ExecuteBtn text={$t('Add')} onConfirm={onConfirmAdd} className='msg-time-btn' buttonProps={{ size: 'mini' }} />
</div>

<style lang='scss' global>

</style>
