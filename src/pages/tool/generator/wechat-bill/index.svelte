<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import WeChatBill from '../../../../components/generator/wechat/bill/index.svelte';
  import { CATEGORY } from '../../../../constant/tools';
</script>

<Layout>
  <ToolLayout
    id='wechat-bill'
    category={CATEGORY.GENERATOR}
  >
    <WeChatBill />
  </ToolLayout>
</Layout>
