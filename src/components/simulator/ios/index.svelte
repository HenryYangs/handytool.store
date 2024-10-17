<script>
  import SignalBar from './components/signal-bar/index.svelte';
  import BeIcon from '@brewer/beerui/be-icon';

  import { EVENTS } from '../../../constant/events';
  import { useEventListener } from '../../../utils/hooks/useEventListener';
  import { BATTERY_STATUS_MAP, CARRIER_LIST, DEFAULT_BATTERY_PERCENTAGE, SIGNAL_STRENGTH_IOS, SIGNAL_STRENGTH_IOS_LIST, SIGNAL_TYPE_MAP } from '../../../constant/phone';
  import ICON_PHONE_DIRECTION_IOS from '../../../assets/images/phone/direction-lock.png';
  import ICON_BATTERY from '../../../assets/images/phone/icon-battery.png';
  import ICON_BATTERY_CHARGING from '../../../assets/images/phone/icon-battery-charging.png';
  import { DEFAULT_TIME_HOUR, DEFAULT_TIME_MINUTE } from '../../../constant/timer';

  export let className = '';
  export let styleTransform = '';

  $: signalStrength = Number(SIGNAL_STRENGTH_IOS.Good);
  $: carrier = CARRIER_LIST[0];
  $: signalType = SIGNAL_TYPE_MAP.WIFI;
  $: timeHour = DEFAULT_TIME_HOUR;
  $: timeMinute = DEFAULT_TIME_MINUTE;
  $: showPhoneDirection = false;
  $: batteryPercentage = DEFAULT_BATTERY_PERCENTAGE;
  $: isCharging = false;
  $: batteryWidth = 0;
  $: batteryColor = '';
  $: showBatteryPercentage = true;

  // battery real width and color is relied on charging status
  $: if (isCharging) {
    batteryWidth = 74 - (74 - 26) * (batteryPercentage / 100);
    batteryColor = '#4cd964';
  } else {
    batteryWidth = 49 - (49 - 8) * (batteryPercentage / 100);
    batteryColor = '#000';

    if (batteryPercentage <= 20) {
      batteryColor = '#FFD700';

      if (batteryPercentage <= 10) {
        batteryColor = '#FF3B30';
      }
    }
  }

  const handleSignalStrengthChange = (strength) => {
    signalStrength = Number(strength);
  };

  const handleCarrierChange = (carrierName) => {
    carrier = carrierName;
  };

  const handleSignalTypeChange = (type) => {
    signalType = type;
  };

  const handleDirectionLockChange = (lock) => {
    showPhoneDirection = lock;
  };

  const handleHourChange = (hour) => {
    timeHour = hour;
  };

  const handleMinuteChange = (minute) => {
    timeMinute = minute;
  };

  const handleBatteryChange = (battery) => {
    batteryPercentage = battery;
  };

  const handleBatteryStatusChange = (status) => {
    isCharging = status === BATTERY_STATUS_MAP.Charging;
  };

  const handleShowBatteryPercentageChange = (show) => {
    showBatteryPercentage = show;
  };

  useEventListener(EVENTS.PHONE.SIGNAL_STRENGTH_CHANGE_IOS, handleSignalStrengthChange);
  useEventListener(EVENTS.PHONE.CARRIER_CHANGE, handleCarrierChange);
  useEventListener(EVENTS.PHONE.SIGNAL_TYPE_CHANGE, handleSignalTypeChange);
  useEventListener(EVENTS.PHONE.DIRECTION_LOCK_CHANGE, handleDirectionLockChange);
  useEventListener(EVENTS.PHONE.HOUR_CHANGE, handleHourChange);
  useEventListener(EVENTS.PHONE.MINUTE_CHANGE, handleMinuteChange);
  useEventListener(EVENTS.PHONE.BATTERY_CHANGE, handleBatteryChange);
  useEventListener(EVENTS.PHONE.BATTERY_STATUS_CHANGE, handleBatteryStatusChange);
  useEventListener(EVENTS.PHONE.SHOW_BATTERY_PERCENTAGE_CHANGE, handleShowBatteryPercentageChange);
</script>

<div class={['simulator-ios-wrapper', className].join(' ')}
  style={`transform: scale(0.5) ${styleTransform}`}
>
  <div class='simulator-ios-header layout-between-end'>
    <div class='layout-start-center'>
      <SignalBar strength={signalStrength} />
  
      <span>{carrier}</span>

      <div class='signal-type'>
        {#if signalType === 'WIFI'}
          <BeIcon name='wifi' />
        {:else}
          <span>{signalType}</span>
        {/if}
      </div>
    </div>

    <div class='time'>{timeHour}:{timeMinute}</div>

    <div class='layout-end-center top-right-wrapper'>
      {#if showPhoneDirection}
        <img src={ICON_PHONE_DIRECTION_IOS} alt='phone-direction' />
      {/if}

      {#if showBatteryPercentage}
        <span>{batteryPercentage}%</span>
      {/if}

      <div class='battery-wrapper'>
        {#if isCharging}
          <img src={ICON_BATTERY_CHARGING} alt='battery-charging' />
        {:else}
          <img src={ICON_BATTERY} alt='battery' />
        {/if}

        <div class='battery-percentage' style='right: {batteryWidth}px; background-color: {batteryColor};'></div>
      </div>
    </div>
  </div>

  <div class='simulator-ios-content'>
    <slot name='content'></slot>
  </div>

  <div class='simulator-ios-footer'></div>
</div>

<style lang='scss' global>
  .simulator-ios-wrapper {
    width: 750px;
    height: 1334px;
    transform-origin: top center;
    background-color: var(--white);
    font-size: 20px;

    .simulator-ios-header {
      height: 30px;
      padding: 0 12px;
      background-color: var(--simulator-ios-background-color);

      & > * {
        flex: 1;
        height:  100%;
      }
    }

    .signal-type {
      margin-left: 10px;
    }

    .time {
      line-height: 30px;
      text-align: center;
    }

    .top-right-wrapper {
      & > *:not(:first-child) {
        margin-left: 10px;
      }
    }

    .battery-wrapper {
      position: relative;

      .battery-percentage {
        position: absolute;
        top: 3.5px;
        bottom: 5px;
        left: 3.5px;
        background-color: #000;
        border-radius: 2px;
        transition: all 0.1s linear;
      }
    }
  }
</style>