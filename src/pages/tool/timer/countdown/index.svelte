<script>
  import { onMount } from 'svelte';
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import { TIMER, TOOL_TIMER_ID } from '../../../../constant/tools';
  import { loop } from '../../../../utils/browser';
  import { prezero } from '../../../../utils/number';
  import { calcDiffTime } from '../../../../utils/timer';
  import { HOUR_LIST, MINUTE_SECOND_LIST, TIMER_UNIT_LIST, TIMER_UNIT_MAP } from '../../../../constant/timer';

  $: name = 'Countdown Timer';
  $: year = '';
  $: month = '';
  $: week = '';
  $: day = '';
  $: hour = '';
  $: minute = '';
  $: second = '';

  $: selectorDate = '2124-09-12';
  $: selectorHour = HOUR_LIST[0];
  $: selectorMinute = MINUTE_SECOND_LIST[0];
  $: selectorSecond = MINUTE_SECOND_LIST[0];

  $: units = [TIMER_UNIT_MAP.DAY, TIMER_UNIT_MAP.HOUR, TIMER_UNIT_MAP.MINUTE, TIMER_UNIT_MAP.SECOND];
  $: unitsMap = {};

  $: (() => {
    unitsMap = {};

    const unitsLength = units.length;

    units.forEach((unit, index) => {
      unitsMap[unit] = {
        isLast: index === unitsLength - 1,
      };
    });
  })()

  $: showUnitName = true;
  $: borderWidth = 1;

  $: bgColor = '#ffffff';
  $: nameColor = '#333333';
  $: textColor = '#333333';
  $: lastUnitColor = '#ff0000'
  $: borderColor =  '#adbbda';

  const updateClock = (targetTimestamp) => {
    const now = Date.now();
    const duration = calcDiffTime(targetTimestamp - now, ...units);

    year = String(duration.year);
    month = prezero(duration.month);
    week = prezero(duration.week);
    day = prezero(duration.day);
    hour = prezero(duration.hour);
    minute = prezero(duration.minute);
    second = prezero(duration.second);

    loop(() => updateClock(targetTimestamp));
  }

  const onValueChange = (props = {}) => {
    const date = props.date || selectorDate;

    if (!date) {
      console.error('error');
      return;
    }

    const hour = props.hour || selectorHour || 0;
    const minute = props.minute || selectorMinute || 0;
    const second = props.second || selectorSecond || 0;

    const targetTime = new Date(`${date} ${hour}:${minute}:${second}`);

    updateClock(targetTime.getTime());
  }

  const onDateChange = (e) => {
    onValueChange({ date: e.target.value });
  }
  const onHourChange = (e) => {
    onValueChange({ hour: e.target.value });
  };
  const onMinuteChange = (e) => {
    onValueChange({ minute: e.target.value });
  };
  const onSecondChange = (e) => {
    onValueChange({ second: e.target.value });
  };
  const onNameChange = (value) => {
    name = value;
  }

  onMount(() => {
    onValueChange();
  });

  const onColorPanelFocus = (targetId) => {
    document.getElementById(targetId).click();
  }

  const onColorPanelChange = (e) => {
    console.log('e=====', e.target.value)
  }
</script>

