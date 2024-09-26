<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import Counter from '../../../../components/timer/counter/index.svelte';
  import { CATEGORY } from '../../../../constant/tools';
  import { onUpdateClock } from '../../../../utils/timer';
  import { prezero } from '../../../../utils/number';
  import { t } from 'svelte-i18n';

  const now = new Date();

  const updateClock = (props) => {
    onUpdateClock({ ...props, timeType: 'future' });
  }
</script>

<Layout>
  <ToolLayout
    id='countdown'
    category={CATEGORY.TIMER}
  >
    <Counter
      initName={$t('Countdown')}
      onTimeUpdate={updateClock}
      initDate={`${now.getFullYear() + 10}-${prezero(now.getMonth())}-${prezero(now.getDate())}`}
    />
  </ToolLayout>
</Layout>
