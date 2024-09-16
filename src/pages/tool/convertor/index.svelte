<script>
  import Layout from '../../../components/layout/index.svelte';
  import ToolList from '../../../components/tool-list/index.svelte';
  import { CONVERTOR } from '../../../constant/tools';
</script>

<Layout>
  <ToolList
    title='Convertor Tools'
    description='Free Text, Unit Convertor Tools'
    list={CONVERTOR}
  />
</Layout>