<Layout>
  <ToolLayout
    id={TOOL_TIMER_ID.COUNTDOWN}
    toolsList={TIMER}
  >
    <div class='tool-panel wrapper'>
      <section class='timer-area' style={`border-width: ${borderWidth}px; background-color: ${bgColor}; border-color: ${borderColor}`}>
        {#if showUnitName}
          <header>
            <h2 style={`color: ${nameColor}`}>{name}</h2>
          </header>
        {/if}

        <div class='timer-render-area'>
          {#if unitsMap[TIMER_UNIT_MAP.YEAR]}
            <div class='year-wrapper'>
              <p class='timer_main-text year-number' style={`color: ${unitsMap[TIMER_UNIT_MAP.YEAR].isLast ? lastUnitColor : textColor}`}>{year}</p>
              <p class='timer_sub-text year-text' style={`color: ${textColor}`}>year</p>
            </div>

            {#if !unitsMap[TIMER_UNIT_MAP.YEAR].isLast}
              <span class='separator timer_main-text' style={`color: ${textColor}`}>:</span>
            {/if}
          {/if}

          {#if unitsMap[TIMER_UNIT_MAP.MONTH]}
            <div class='month-wrapper' style={`color: ${unitsMap[TIMER_UNIT_MAP.MONTH].isLast ? lastUnitColor : textColor}`}>
              <p class='timer_main-text month-number'>{month}</p>
              <p class='timer_sub-text month-text' style={`color: ${textColor}`}>month</p>
            </div>

            {#if !unitsMap[TIMER_UNIT_MAP.MONTH].isLast}
              <span class='separator timer_main-text' style={`color: ${textColor}`}>:</span>
            {/if}
          {/if}

          {#if unitsMap[TIMER_UNIT_MAP.WEEK]}
            <div class='week-wrapper' style={`color: ${unitsMap[TIMER_UNIT_MAP.WEEK].isLast ? lastUnitColor : textColor}`}>
              <p class='timer_main-text week-number'>{week}</p>
              <p class='timer_sub-text week-text' style={`color: ${textColor}`}>week</p>
            </div>

            {#if !unitsMap[TIMER_UNIT_MAP.WEEK].isLast}
              <span class='separator timer_main-text' style={`color: ${textColor}`}>:</span>
            {/if}
          {/if}

          {#if unitsMap[TIMER_UNIT_MAP.DAY]}
            <div class='day-wrapper' style={`color: ${unitsMap[TIMER_UNIT_MAP.DAY].isLast ? lastUnitColor : textColor}`}>
              <p class='timer_main-text day-number'>{day}</p>
              <p class='timer_sub-text day-text' style={`color: ${textColor}`}>day</p>
            </div>

            {#if !unitsMap[TIMER_UNIT_MAP.DAY].isLast}
              <span class='separator timer_main-text' style={`color: ${textColor}`}>:</span>
            {/if}
          {/if}

          {#if unitsMap[TIMER_UNIT_MAP.HOUR]}
            <div class='hour-wrapper' style={`color: ${unitsMap[TIMER_UNIT_MAP.HOUR].isLast ? lastUnitColor : textColor}`}>
              <p class='timer_main-text hour-number'>{hour}</p>
              <p class='timer_sub-text hour-text' style={`color: ${textColor}`}>hour</p>
            </div>

            {#if !unitsMap[TIMER_UNIT_MAP.HOUR].isLast}
              <span class='separator timer_main-text' style={`color: ${textColor}`}>:</span>
            {/if}
          {/if}

          {#if unitsMap[TIMER_UNIT_MAP.MINUTE]}
            <div class='minute-wrapper' style={`color: ${unitsMap[TIMER_UNIT_MAP.MINUTE].isLast ? lastUnitColor : textColor}`}>
              <p class='timer_main-text minute-number'>{minute}</p>
              <p class='timer_sub-text minute-text' style={`color: ${textColor}`}>minute</p>
            </div>

            {#if !unitsMap[TIMER_UNIT_MAP.MINUTE].isLast}
              <span class='separator timer_main-text' style={`color: ${textColor}`}>:</span>
            {/if}
          {/if}

          {#if unitsMap[TIMER_UNIT_MAP.SECOND]}
            <div class='second-wrapper'>
              <p class='timer_main-text second-number' style={`color: ${lastUnitColor}`}>{second}</p>
              <p class='timer_sub-text second-text' style={`color: ${textColor}`}>second</p>
            </div>
          {/if}
        </div>
      </section>

      <section class='timer-controller'>
        <div class='timer-settings-col timer-settings-left'>
          <div class='timer-settings-row date-wrapper'>
            <label for='date' class='form-label'>Date:</label>
            <input type='date' class='form-control' id='date' bind:value={selectorDate} on:change={onDateChange}>
          </div>

          <div class='timer-settings-row time-wrapper'>
            <div class='time-item-wrapper hour-wrapper'>
              <label for='hour' class='form-label'>Hour:</label>
              <select class='form-control' id='hour' bind:value={selectorHour} on:change={onHourChange}>
                {#each HOUR_LIST as hour}
                  <option>{hour}</option>
                {/each}
              </select>
            </div>

            <div class='time-item-wrapper minute-wrapper'>
              <label for='minute' class='form-label'>Minute:</label>
              <select class='form-control' id='minute' bind:value={selectorMinute} on:change={onMinuteChange}>
                {#each MINUTE_SECOND_LIST as minute}
                  <option>{minute}</option>
                {/each}
              </select>
            </div>

            <div class='time-item-wrapper second-wrapper'>
              <label for='second' class='form-label'>Second:</label>
              <select class='form-control' id='second' bind:value={selectorSecond} on:change={onSecondChange}>
                {#each MINUTE_SECOND_LIST as second}
                  <option>{second}</option>
                {/each}
              </select>
            </div>
          </div>

          <div class='timer-settings-row name-wrapper'>
            <label for='name' class='form-label'>Name:</label>
            <input type='text' class='form-control' id='name' bind:value={name} on:change={onNameChange} disabled={!showUnitName}>
          </div>

          <div class='timer-settings-row action-wrapper'>
            <p class='form-label'>On finish:</p>

            <input class='form-check-input' type='radio' name='onFinish' id='stop' checked>
            <label class='form-check-label' for='stop'>Stop Counting</label>

            <input class='form-check-input' type='radio' name='onFinish' id='start'>
            <label class='form-check-label' for='start'>Start Counting</label>
          </div>
        </div>

        <div class='timer-settings-col timer-settings-center'>
          <div class='timer-settings-row unit-wrapper'>
            <label for='units' class='form-label'>Units:</label>

            <select multiple name='unit' id='units' class='form-control units-selector' size='7' bind:value={units}>
              {#each TIMER_UNIT_LIST as unit}
                <option value={unit}>{unit}</option>
              {/each}
            </select>
          </div>

          <div class='timer-settings-row'>
            <input class='form-check-input' type='checkbox' value='' id='showUnitName' bind:checked={showUnitName}>
            <label class='form-check-label' for='showUnitName'>
              Show Unit Names
            </label>
          </div>

          <div class='timer-settings-row'>
            <label for='borderWidth' class='form-label'>Border Width:</label>
            <input type='number' class='form-control' id='borderWidth' min='0' bind:value={borderWidth}>
          </div>
        </div>

        <div class='timer-settings-col timer-settings-right'>
          <div class='timer-settings-row input-group-sm color-panel-wrapper'>
            <label for='bgColor' class='form-label'>Background Color:</label>
            <input type='text' class='form-control' style={`background-color: ${bgColor}`} bind:value={bgColor} on:focus={() => onColorPanelFocus('bgColor')} />
            <input type='color' class='form-control color-panel' id='bgColor' on:change={e => { bgColor = e.target.value }}>
          </div>

          <div class='timer-settings-row input-group-sm color-panel-wrapper'>
            <label for='nameColor' class='form-label'>Name Color:</label>
            <input type='text' class='form-control' style={`background-color: ${nameColor}`} bind:value={nameColor} on:focus={() => onColorPanelFocus('nameColor')} />
            <input type='color' class='form-control color-panel' id='nameColor' on:change={e => { nameColor = e.target.value }}>
          </div>

          <div class='timer-settings-row input-group-sm color-panel-wrapper'>
            <label for='textColor' class='form-label'>Text Color:</label>
            <input type='text' class='form-control' style={`background-color: ${textColor}`} bind:value={textColor} on:focus={() => onColorPanelFocus('textColor')} />
            <input type='color' class='form-control color-panel' id='textColor' on:change={e => { textColor = e.target.value }}>
          </div>

          <div class='timer-settings-row input-group-sm color-panel-wrapper'>
            <label for='lastUnitColor' class='form-label'>Last Unit Color:</label>
            <input type='text' class='form-control' style={`background-color: ${lastUnitColor}`} bind:value={lastUnitColor} on:focus={() => onColorPanelFocus('lastUnitColor')} />
            <input type='color' class='form-control color-panel' id='lastUnitColor' on:change={e => { lastUnitColor = e.target.value }}>
          </div>

          <div class='timer-settings-row input-group-sm color-panel-wrapper'>
            <label for='borderColor' class='form-label'>Border Color:</label>
            <input type='text' class='form-control' bind:value={borderColor} on:focus={() => onColorPanelFocus('borderColor')} />
            <input type='color' class='form-control color-panel' id='borderColor' on:change={e => { borderColor = e.target.value }}>
          </div>
      </div>
      </section>
    </div>
  </ToolLayout>
</Layout>

<style>
.wrapper input[type='color'] {
  width: 150px;
}

.timer-area {
  padding: 15px;
  border: 1px solid rgba(173, 187, 218, 0.3);
  background-color: #FFF;
}

.timer-area header h2 {
  text-align: center;
  font-size: 40px;
}

.timer-render-area {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 30px;
}

.timer_main-text {
  font-size: 100px;
  font-weight: 500;
}

.separator {
  margin: 0 10px;
}

.timer_sub-text {
  text-align: center;
  font-size: 25px;
  font-weight: 400;
}

.timer-controller {
  display: flex;
  align-items: flex-start;
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid rgba(173, 187, 218, 0.3);
}

.time-wrapper {
  display: flex;
}

.timer-settings-row {
  margin-top: 15px;
}

.time-item-wrapper {
  flex: 1;
}

.time-item-wrapper + .time-item-wrapper {
  margin-left: 10px;
}

.timer-settings-col {
  flex: 1;
}

.timer-settings-col + .timer-settings-col {
  margin-left: 30px;
}

.units-selector {
  width: 100%;
}

.color-panel-wrapper {
  position: relative;
}

.color-panel {
  position: absolute;
  top: 30px;
  left: 0;
  opacity: 0;
}
</style>
