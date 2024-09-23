<script>
  import Layout from '../../../components/layout/index.svelte';
  import ToolList from '../../../components/tool-list/index.svelte';
  import { CATEGORY } from '../../../constant/tools';
</script>

<Layout>
  <ToolList
    id={CATEGORY.CODEC}
    title='Coder Tools'
    description='Free Codec Tools'
  />
</Layout>
