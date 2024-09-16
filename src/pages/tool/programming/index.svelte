<script>
  import Layout from '../../../components/layout/index.svelte';
  import ToolList from '../../../components/tool-list/index.svelte';
  import { PROGRAMMING } from '../../../constant/tools';
</script>

<Layout>
  <ToolList
    title='Programming Tools'
    description='Free Programming Tools'
    list={PROGRAMMING}
  />
</Layout>
