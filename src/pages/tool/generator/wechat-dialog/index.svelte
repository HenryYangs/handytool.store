<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import WechatDialog from '../../../../components/generator/wechat/dialog/index.svelte';
  import { CATEGORY } from '../../../../constant/tools';
</script>

<Layout>
  <ToolLayout
    id='wechat-dialog'
    category={CATEGORY.GENERATOR}
  >
    <WechatDialog />
  </ToolLayout>
</Layout>
