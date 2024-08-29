<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import PlaygroundPanel from '../../../../components/playground-panel/index.svelte';
  import { CONVERTOR } from '../../../../constant/tools';
  import { stringCaseTransform } from '../../../../utils/string/transform';
  import { CONVERTOR_CASE } from './config';

  const id = 'case';
  const tool = CONVERTOR.find(item => item.id === id);

  $: value = '';

  const onValueChange = (newVal) => {
    value = newVal;
  };
</script>

<Layout>
  <ToolLayout
    id={id}
    title={tool.text}
    category={stringCaseTransform(tool.category)}
    toolsList={CONVERTOR}
    description='Tons of Case Convertor of Text'
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
.header {
  margin-bottom: 20px;
}
</style>
