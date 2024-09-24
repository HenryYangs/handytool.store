<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import UnitPanel from '../../../../components/convertor/unit-panel/index.svelte';
  import { CATEGORY } from '../../../../constant/tools';
  import { LENGTH_UNIT_LIST } from '../../../../constant/unit';

  const unitList = LENGTH_UNIT_LIST.map(item => ({
    ...item,
    text: item.value
  }));
</script>

<Layout>
  <ToolLayout
    id='length-unit'
    category={CATEGORY.CONVERTOR}
  >
    <UnitPanel unitList={unitList} />
  </ToolLayout>
</Layout>
