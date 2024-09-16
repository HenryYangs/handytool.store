<script>
  import Layout from '../../../components/layout/index.svelte';
  import ToolList from '../../../components/tool-list/index.svelte';
  import { VALIDATOR } from '../../../constant/tools';
</script>

<Layout>
  <ToolList
    title='Validator Tools'
    description='Free Validator Tools'
    list={VALIDATOR}
  />
</Layout>
