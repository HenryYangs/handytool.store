<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import { TIMER, TOOL_TIMER_ID } from '../../../../constant/tools';
</script>

<Layout>
  <ToolLayout
    id={TOOL_TIMER_ID.COUNTDOWN}
    toolsList={TIMER}
  ></ToolLayout>
</Layout>
