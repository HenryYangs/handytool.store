<script>
  import { BeForm, BeFormItem } from '@brewer/beerui/be-form';
  import { BeSelect, BeOption } from '@brewer/beerui/be-select';
  import BeSwitch from '@brewer/beerui/be-switch';
  import { t } from 'svelte-i18n';
  import { DEFAULT_TIME_HOUR, DEFAULT_TIME_MINUTE, HOUR_LIST, MINUTE_SECOND_LIST } from '../../../../constant/timer';
  import { BATTERY_STATUS_LIST, CARRIER_LIST, SIGNAL_TYPE_LIST, SIGNAL_TYPE_MAP, SIGNAL_STRENGTH_IOS_LIST, DEFAULT_BATTERY_PERCENTAGE, SIGNAL_STRENGTH_IOS } from '../../../../constant/phone';
  import event from '../../../../utils/event';
  import { EVENTS } from '../../../../constant/events';

  $: signalStrength = SIGNAL_STRENGTH_IOS.Good;
  $: carrier = CARRIER_LIST[0];
  $: signalType = SIGNAL_TYPE_MAP.WIFI;
  $: hour = DEFAULT_TIME_HOUR;
  $: minute = DEFAULT_TIME_MINUTE;
  $: directionLock = false;
  $: battery = DEFAULT_BATTERY_PERCENTAGE;
  $: batteryStatus = BATTERY_STATUS_LIST[0];
  $: showBatteryPercentage = true;

  const handleSignalStrengthChange = (e) => {
    event.emit(EVENTS.PHONE.SIGNAL_STRENGTH_CHANGE_IOS, Number(e.detail));
  };

  const handleCarrierChange = (e) => {
    event.emit(EVENTS.PHONE.CARRIER_CHANGE, e.detail);
  };

  const handleSignalTypeChange = (e) => {
    event.emit(EVENTS.PHONE.SIGNAL_TYPE_CHANGE, e.detail);
  };
  
  const handleDirectionLockChange = (e) => {
    event.emit(EVENTS.PHONE.DIRECTION_LOCK_CHANGE, e.detail);
  };

  const handleHourChange = (e) => {
    event.emit(EVENTS.PHONE.HOUR_CHANGE, e.detail);
  };

  const handleMinuteChange = (e) => {
    event.emit(EVENTS.PHONE.MINUTE_CHANGE, e.detail);
  };

  const handleBatteryChange = (e) => {
    event.emit(EVENTS.PHONE.BATTERY_CHANGE, Number(e.target.value) || 0);
  };

  const handleBatteryStatusChange = (e) => {
    event.emit(EVENTS.PHONE.BATTERY_STATUS_CHANGE, e.detail);
  };

  const handleShowBatteryPercentageChange = (e) => {
    event.emit(EVENTS.PHONE.SHOW_BATTERY_PERCENTAGE_CHANGE, e.detail);
  };
</script>

<div class='appearance-wrapper'>
  <BeForm labelWidth='120px'>
    <BeFormItem label={`${$t('Signal Strength')}:`}>
      <BeSelect bind:value={signalStrength} size='mini' on:change={handleSignalStrengthChange}>
        {#each SIGNAL_STRENGTH_IOS_LIST as signal}
          <BeOption value={signal.value} label={`${$t(signal.label)}`} />
        {/each}
      </BeSelect>
    </BeFormItem>

    <BeFormItem label={`${$t('Carrier')}:`}>
      <BeSelect bind:value={carrier} size='mini' on:change={handleCarrierChange}>
        {#each CARRIER_LIST as carrierOption}
          <BeOption value={carrierOption} label={carrierOption} />
        {/each}
      </BeSelect>
    </BeFormItem>

    <BeFormItem label={`${$t('Signal Type')}:`}>
      <BeSelect bind:value={signalType} size='mini' on:change={handleSignalTypeChange}>
        {#each SIGNAL_TYPE_LIST as type}
          <BeOption value={type.value} label={`${$t(type.label)}`} />
        {/each}
      </BeSelect>
    </BeFormItem>

    <BeFormItem label={`${$t('Time')}:`} class='time'>
      <BeSelect bind:value={hour} size='mini' on:change={handleHourChange}>
        {#each HOUR_LIST as h}
          <BeOption value={h} label={h} />
        {/each}
      </BeSelect>
      
      <BeSelect bind:value={minute} size='mini' on:change={handleMinuteChange}>
        {#each MINUTE_SECOND_LIST as m}
          <BeOption value={m} label={m} />
        {/each}
      </BeSelect>
    </BeFormItem>

    <BeFormItem label={`${$t('Direction Lock')}:`}>
      <BeSwitch bind:checked={directionLock} on:change={handleDirectionLockChange} />
    </BeFormItem>

    <BeFormItem label={`${$t('Battery Level')}:`}>
      <input type='range' min='1' max='100' bind:value={battery} on:change={handleBatteryChange} />
    </BeFormItem>

    <BeFormItem class='layout-start-center'>
      <BeFormItem label={`${$t('Battery Status')}`}>
        <BeSelect bind:value={batteryStatus.value} size='mini' on:change={handleBatteryStatusChange}>
          {#each BATTERY_STATUS_LIST as status}
            <BeOption value={status.value} label={`${$t(status.label)}`} />
          {/each}
        </BeSelect>
      </BeFormItem>

      <BeFormItem label={`${$t('Battery Percentage')}`}>
        <BeSwitch bind:checked={showBatteryPercentage} on:change={handleShowBatteryPercentageChange} />
      </BeFormItem>
    </BeFormItem>
  </BeForm>
</div>

<style lang='scss' global>
  @import '../../../../assets/style/layout/_mixin.scss';

  .appearance-wrapper {
    .time {
      .be-form-item__content {
        @include layout-start-center;

        & > *:not(:first-child) {
          margin-left: 10px;
        }
      }
    }
  }
</style>