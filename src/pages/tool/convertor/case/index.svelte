<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import PlaygroundPanel from '../../../../components/playground-panel/index.svelte';
  import { CATEGORY, TOOL_CONVERTOR_ID } from '../../../../constant/tools';
  import { CONVERTOR_CASE } from './config/index.js';

  $: value = '';

  const onValueChange = (newVal) => {
    value = newVal;
  };
</script>

<Layout>
  <ToolLayout
    id={TOOL_CONVERTOR_ID.CASE}
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

<style>
</style>
