<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import UnitPanel from '../../../../components/convertor/unit-panel/index.svelte';
  import { CATEGORY } from '../../../../constant/tools';
  import { TIME_UNIT_LIST } from '../../../../constant/unit/time';

  const unitList = TIME_UNIT_LIST.map(item => ({
    ...item,
    text: item.value
  }));
</script>

<Layout>
  <ToolLayout
    id='time-unit'
    category={CATEGORY.CONVERTOR}
  >
    <UnitPanel unitList={unitList} />
  </ToolLayout>
</Layout>
