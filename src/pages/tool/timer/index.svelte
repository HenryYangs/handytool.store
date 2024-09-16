<script>
  import Layout from '../../../components/layout/index.svelte';
  import ToolList from '../../../components/tool-list/index.svelte';
  import { TIMER } from '../../../constant/tools';
</script>

<Layout>
  <ToolList
    title='Timer Tools'
    description='Free Timer Tools'
    list={TIMER}
  />
</Layout>
