<script>
  import DigitalItem from './digital-item/index.svelte';
  import { TIMER_UNIT_MAP } from '../../../constant/timer';

  /**
   * fields:
   * value
   * isLast
   */
  export let config;
  export let lastUnitColor = '';
  export let style = '';

  $: getColor = (key) => {
    const target = config[key];

    if (!target) return '';

    return target.isLast ? lastUnitColor : target.color;
  };
  $: getSubTextColor = (key) => {
    const target = config[key];

    return target ? target.color : '';
  };
  $: getValue = (key) => {
    const target = config[key];

    return target ? target.value : '';
  };
  $: getShowSeparator = (key) => {
    const target = config[key];

    return target ? !target.isLast : false;
  }
</script>

<section class='wrapper' style={style}>
  <DigitalItem
    show={config[TIMER_UNIT_MAP.YEAR]}
    color={getColor(TIMER_UNIT_MAP.YEAR)}
    value={getValue(TIMER_UNIT_MAP.YEAR)}
    showSeparator={getShowSeparator(TIMER_UNIT_MAP.YEAR)}
    subText={TIMER_UNIT_MAP.YEAR}
    subTextColor={getSubTextColor(TIMER_UNIT_MAP.YEAR)}
  />

  <DigitalItem
    show={config[TIMER_UNIT_MAP.MONTH]}
    color={getColor(TIMER_UNIT_MAP.MONTH)}
    value={getValue(TIMER_UNIT_MAP.MONTH)}
    showSeparator={getShowSeparator(TIMER_UNIT_MAP.MONTH)}
    subText={TIMER_UNIT_MAP.MONTH}
    subTextColor={getSubTextColor(TIMER_UNIT_MAP.MONTH)}
  />

  <DigitalItem
    show={config[TIMER_UNIT_MAP.WEEK]}
    color={getColor(TIMER_UNIT_MAP.WEEK)}
    value={getValue(TIMER_UNIT_MAP.WEEK)}
    showSeparator={getShowSeparator(TIMER_UNIT_MAP.WEEK)}
    subText={TIMER_UNIT_MAP.WEEK}
    subTextColor={getSubTextColor(TIMER_UNIT_MAP.WEEK)}
  />

  <DigitalItem
    show={config[TIMER_UNIT_MAP.DAY]}
    color={getColor(TIMER_UNIT_MAP.DAY)}
    value={getValue(TIMER_UNIT_MAP.DAY)}
    showSeparator={getShowSeparator(TIMER_UNIT_MAP.DAY)}
    subText={TIMER_UNIT_MAP.DAY}
    subTextColor={getSubTextColor(TIMER_UNIT_MAP.DAY)}
  />

  <DigitalItem
    show={config[TIMER_UNIT_MAP.HOUR]}
    color={getColor(TIMER_UNIT_MAP.HOUR)}
    value={getValue(TIMER_UNIT_MAP.HOUR)}
    showSeparator={getShowSeparator(TIMER_UNIT_MAP.HOUR)}
    subText={TIMER_UNIT_MAP.HOUR}
    subTextColor={getSubTextColor(TIMER_UNIT_MAP.HOUR)}
  />

  <DigitalItem
    show={config[TIMER_UNIT_MAP.MINUTE]}
    color={getColor(TIMER_UNIT_MAP.MINUTE)}
    value={getValue(TIMER_UNIT_MAP.MINUTE)}
    showSeparator={getShowSeparator(TIMER_UNIT_MAP.MINUTE)}
    subText={TIMER_UNIT_MAP.MINUTE}
    subTextColor={getSubTextColor(TIMER_UNIT_MAP.MINUTE)}
  />

  <DigitalItem
    show={config[TIMER_UNIT_MAP.SECOND]}
    color={getColor(TIMER_UNIT_MAP.SECOND)}
    value={getValue(TIMER_UNIT_MAP.SECOND)}
    subText={TIMER_UNIT_MAP.SECOND}
    subTextColor={getSubTextColor(TIMER_UNIT_MAP.SECOND)}
  />
</section>

<style>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>
