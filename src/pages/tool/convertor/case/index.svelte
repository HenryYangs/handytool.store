<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import PlaygroundPanel from '../../../../components/playground-panel/index.svelte';
  import { CATEGORY } from '../../../../constant/tools';
  import { CONVERTOR_CASE } from './config/index.js';

  $: value = '';

  const onValueChange = (newVal) => {
    value = newVal;
  };
</script>

<Layout>
  <ToolLayout
    id='case'
    category={CATEGORY.CONVERTOR}
  >
    <PlaygroundPanel
      actions={CONVERTOR_CASE}
      bind:value
      onValueChange={onValueChange}
    >
      <!-- TODO -->
      <!-- <div slot='header' class='header'>header</div> -->
    </PlaygroundPanel>
  </ToolLayout>
</Layout>

<style global lang='scss'>
</style>
