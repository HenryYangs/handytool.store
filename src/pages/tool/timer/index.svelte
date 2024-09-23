<script>
  import Layout from '../../../components/layout/index.svelte';
  import ToolList from '../../../components/tool-list/index.svelte';
  import { CATEGORY } from '../../../constant/tools';
</script>

<Layout>
  <ToolList
    id={CATEGORY.TIMER}
    title='Timer Tools'
    description='Free Timer Tools'
  />
</Layout>
