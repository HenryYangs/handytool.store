<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import UnitPanel from '../../../../components/convertor/unit-panel/index.svelte';
  import { CONVERTOR } from '../../../../constant/tools';
  import { stringCaseTransform } from '../../../../utils/string/transform';
  import { LENGTH_UNIT_LIST } from '../../../../constant/unit';

  const id = 'length-unit';
  const tool = CONVERTOR.find(item => item.id === id);
  const unitList = LENGTH_UNIT_LIST.map(item => ({
    ...item,
    text: item.value
  }));
</script>

<Layout>
  <ToolLayout
    id={id}
    title={tool.text}
    category={stringCaseTransform(tool.category)}
    toolsList={CONVERTOR}
    description=''
  >
    <UnitPanel unitList={unitList} />
  </ToolLayout>
</Layout>
