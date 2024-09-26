<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import ExecuteBtn from '../../../../components/execute-btn/index.svelte';
  import { CATEGORY } from '../../../../constant/tools';
  import { prezero } from '../../../../utils/number';
  import { t } from 'svelte-i18n';

  let result = [];

  $: timestamp = '';
  $: year = '';
  $: month = '';
  $: date = '';
  $: hour = '';
  $: minute = '';
  $: second = '';

  const getCurTimestamp = () => {
    timestamp = String(Date.now());
  };

  const getCurDateTime = () => {
    const now = new Date();

    year = String(now.getFullYear());
    month = String(now.getMonth() + 1);
    date = String(now.getDate());
    hour = String(now.getHours());
    minute = String(now.getMinutes());
    second = String(now.getSeconds());
  };

  const onConfirm = () => {
    if (!timestamp && (!year || !month || !date)) {
      alert($t('timestampErrorTips'));
      return;
    }

    result = result.map(item => ({
      ...item,
      isHistory: true
    }))

    if (timestamp) {
      const tmpDate = new Date(Number(timestamp));

      result.unshift({
        before: timestamp,
        after: `${tmpDate.getFullYear()}-${prezero(tmpDate.getMonth() + 1)}-${prezero(tmpDate.getDate())} ${prezero(tmpDate.getHours())}:${prezero(tmpDate.getMinutes())}:${prezero(tmpDate.getSeconds())}`,
        isHistory: false,
      });
    }

    if (year && month && date) {
      const dateTimeStr = `${year}-${month}-${date} ${hour}:${minute}:${second}`;
      const tmpDate = new Date(dateTimeStr);

      result.unshift({
        before: dateTimeStr,
        after: tmpDate.getTime(),
        isHistory: false,
      });
    }
  };
</script>

<Layout>
  <ToolLayout
    id='timestamp'
    category={CATEGORY.TIMER}
  >
    <section class='tool-panel'>
      <div class='tool-container timestamp'>
        <div class='tool-header'>
          <h6>{$t('Timestamp')}:</h6>
          <button class='btn btn-outline-dark btn-sm' on:click={getCurTimestamp}>{$t('currentTimestamp')}</button>
        </div>

        <input class='form-control input-timestamp' type='number' bind:value={timestamp} />
      </div>

      <div class='tool-container datetime'>
        <div class='tool-header'>
          <h6>{$t('Date')} & {$t('Time')}:</h6>
          <button class='btn btn-outline-dark btn-sm' on:click={getCurDateTime}>{$t('currentTime')}</button>
        </div>

         <div class='date-time-wrapper'>
            <input class='form-control input-date-time_year' type='number' placeholder='YYYY' bind:value={year} />
            <span class='separator'>-</span>
            <input class='form-control input-date-time_month' type='number' placeholder='MM' bind:value={month} />
            <span class='separator'>-</span>
            <input class='form-control input-date-time_date' type='number' placeholder='DD' bind:value={date} />
            <span class='separator'></span>
            <input class='form-control input-date-time_hour' type='number' placeholder='HH' bind:value={hour} />
            <span class='separator'>:</span>
            <input class='form-control input-date-time_minute' type='number' placeholder='mm' bind:value={minute} />
            <span class='separator'>:</span>
            <input class='form-control input-date-time_second' type='number' placeholder='ss' bind:value={second} />
         </div>
      </div>
      
      <ExecuteBtn text={$t('Convert')} onConfirm={onConfirm} />
    </section>

    {#if result.length}
      <section class='tool-panel result-panel'>
        <h6>{$t('Results')}:</h6>

        <table class='table table-bordered result-table'>
          <thead class='table-light'>
            <tr>
              <th>{$t('covertBefore')}</th>
              <th>{$t('convertAfter')}</th>
            </tr>
          </thead>
          <tbody>
            {#each result as item}
              <tr>
                <td class={item.isHistory ? 'history-item' : ''}>{item.before}</td>
                <td class={item.isHistory ? 'history-item' : ''}>{item.after}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </section>
    {/if}
  </ToolLayout>
</Layout>

<style>
.tool-container {
  margin-bottom: 10px;
}

.tool-header,
.date-time-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.tool-header h6 {
  margin-right: 10px;
}

.input-timestamp,
.date-time-wrapper {
  margin-top: 10px;
}

.separator {
  margin: 0 5px;
}

.result-panel {
  margin-top: 20px;
}

.result-table {
  width: 100%;
  margin-top: 10px;
}

th {
  text-align: center;
}

.history-item {
  background-color: #ccc;
}
</style>
