<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import StaticDigitalClock from '../../../../components/timer/static-digital-version/index.svelte';
  import ExecuteBtn from '../../../../components/execute-btn/index.svelte';
  import { CATEGORY } from '../../../../constant/tools';
  import { MS_OF_ONE_MINUTE, MS_OF_ONE_SECOND, TIMER_UNIT_MAP } from '../../../../constant/timer';
  import { prezero } from '../../../../utils/number';
  import { calcDiffTime, onUpdateClock } from '../../../../utils/timer';
  import { t } from 'svelte-i18n';

  const units = [TIMER_UNIT_MAP.MINUTE, TIMER_UNIT_MAP.SECOND, TIMER_UNIT_MAP.MILLISECOND];

  $: chronograph = {
    [TIMER_UNIT_MAP.MINUTE]: {
      value: prezero(0),
      isLast: false,
    },
    [TIMER_UNIT_MAP.SECOND]: {
      value: prezero(0),
      isLast: false,
    },
    [TIMER_UNIT_MAP.MILLISECOND]: {
      value: prezero(0),
      isLast: true,
    }
  }
  $: result = [];
  let startTime = 0;
  let isRunning = false;
  let isPause = false;

  const addLap = () => {
    const total = {
      [TIMER_UNIT_MAP.MINUTE]: chronograph[TIMER_UNIT_MAP.MINUTE].value,
      [TIMER_UNIT_MAP.SECOND]: chronograph[TIMER_UNIT_MAP.SECOND].value,
      [TIMER_UNIT_MAP.MILLISECOND]: chronograph[TIMER_UNIT_MAP.MILLISECOND].value,
    };

    if (result.length) {
      const currentTotalTimeInMS = Number(chronograph[TIMER_UNIT_MAP.MINUTE].value) * MS_OF_ONE_MINUTE + Number(chronograph[TIMER_UNIT_MAP.SECOND].value) * MS_OF_ONE_SECOND + Number(chronograph[TIMER_UNIT_MAP.MILLISECOND].value) * 10;
      const lastItemTotal = result[0].total;
      const lastTotalTimeInMS = Number(lastItemTotal[TIMER_UNIT_MAP.MINUTE]) * MS_OF_ONE_MINUTE + Number(lastItemTotal[TIMER_UNIT_MAP.SECOND]) * MS_OF_ONE_SECOND + Number(lastItemTotal[TIMER_UNIT_MAP.MILLISECOND]) * 10;
      const thisLap = calcDiffTime(currentTotalTimeInMS - lastTotalTimeInMS, ...units);

      result = [{
        lap: {
          [TIMER_UNIT_MAP.MINUTE]: prezero(thisLap[TIMER_UNIT_MAP.MINUTE]),
          [TIMER_UNIT_MAP.SECOND]: prezero(thisLap[TIMER_UNIT_MAP.SECOND]),
          [TIMER_UNIT_MAP.MILLISECOND]: prezero(thisLap[TIMER_UNIT_MAP.MILLISECOND]),
        },
        total,
      }, ...result];
    } else {
      result.push({
        lap: {
          [TIMER_UNIT_MAP.MINUTE]: chronograph[TIMER_UNIT_MAP.MINUTE].value,
          [TIMER_UNIT_MAP.SECOND]: chronograph[TIMER_UNIT_MAP.SECOND].value,
          [TIMER_UNIT_MAP.MILLISECOND]: chronograph[TIMER_UNIT_MAP.MILLISECOND].value,
        },
        total,
      })
    }
  }

  const onLeftBtnClick = () => {
    if (isRunning) {
      isRunning = false;
      isPause = true;
    } else {
      isRunning = true;
      startTime = Date.now();

      let targetTimestamp = 0;

      if (isPause) {
        /**
         * from status pause to continue
         * we add time which has already counted
         * then use current timestamp to delete counted time
         * assume start time is counted time ago
         */
        targetTimestamp = startTime - (Number(chronograph[TIMER_UNIT_MAP.MINUTE].value) * MS_OF_ONE_MINUTE + Number(chronograph[TIMER_UNIT_MAP.SECOND].value) * MS_OF_ONE_SECOND + Number(chronograph[TIMER_UNIT_MAP.MILLISECOND].value) * 10);
      } else {
        targetTimestamp = startTime;
      }

      isPause = false;

      onUpdateClock({
        targetTimestamp,
        units,
        callback: (duration) => {
          chronograph[TIMER_UNIT_MAP.MINUTE].value = prezero(duration[TIMER_UNIT_MAP.MINUTE]);
          chronograph[TIMER_UNIT_MAP.SECOND].value = prezero(duration[TIMER_UNIT_MAP.SECOND]);
          chronograph[TIMER_UNIT_MAP.MILLISECOND].value = prezero(duration[TIMER_UNIT_MAP.MILLISECOND]);

          if (isPause) {
            isRunning = false;

            addLap();
          }

          return isRunning;
        },
        timeType: 'past'
      });
    }
  };
  const onRightBtnClick = () => {
    if (isRunning) {
      addLap();
    } else {
      isPause = false;
      result = [];
      chronograph[TIMER_UNIT_MAP.MINUTE].value = prezero(0);
      chronograph[TIMER_UNIT_MAP.SECOND].value = prezero(0);
      chronograph[TIMER_UNIT_MAP.MILLISECOND].value = prezero(0);
    }
  };
</script>

<Layout>
  <ToolLayout
    id='chronograph'
    category={CATEGORY.TIMER}
  >
    <div class='tool-panel wrapper'>
      <StaticDigitalClock config={chronograph} lastUnitColor='red' />

      <div class='action-wrapper'>
        <ExecuteBtn text={$t(isRunning ? 'Stop' : 'Start')} style='width: calc(50% - 10px);' onConfirm={onLeftBtnClick} />
        <ExecuteBtn text={$t(isRunning ? 'Lap' : 'Reset')} style='width: calc(50% - 10px);' onConfirm={onRightBtnClick} />
      </div>

      {#if result.length}
        <table class='table table-bordered result-table'>
          <thead class='table-light'>
            <tr>
              <th>{$t('No')}.</th>
              <th>{$t('Lap')}</th>
              <th>{$t('totalTime')}</th>
            </tr>
          </thead>
          <tbody>
            {#each result as item, index}
              <tr>
                <td>{result.length - index}</td>
                <td>{`${item.lap[TIMER_UNIT_MAP.MINUTE]}:${item.lap[TIMER_UNIT_MAP.SECOND]}:${item.lap[TIMER_UNIT_MAP.MILLISECOND]}`}</td>
                <td>{`${item.total[TIMER_UNIT_MAP.MINUTE]}:${item.total[TIMER_UNIT_MAP.SECOND]}:${item.total[TIMER_UNIT_MAP.MILLISECOND]}`}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      {/if}
    </div>
  </ToolLayout>
</Layout>

<style global lang='scss'>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.action-wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
}

.result-table {
  width: 300px;
  margin-top: 30px;
}
</style>
