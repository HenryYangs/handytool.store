<script>
  import StaticDigitalClock from '../../../components/timer/static-digital-version/index.svelte';
  import ColorPalette from '../../../components/color-palette/index.svelte';
  import { HOUR_LIST, MINUTE_SECOND_LIST, TIMER_UNIT_LIST, TIMER_UNIT_MAP } from '../../../constant/timer';
  import { onMount } from 'svelte';
  import { prezero } from '../../../utils/number';
  import { t } from 'svelte-i18n';

  export let initDate = '';
  export let initName = '';
  export let onTimeUpdate = (timestamp, units, callback) => {};

  $: name = '';
  
  $: selectorDate = '';

  $: selectorHour = HOUR_LIST[0];
  $: selectorMinute = MINUTE_SECOND_LIST[0];
  $: selectorSecond = MINUTE_SECOND_LIST[0];

  $: showUnitName = true;
  $: borderWidth = 1;

  $: bgColor = '#ffffff';
  $: nameColor = '#333333';
  $: textColor = '#333333';
  $: lastUnitColor = '#ff0000';
  $: borderColor =  '#adbbda';

  $: units = [TIMER_UNIT_MAP.DAY, TIMER_UNIT_MAP.HOUR, TIMER_UNIT_MAP.MINUTE, TIMER_UNIT_MAP.SECOND];
  $: unitsMap = {};

  $: (() => {
    unitsMap = {};

    const unitsLength = units.length;

    units.forEach((unit, index) => {
      unitsMap[unit] = {
        isLast: index === unitsLength - 1,
        value: 0
      };
    });

    if (selectorDate) {
      onDateTimeChange();
    }
  })();

  const updateClockFields = (key, duration) => {
    if (unitsMap[key]) {
      unitsMap[key].value = key === TIMER_UNIT_MAP.YEAR ? String(duration[key]) : prezero(duration[key]);
    }
  }

  const onDateTimeChange = (props = {}) => {
    const date = props.date || selectorDate;

    if (!date) {
      console.error('error');
      return;
    }

    const hour = props.hour || selectorHour || 0;
    const minute = props.minute || selectorMinute || 0;
    const second = props.second || selectorSecond || 0;

    const targetTime = new Date(`${date} ${hour}:${minute}:${second}`);

    onTimeUpdate({
      targetTimestamp: targetTime.getTime(),
      units, 
      callback: (duration) => {
        updateClockFields(TIMER_UNIT_MAP.YEAR, duration);
        updateClockFields(TIMER_UNIT_MAP.MONTH, duration);
        updateClockFields(TIMER_UNIT_MAP.WEEK, duration);
        updateClockFields(TIMER_UNIT_MAP.DAY, duration);
        updateClockFields(TIMER_UNIT_MAP.HOUR, duration);
        updateClockFields(TIMER_UNIT_MAP.MINUTE, duration);
        updateClockFields(TIMER_UNIT_MAP.SECOND, duration);
      },
    });
  }

  const onDateChange = (e) => {
    onDateTimeChange({ date: e.target.value });
  };
  const onHourChange = (e) => {
    onDateTimeChange({ hour: e.target.value });
  };
  const onMinuteChange = (e) => {
    onDateTimeChange({ minute: e.target.value });
  };
  const onSecondChange = (e) => {
    onDateTimeChange({ second: e.target.value });
  };
  const onNameChange = (value) => {
    name = value;
  };

  const onBgColorChange = (e) => {
    bgColor = e.target.value;
  };
  const onNameColorChange = (e) => {
    nameColor = e.target.value;
  };
  const onTextColorChange = (e) => {
    textColor = e.target.value;
  };
  const onLastUnitColorChange = (e) => {
    lastUnitColor = e.target.value;
  };
  const onBorderColorChange = (e) => {
    borderColor = e.target.value;
  };

  onMount(() => {
    name = initName;
    selectorDate = initDate;
    onDateTimeChange();
  });
</script>

