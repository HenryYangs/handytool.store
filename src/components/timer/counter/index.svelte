<script>
  import { BeForm, BeFormItem } from '@brewer/beerui/be-form';
  import BeDatePicker from '@brewer/beerui/be-date-picker';
  import { BeSelect, BeOption } from '@brewer/beerui/be-select';
  import BeInput from '@brewer/beerui/be-input';
  import { BeCheckboxGroup, BeCheckbox } from '@brewer/beerui/be-checkbox';
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
  $: unitTextColor = '#333333';
  $: lastUnitColor = '#ff0000';
  $: borderColor =  '#adbbda';

  $: units = [TIMER_UNIT_MAP.DAY, TIMER_UNIT_MAP.HOUR, TIMER_UNIT_MAP.MINUTE, TIMER_UNIT_MAP.SECOND];
  $: unitsMap = {};

  $: (() => {
    unitsMap = {};

    const unitsLength = units.length;

    const tmp = [...units].sort((prev, next) => {
      const prevIdx = TIMER_UNIT_LIST.findIndex(item => item === prev);
      const nextIdx = TIMER_UNIT_LIST.findIndex(item => item === next);

      if (prevIdx > nextIdx) return 1;
      if (prevIdx < nextIdx) return -1;
      return 0;
    });

    tmp.forEach((unit, index) => {
      unitsMap[unit] = {
        isLast: index === unitsLength - 1,
        value: 0,
        color: textColor,
        subTextColor: unitTextColor,
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

  const onDateChange = (event) => {
    onDateTimeChange({ date: event.detail });
  };
  const onHourChange = (event) => {
    onDateTimeChange({ hour: event.detail });
  };
  const onMinuteChange = (event) => {
    onDateTimeChange({ minute: event.detail });
  };
  const onSecondChange = (event) => {
    onDateTimeChange({ second: event.detail });
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
  const onUnitTextColorChange = (e) => {
    unitTextColor = e.target.value;
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

<div class='tool-panel timer-wrapper'>
  <section class='timer-area' style={`border-width: ${borderWidth}px; background-color: ${bgColor}; border-color: ${borderColor}`}>
    <header class='header'>
      <h2 style={`color: ${nameColor}`}>{name}</h2>
    </header>

    <StaticDigitalClock config={unitsMap} lastUnitColor={lastUnitColor} showSubText={showUnitName} />
  </section>

  <BeForm labelPosition='top' class='timer-controller'>
    <div class='timer-settings-col'>
      <BeFormItem label={`${$t('Date')}:`}>
        <BeDatePicker bind:value={selectorDate} clearable={false} selectMode="date" on:change={onDateChange} />
      </BeFormItem>

      <div class='timer-settings-row time-wrapper'>
        <BeFormItem label={`${$t('Hour')}:`} class='time-item-wrapper'>
          <BeSelect id='hour' bind:value={selectorHour} on:change={onHourChange}>
            {#each HOUR_LIST as hour}
              <BeOption label={hour} value={hour} />
            {/each}
          </BeSelect>
        </BeFormItem>

        <BeFormItem label={`${$t('Minute')}:`} class='time-item-wrapper'>
          <BeSelect id='minute' bind:value={selectorMinute} on:change={onMinuteChange}>
            {#each MINUTE_SECOND_LIST as minute}
              <BeOption label={minute} value={minute} />
            {/each}
          </BeSelect>
        </BeFormItem>

        <BeFormItem label={`${$t('Second')}:`} class='time-item-wrapper'>
          <BeSelect id='second' bind:value={selectorSecond} on:change={onSecondChange}>
            {#each MINUTE_SECOND_LIST as second}
              <BeOption label={second} value={second} />
            {/each}
          </BeSelect>
        </BeFormItem>
      </div>

      <BeFormItem label={`${$t('timerName')}:`}>
        <BeInput type='text' id='name' bind:value={name} on:change={onNameChange} />
      </BeFormItem>
    </div>

    <div class='timer-settings-col'>
      <BeFormItem label={`${$t('Units')}:`}>
        <BeCheckboxGroup bind:checked={units}>
          {#each TIMER_UNIT_LIST.filter(unit => unit !== TIMER_UNIT_MAP.MILLISECOND) as unit}
            <BeCheckbox label={unit} id={`unit_${unit}`} style='width: 25%'>{$t(unit)}</BeCheckbox>
          {/each}
        </BeCheckboxGroup>
      </BeFormItem>

      <BeFormItem>
        <BeCheckbox bind:checked={showUnitName} id='showUnitName'>{$t('showUnitNames')}</BeCheckbox>
      </BeFormItem>

      <BeFormItem label={`${$t('borderWidth')}:`}>
        <BeInput type='number' min='0' bind:value={borderWidth} />
      </BeFormItem>
    </div>
  
    <div class='timer-settings-col'>
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
        id='unitTextColor'
        label={$t('unitTextColor')}
        bgColor={unitTextColor}
        onChange={onUnitTextColorChange}
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
  </BeForm>
</div>

<style global lang='scss'>
  .timer-wrapper {
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

    .be-form-item__label {
      line-height: 1;
      font-size: 14px;
      font-weight: 700;
    }
  }
</style>
