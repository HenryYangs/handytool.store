<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import WechatChange from '../../../../components/generator/wechat/change/index.svelte';
  import { CATEGORY } from '../../../../constant/tools';
</script>

<Layout>
  <ToolLayout
    id='wechat-change'
    category={CATEGORY.GENERATOR}
  >
    <WechatChange />
  </ToolLayout>
</Layout>