<div class='tool-panel wrapper'>
  <section class='timer-area' style={`border-width: ${borderWidth}px; background-color: ${bgColor}; border-color: ${borderColor}`}>
    <header class='header'>
      <h2 style={`color: ${nameColor}`}>{name}</h2>
    </header>

    <StaticDigitalClock config={unitsMap} lastUnitColor={lastUnitColor} showSubText={showUnitName} />
  </section>

  <section class='timer-controller'>
    <div class='timer-settings-col timer-settings-left'>
      <div class='timer-settings-row date-wrapper'>
        <label for='date' class='form-label'>{$t('Date')}:</label>
        <input type='date' class='form-control' id='date' bind:value={selectorDate} on:change={onDateChange}>
      </div>

      <div class='timer-settings-row time-wrapper'>
        <div class='time-item-wrapper hour-wrapper'>
          <label for='hour' class='form-label'>{$t('Hour')}:</label>
          <select class='form-control' id='hour' bind:value={selectorHour} on:change={onHourChange}>
            {#each HOUR_LIST as hour}
              <option>{hour}</option>
            {/each}
          </select>
        </div>

        <div class='time-item-wrapper minute-wrapper'>
          <label for='minute' class='form-label'>{$t('Minute')}:</label>
          <select class='form-control' id='minute' bind:value={selectorMinute} on:change={onMinuteChange}>
            {#each MINUTE_SECOND_LIST as minute}
              <option>{minute}</option>
            {/each}
          </select>
        </div>

        <div class='time-item-wrapper second-wrapper'>
          <label for='second' class='form-label'>{$t('Second')}:</label>
          <select class='form-control' id='second' bind:value={selectorSecond} on:change={onSecondChange}>
            {#each MINUTE_SECOND_LIST as second}
              <option>{second}</option>
            {/each}
          </select>
        </div>
      </div>

      <div class='timer-settings-row name-wrapper'>
        <label for='name' class='form-label'>{$t('timerName')}:</label>
        <input type='text' class='form-control' id='name' bind:value={name} on:change={onNameChange}>
      </div>
    </div>

    <div class='timer-settings-col timer-settings-center'>
      <div class='timer-settings-row unit-wrapper'>
        <label for='units' class='form-label'>{$t('Units')}:</label>

        <div class='unit-list-wrapper'>
          {#each TIMER_UNIT_LIST.filter(unit => unit !== TIMER_UNIT_MAP.MILLISECOND) as unit}
            <div class='form-check'>
              <input class='form-check-input' type='checkbox' id={`unit_${unit}`} bind:group={units} value={unit}>
              <label class='form-check-label' for={`unit_${unit}`}>
                {$t(unit)}
              </label>
            </div>
          {/each}
        </div>
      </div>

      <div class='timer-settings-row'>
        <input class='form-check-input' type='checkbox' id='showUnitName' bind:checked={showUnitName}>
        <label class='form-check-label' for='showUnitName'>
          {$t('showUnitNames')}
        </label>
      </div>

      <div class='timer-settings-row'>
        <label for='borderWidth' class='form-label'>{$t('borderWidth')}:</label>
        <input type='number' class='form-control' id='borderWidth' min='0' bind:value={borderWidth}>
      </div>
    </div>

    <div class='timer-settings-col timer-settings-right'>
      <ColorPalette
        id='bgColor'
        label={$t('backgroundColor')}
        bgColor={bgColor}
        onChange={onBgColorChange}
      />

      <ColorPalette
        id='nameColor'
        label={$t('nameColor')}
        bgColor={nameColor}
        onChange={onNameColorChange}
      />

      <ColorPalette
        id='textColor'
        label={$t('textColor')}
        bgColor={textColor}
        onChange={onTextColorChange}
      />

      <ColorPalette
        id='lastUnitColor'
        label={$t('lastUnitColor')}
        bgColor={lastUnitColor}
        onChange={onLastUnitColorChange}
      />

      <ColorPalette
        id='borderColor'
        label={$t('borderColor')}
        bgColor={borderColor}
        onChange={onBorderColorChange}
      />
    </div>
  </section>
</div>

<style>
.timer-area {
  padding: 15px;
  border: 1px solid rgba(173, 187, 218, 0.3);
  background-color: var(--white);
}

.timer-area header h2 {
  text-align: center;
  font-size: 40px;
}

.header {
  margin-bottom: 30px;
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

.unit-list-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.unit-list-wrapper > * {
  width: 25%;
}
</style>
