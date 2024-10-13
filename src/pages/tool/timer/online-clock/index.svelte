<script>
  import { onMount } from 'svelte';
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import StaticDigitalClock from '../../../../components/timer/static-digital-version/index.svelte';
  import { CATEGORY } from '../../../../constant/tools';
  import { MONTH_NAME_MAP } from '../../../../constant/timer/month';
  import { DAY_NAME_MAP } from '../../../../constant/timer/day';
  import { prezero } from '../../../../utils/number';
  import { loop } from '../../../../utils/browser';
  import { TIMER_UNIT_MAP } from '../../../../constant/timer';
  import { date, locale, t } from 'svelte-i18n';

  $: year = '';
  $: monthDate = '';
  $: day = '';

  $: subText = '';

  $: clockConfig = {
    [TIMER_UNIT_MAP.HOUR]: { value: prezero(0) },
    [TIMER_UNIT_MAP.MINUTE]: { value: prezero(0) },
    [TIMER_UNIT_MAP.SECOND]: { value: prezero(0), isLast: true },
  };

  onMount(() => {
    const updateClock = () => {
      const d = new Date();

      year = String(d.getFullYear());
      monthDate = `${MONTH_NAME_MAP[d.getMonth()]} ${prezero(d.getDate())}`,
      day = DAY_NAME_MAP[d.getDay()];

      if ($locale) {
        subText = $date(new Date(), { locale: $locale, format: 'full' });
      }

      clockConfig[TIMER_UNIT_MAP.HOUR].value = prezero(d.getHours());
      clockConfig[TIMER_UNIT_MAP.MINUTE].value = prezero(d.getMinutes());
      clockConfig[TIMER_UNIT_MAP.SECOND].value = prezero(d.getSeconds());

      loop(updateClock);
    }

    loop(updateClock);
  });
</script>

<Layout>
  <ToolLayout
    id='online-clock'
    category={CATEGORY.TIMER}
  >
    <section class='tool-panel'>
      <div>
        <div class='part-wrapper time-wrapper'>
          <StaticDigitalClock
            config={clockConfig}
            showSubText={false}
          />
        </div>

        <div class='part-wrapper date-wrapper'>
          <p>{subText}</p>
        </div>
      </div>
    </section>
  </ToolLayout>
</Layout>

<style global lang='scss'>
.part-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.part-wrapper p {
  font-size: 50px;
}

.part-wrapper + * {
  line-height: 1;
  vertical-align: baseline;
}

.date-wrapper {
  margin-top: 20px;
}
</style>
