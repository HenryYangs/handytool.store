<script>
  import Layout from '../../../components/layout/index.svelte';
  import ToolList from '../../../components/tool-list/index.svelte';
  import { CODEC } from '../../../constant/tools';
</script>

<Layout>
  <ToolList
    title='Coder Tools'
    description='Free Codec Tools'
    list={CODEC}
  />
</Layout>
