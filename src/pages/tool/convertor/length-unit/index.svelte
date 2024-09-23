<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import UnitPanel from '../../../../components/convertor/unit-panel/index.svelte';
  import { CATEGORY, TOOL_CONVERTOR_ID } from '../../../../constant/tools';
  import { LENGTH_UNIT_LIST } from '../../../../constant/unit';

  const unitList = LENGTH_UNIT_LIST.map(item => ({
    ...item,
    text: item.value
  }));
</script>

<Layout>
  <ToolLayout
    id={TOOL_CONVERTOR_ID.LENGTH_UNIT}
    category={CATEGORY.CONVERTOR}
  >
    <UnitPanel unitList={unitList} />
  </ToolLayout>
</Layout>
