<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import AlipayBalance from '../../../../components/generator/alipay/balance/index.svelte';
  import { CATEGORY } from '../../../../constant/tools';
</script>

<Layout>
  <ToolLayout
    id='alipay-balance'
    category={CATEGORY.GENERATOR}
  >
    <AlipayBalance />
  </ToolLayout>
</Layout>
