<script>
  import { BeForm, BeFormItem } from '@brewer/beerui/be-form';
  import { BeSelect, BeOption } from '@brewer/beerui/be-select';
  import BeSwitch from '@brewer/beerui/be-switch';
  import { t } from 'svelte-i18n';
  import { BATTERY_STATUS_LIST, CARRIER_LIST, SIGNAL_STRENGTH_LIST, SIGNAL_TYPE_LIST } from './config';
  import { HOUR_LIST, MINUTE_SECOND_LIST } from '../../../../constant/timer';

  $: signalStrength = '';
  $: carrier = '';
  $: signalType = '';
  $: hour = '';
  $: minute = '';
  $: directionLock = false;
  $: battery = 60;
  $: batteryStatus = BATTERY_STATUS_LIST[0];
  $: showBatteryPercentage = true;
</script>

<div class='appearance-wrapper'>
  <BeForm labelWidth='120px'>
    <BeFormItem label={`${$t('Signal Strength')}:`}>
      <BeSelect bind:value={signalStrength} size='mini'>
        {#each SIGNAL_STRENGTH_LIST as signal}
          <BeOption value={signal} label={signal} />
        {/each}
      </BeSelect>
    </BeFormItem>

    <BeFormItem label={`${$t('Carrier')}:`}>
      <BeSelect bind:value={carrier} size='mini'>
        {#each CARRIER_LIST as carrierOption}
          <BeOption value={carrierOption} label={carrierOption} />
        {/each}
      </BeSelect>
    </BeFormItem>

    <BeFormItem label={`${$t('Signal Type')}:`}>
      <BeSelect bind:value={signalType} size='mini'>
        {#each SIGNAL_TYPE_LIST as type}
          <BeOption value={type} label={`${$t(type)}`} />
        {/each}
      </BeSelect>
    </BeFormItem>

    <BeFormItem label={`${$t('Time')}:`} class='time'>
      <BeSelect bind:value={hour} size='mini'>
        {#each HOUR_LIST as h}
          <BeOption value={h} label={h} />
        {/each}
      </BeSelect>
      
      <BeSelect bind:value={minute} size='mini'>
        {#each MINUTE_SECOND_LIST as m}
          <BeOption value={m} label={m} />
        {/each}
      </BeSelect>
    </BeFormItem>

    <BeFormItem label={`${$t('Direction Lock')}:`}>
      <BeSwitch bind:checked={directionLock} />
    </BeFormItem>

    <BeFormItem label={`${$t('Battery Level')}:`}>
      <input type='range' min='0' max='100' bind:value={battery} />
    </BeFormItem>

    <BeFormItem class='layout-start-center'>
      <BeFormItem label={`${$t('Battery Status')}`}>
        <BeSelect bind:value={batteryStatus} size='mini'>
          {#each BATTERY_STATUS_LIST as status}
            <BeOption value={status} label={`${$t(status)}`} />
          {/each}
        </BeSelect>
      </BeFormItem>

      <BeFormItem label={`${$t('Battery Percentage')}`}>
        <BeSwitch bind:checked={showBatteryPercentage} />
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