<script>
  import Layout from '../../../components/layout/index.svelte';
  import ToolList from '../../../components/tool-list/index.svelte';
  import { PURE_TOOLS } from '../../../constant/tools';
</script>

<Layout>
  <ToolList
    title='Tools'
    description='All Free Tools'
    list={PURE_TOOLS.reduce((prev, next) => prev.concat(next.list), [])}
  />
</Layout>
