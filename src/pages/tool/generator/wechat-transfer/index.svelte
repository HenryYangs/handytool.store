<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import WeChatTransfer from '../../../../components/generator/wechat/transfer/index.svelte';
  import { CATEGORY } from '../../../../constant/tools';
</script>

<Layout>
  <ToolLayout
    id='wechat-transfer'
    category={CATEGORY.GENERATOR}
  >
    <WeChatTransfer />
  </ToolLayout>
</Layout>
