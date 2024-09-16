<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import Counter from '../../../../components/timer/counter/index.svelte';
  import { TIMER, TOOL_TIMER_ID } from '../../../../constant/tools';
  import { onUpdateClock } from '../../../../utils/timer';
  import { prezero } from '../../../../utils/number';

  const now = new Date();

  const updateClock = (props) => {
    onUpdateClock({ ...props, timeType: 'past' });
  }
</script>

<Layout>
  <ToolLayout
    id={TOOL_TIMER_ID.COUNT_TIMER}
    toolsList={TIMER}
  >
    <Counter
      initName='Count Timer'
      onTimeUpdate={updateClock}
      initDate={`${now.getFullYear() - 10}-${prezero(now.getMonth())}-${prezero(now.getDate())}`}
    />
  </ToolLayout>
</Layout>
