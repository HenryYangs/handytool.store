<script>
  import { onMount } from 'svelte';
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import { TIMER, TOOL_TIMER_ID } from '../../../../constant/tools';
  import { MONTH_NAME_MAP } from '../../../../utils/timer/month';
  import { DAY_NAME_MAP } from '../../../../utils/timer/day';
  import { prezero } from '../../../../utils/number';
  import { loop } from '../../../../utils/browser';

  $: year = '';
  $: monthDate = '';
  $: day = '';
  $: hour = '';
  $: minute = '';
  $: second = '';

  onMount(() => {
    const updateClock = () => {
      const d = new Date();

      year = String(d.getFullYear());
      monthDate = MONTH_NAME_MAP[d.getMonth()],
      day = DAY_NAME_MAP[d.getDay()],
      hour = prezero(d.getHours());
      minute = prezero(d.getMinutes());
      second = prezero(d.getSeconds());

      loop(updateClock);
    }

    loop(updateClock);
  });
</script>

<Layout>
  <ToolLayout
    id={TOOL_TIMER_ID.ONLINE_CLOCK}
    toolsList={TIMER}
    description='Show the current time'
  >
    <section class='tool-panel'>
      <div class='wrapper'>
        <div class='part-wrapper time-wrapper'>
          <h1 class='hour'>{hour}</h1>
          <h1 class='separator'>:</h1>
          <h1 class='minute'>{minute}</h1>
          <h1 class='separator'>:</h1>
          <h1 class='second'>{second}</h1>
        </div>

        <div class='part-wrapper date-wrapper'>
          <h3 class='day'>{day}</h3>
          <h3 class='separator'>.</h3>
          <h3 class='month-date'>{monthDate}</h3>
          <h3 class='separator'>.</h3>
          <h3 class='year'>{year}</h3>
        </div>
      </div>
    </section>
  </ToolLayout>
</Layout>

<style>
.wrapper {
  padding: 40px 20px 20px;
}

.part-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.part-wrapper h1 {
  font-size: 150px;
}

.part-wrapper h3 {
  font-size: 50px;
}

.part-wrapper + * {
  line-height: 1;
  vertical-align: baseline;
}

.date-wrapper {
  margin-top: 20px;
}

.date-wrapper .separator {
  margin: 0 10px;
}
</style>
