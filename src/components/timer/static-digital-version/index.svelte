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
  export let showSubText = true;

  $: getColor = (key) => {
    const target = config[key];

    if (!target) return '';

    return target.isLast ? lastUnitColor : target.color;
  };
  $: getSubTextColor = (key) => {
    const target = config[key];

    return target ? target.color : '';
  };
  $: getShowSeparator = (key) => {
    const target = config[key];

    return target ? !target.isLast : false;
  }
</script>

<section class='wrapper' style={style}>
  {#if config[TIMER_UNIT_MAP.YEAR]}
    <DigitalItem
      color={getColor(TIMER_UNIT_MAP.YEAR)}
      value={config[TIMER_UNIT_MAP.YEAR].value}
      showSeparator={getShowSeparator(TIMER_UNIT_MAP.YEAR)}
      subText={showSubText ? TIMER_UNIT_MAP.YEAR : ''}
      subTextColor={getSubTextColor(TIMER_UNIT_MAP.YEAR)}
    />
  {/if}

  {#if config[TIMER_UNIT_MAP.MONTH]}
    <DigitalItem
      color={getColor(TIMER_UNIT_MAP.MONTH)}
      value={config[TIMER_UNIT_MAP.MONTH].value}
      showSeparator={getShowSeparator(TIMER_UNIT_MAP.MONTH)}
      subText={showSubText ? TIMER_UNIT_MAP.MONTH : ''}
      subTextColor={getSubTextColor(TIMER_UNIT_MAP.MONTH)}
    />
  {/if}

  {#if config[TIMER_UNIT_MAP.WEEK]}
    <DigitalItem
      color={getColor(TIMER_UNIT_MAP.WEEK)}
      value={config[TIMER_UNIT_MAP.WEEK].value}
      showSeparator={getShowSeparator(TIMER_UNIT_MAP.WEEK)}
      subText={showSubText ? TIMER_UNIT_MAP.WEEK : ''}
      subTextColor={getSubTextColor(TIMER_UNIT_MAP.WEEK)}
    />
  {/if}

  {#if config[TIMER_UNIT_MAP.DAY]}
    <DigitalItem
      color={getColor(TIMER_UNIT_MAP.DAY)}
      value={config[TIMER_UNIT_MAP.DAY].value}
      showSeparator={getShowSeparator(TIMER_UNIT_MAP.DAY)}
      subText={showSubText ? TIMER_UNIT_MAP.DAY : ''}
      subTextColor={getSubTextColor(TIMER_UNIT_MAP.DAY)}
    />
  {/if}

  {#if config[TIMER_UNIT_MAP.HOUR]}
    <DigitalItem
      color={getColor(TIMER_UNIT_MAP.HOUR)}
      value={config[TIMER_UNIT_MAP.HOUR].value}
      showSeparator={getShowSeparator(TIMER_UNIT_MAP.HOUR)}
      subText={showSubText ? TIMER_UNIT_MAP.HOUR : ''}
      subTextColor={getSubTextColor(TIMER_UNIT_MAP.HOUR)}
    />
  {/if}

  {#if config[TIMER_UNIT_MAP.MINUTE]}
    <DigitalItem
      color={getColor(TIMER_UNIT_MAP.MINUTE)}
      value={config[TIMER_UNIT_MAP.MINUTE].value}
      showSeparator={getShowSeparator(TIMER_UNIT_MAP.MINUTE)}
      subText={showSubText ? TIMER_UNIT_MAP.MINUTE : ''}
      subTextColor={getSubTextColor(TIMER_UNIT_MAP.MINUTE)}
    />
  {/if}

  {#if config[TIMER_UNIT_MAP.SECOND]}
    <DigitalItem
      color={getColor(TIMER_UNIT_MAP.SECOND)}
      value={config[TIMER_UNIT_MAP.SECOND].value}
      showSeparator={getShowSeparator(TIMER_UNIT_MAP.SECOND)}
      subText={showSubText ? TIMER_UNIT_MAP.SECOND : ''}
      subTextColor={getSubTextColor(TIMER_UNIT_MAP.SECOND)}
    />
  {/if}

  {#if config[TIMER_UNIT_MAP.MILLISECOND]}
    <DigitalItem
      color={getColor(TIMER_UNIT_MAP.MILLISECOND)}
      value={config[TIMER_UNIT_MAP.MILLISECOND].value}
      subText={showSubText ? TIMER_UNIT_MAP.MILLISECOND : ''}
      subTextColor={getSubTextColor(TIMER_UNIT_MAP.MILLISECOND)}
    />
  {/if}
</section>

<style>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>
