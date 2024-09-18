<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import StaticDigitalClock from '../../../../components/timer/static-digital-version/index.svelte';
  import ExecuteBtn from '../../../../components/execute-btn/index.svelte';
  import { TIMER, TOOL_TIMER_ID } from '../../../../constant/tools';
  import { MS_OF_ONE_HOUR, MS_OF_ONE_MINUTE, MS_OF_ONE_SECOND, TIMER_UNIT_MAP } from '../../../../constant/timer';
  import { prezero } from '../../../../utils/number';
  import { ALARM_PRO_PROGRAMMED_LIST } from '../../../../constant/timer/alarm';
  import { onUpdateClock } from '../../../../utils/timer';
  
  /**
   * mark the timestamp when start button is clicked
   */
  let startTime = 0;

  $: config = {
    [TIMER_UNIT_MAP.HOUR]: { value: prezero(0) },
    [TIMER_UNIT_MAP.MINUTE]: { value: prezero(3) },
    [TIMER_UNIT_MAP.SECOND]: { value: prezero(0), isLast: true },
  };
  $: hour = 0;
  $: minute = 3;
  $: second = 0;
  $: isDuration = false;
  $: isPause = false;

  const onPreProgrammedClick = (alarm) => {
    hour = alarm[TIMER_UNIT_MAP.HOUR] || 0;
    minute = alarm[TIMER_UNIT_MAP.MINUTE] || 0;
    second = alarm[TIMER_UNIT_MAP.SECOND] || 0;
    config[TIMER_UNIT_MAP.HOUR].value = prezero(hour);
    config[TIMER_UNIT_MAP.MINUTE].value = prezero(minute);
    config[TIMER_UNIT_MAP.SECOND].value = prezero(second);
  };

  const onStart = () => {
    if (isDuration) {
      isDuration = false;
      isPause = true;
    } else {
      isDuration = true;
      startTime = Date.now();

      const targetTimestamp = isPause ? (startTime + Number(config[TIMER_UNIT_MAP.HOUR].value) * MS_OF_ONE_HOUR + Number(config[TIMER_UNIT_MAP.MINUTE].value) * MS_OF_ONE_MINUTE + Number(config[TIMER_UNIT_MAP.SECOND].value) *  MS_OF_ONE_SECOND) : (startTime + hour * MS_OF_ONE_HOUR + minute * MS_OF_ONE_MINUTE + second * MS_OF_ONE_SECOND);

      isPause = false;
  
      onUpdateClock({
        targetTimestamp,
        units: [TIMER_UNIT_MAP.HOUR, TIMER_UNIT_MAP.MINUTE, TIMER_UNIT_MAP.SECOND],
        callback: (duration, { isEnd }) => {
          config[TIMER_UNIT_MAP.HOUR].value = prezero(duration[TIMER_UNIT_MAP.HOUR]);
          config[TIMER_UNIT_MAP.MINUTE].value = prezero(duration[TIMER_UNIT_MAP.MINUTE]);
          config[TIMER_UNIT_MAP.SECOND].value = prezero(duration[TIMER_UNIT_MAP.SECOND]);

          if (isEnd) {
            alert('time up');
            isDuration = false;
            isPause = false;
          }

          return isDuration;
        },
        timeType: 'future',
      });
    }
  };

  const onReset = () => {
    config = {
      [TIMER_UNIT_MAP.HOUR]: { value: prezero(0) },
      [TIMER_UNIT_MAP.MINUTE]: { value: prezero(3) },
      [TIMER_UNIT_MAP.SECOND]: { value: prezero(0), isLast: true },
    };
    hour = 0;
    minute = 3;
    second = 0;
    isDuration = false;
    isPause = false;
  };

  const onSetAlarm = () => {
    config[TIMER_UNIT_MAP.HOUR].value = prezero(hour);
    config[TIMER_UNIT_MAP.MINUTE].value = prezero(minute);
    config[TIMER_UNIT_MAP.SECOND].value = prezero(second);
    isDuration = false;
    isPause = false;
  };

  const onHourChange = (e) => {
    if (!e.target.value) {
      hour = 0;
    }
  };

  const onMinuteChange = (e) => {
    if (!e.target.value) {
      minute = 0;
    }
  };

  const onSecondChange = (e) => {
    if (!e.target.value) {
      second = 0;
    }
  };
</script>

<Layout>
  <ToolLayout
    id={TOOL_TIMER_ID.ALARM}
    toolsList={TIMER}
  >
    <div class='tool-panel'>
      <StaticDigitalClock
        config={config}
      />

      <div class='action-wrapper'>
        <ExecuteBtn
          text={isDuration ? 'Stop' : 'Start'}
          style='width: calc(50% - 5px);'
          btnStyle={isDuration ? 'background-color: red; color: #FFF' : ''}
          onConfirm={onStart}
        />
        <ExecuteBtn text='Reset' style='width: calc(50% - 5px);' onConfirm={onReset} disabled={isDuration} />
      </div>

      <div class='setting-wrapper'>
        <div class='setting-inner-wrapper'>
          <div class='setting-hour input-group-sm'>
            <label class='form-label' for='hour'>Hour</label>
            <input class='form-control' type='number' id='hour' min='0' bind:value={hour} on:change={onHourChange} />
          </div>
  
          <div class='setting-minute input-group-sm'>
            <label class='form-label' for='minute'>Minute</label>
            <input class='form-control' type='number' id='minute' min='0' bind:value={minute} on:change={onMinuteChange} />
          </div>
  
          <div class='setting-second input-group-sm'>
            <label class='form-label' for='second'>Second</label>
            <input class='form-control' type='number' id='second' min='0' bind:value={second} on:change={onSecondChange} />
          </div>
        </div>

        <ExecuteBtn text='Set Alarm' style='margin-top: 15px; width: 500px;' onConfirm={onSetAlarm} disabled={isDuration} />
      </div>

      <div class='pre-programmed'>
        <h6>Pre-programmed Alarm</h6>

        <div class='pre-programmed-list'>
          {#each ALARM_PRO_PROGRAMMED_LIST as alarm}
            <button
              class='btn btn-outline-dark btn-sm alarm-item'
              disabled={isDuration}
              on:click={() => onPreProgrammedClick(alarm)}
            >{alarm.text}</button>
          {/each}
        </div>
      </div>
    </div>
  </ToolLayout>
</Layout>

<style>
.action-wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.setting-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.setting-inner-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  text-align: center;
}

.setting-inner-wrapper > * {
  width: 100px;
  margin: 0 10px;
}

.pre-programmed {
  margin-top: 20px;
}

.pre-programmed-list {
  margin-top: 10px;
}

.alarm-item {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
